{-# LANGUAGE BlockArguments #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TypeApplications #-}

module RoundTrip.Spec (spec) where

import Codec.Serialise qualified as Cbor
import Control.Monad (guard, unless)
import Data.Aeson (eitherDecode, encode)
import Data.ByteString.Base16 qualified as Base16
import Data.ByteString.Lazy (fromStrict, toStrict)
import Data.ByteString.Lazy.UTF8 (fromString, toString)
import Data.List (isInfixOf)
import Language.PureScript.Bridge (
  Language (Haskell),
  SumType,
  argonaut,
  buildBridge,
  defaultSwitch,
  equal,
  functor,
  genericShow,
  mkPlutusNewtype,
  mkSumType,
  order,
  unsafeMkPlutusDataType,
  writePSTypesWith,
 )
import Language.PureScript.Bridge.TypeParameters (A)
import PlutusTx (toData)
import PlutusTx.IsData.Class (fromData)
import PlutusTx.LedgerTypes (plutusLedgerApiBridge)
import RoundTrip.Types (
  ANewtype,
  ANewtypeRec,
  ARecord,
  ASum,
  MyUnit,
  RepType (RTJson, RTPlutusData),
  Request (Req),
  Response,
  TestData,
  TestEnum,
  TestMultiInlineRecords,
  TestNewtype,
  TestNewtypeRecord,
  TestPlutusData,
  TestPlutusDataSum,
  TestRecord,
  TestRecursiveA,
  TestRecursiveB,
  TestSum,
  TestTwoFields,
  response,
 )
import System.Directory (createDirectoryIfMissing, withCurrentDirectory)
import System.Exit (ExitCode (ExitSuccess))
import System.IO (BufferMode (LineBuffering), hGetLine, hPutStrLn, hSetBuffering)
import System.Process (
  getPid,
  readProcessWithExitCode,
  runInteractiveCommand,
  terminateProcess,
 )
import Test.HUnit (assertEqual, assertFailure)
import Test.Hspec (Spec, beforeAll, describe, it)
import Test.QuickCheck.Property (Testable (property))

spec :: Spec
spec = describe "Round trip tests (Purescript <-> Haskell)" roundTripSpec

roundTripSpec :: Spec
roundTripSpec = do
  beforeAll (startPurescript plutusLedgerApiBridge (myTypes <> myPlutusTypes)) $
    describe "With plutus-ledger-api bridge" do
      it "should have a Purescript process running" $ \(_hin, _hout, _herr, hproc) -> do
        mayPid <- getPid hproc
        maybe
          (assertFailure "No process running")
          (\_ -> return ())
          mayPid
      it "should produce Aeson-compatible representations" $ \(hin, hout, herr, _hproc) -> do
        property $
          \testData ->
            do
              -- Prepare request
              let payload = toString $ encode @TestData testData
              -- IPC
              resp <- doReq hin herr hout (Req RTJson payload)
              -- Assert response
              jsonResp <-
                response
                  (\err -> assertFailure $ "hs> Wanted ResSuccess got ResError " <> err)
                  return
                  (\pd -> assertFailure $ "hs> Wanted RTJson got RTPlutusData: " <> pd)
                  resp
              assertEqual
                "hs> Round trip for payload should be ok"
                (Right testData)
                (eitherDecode @TestData (fromString jsonResp))
      it "should produce PlutusData compatible representations" $ \(hin, hout, herr, _hproc) -> do
        property $
          \testPlutusData ->
            do
              -- Prepare request
              let payload = encodeBase16 $ Cbor.serialise $ toData @TestPlutusData testPlutusData
              -- IPC
              resp <- doReq hin herr hout (Req RTPlutusData payload)
              -- Assert response
              pdResp <-
                response
                  (\err -> assertFailure $ "hs> Wanted ResSuccess got ResError " <> err)
                  (\json -> assertFailure $ "hs> Wanted RTPlutusData got RTJson " <> json)
                  return
                  resp
              cbor <-
                either
                  (\err -> assertFailure $ "hs> Wanted Base64 got error: " <> err)
                  return
                  (decodeBase16 pdResp)
              pd <-
                either
                  (\err -> assertFailure $ "hs> Wanted Cbor got error: " <> show err)
                  return
                  (Cbor.deserialiseOrFail cbor)
              assertEqual
                "hs> Round trip for payload should be ok"
                (Just testPlutusData)
                (fromData @TestPlutusData pd)
  where
    doReq hin herr hout req = do
      let jsonReq = toString $ encode @Request req
      -- putStrLn jsonReq -- DEBUG
      -- IPC
      hPutStrLn hin jsonReq
      err <- hGetLine herr
      assertEqual "hs> Purescript shouldn't report an error" "" err
      output <- hGetLine hout
      -- Assert response
      either
        (\err -> assertFailure $ "hs> Wanted Response got error: " <> err)
        return
        (eitherDecode @Response $ fromString output)

    encodeBase16 = toString . fromStrict . Base16.encode . toStrict
    decodeBase16 str = do
      bs <- Base16.decode $ toStrict . fromString $ str
      return $ fromStrict bs

    waitUntil pred fd = do
      l <- hGetLine fd
      putStrLn $ "hs > waitUntil> " <> l
      Control.Monad.unless (pred l) (waitUntil pred fd)

    spagoBuild = do
      (exitCode, _stdout, stderr) <- readProcessWithExitCode "spago" ["build"] ""
      guard $ exitCode == ExitSuccess
      guard $ not $ "[warn]" `isInfixOf` stderr
      guard $ "[info] Build succeeded." `isInfixOf` stderr

    spagoRun = do
      (hin, hout, herr, hproc) <- runInteractiveCommand "spago run"
      mapM_ (`hSetBuffering` LineBuffering) [hin, hout, herr]
      -- Wait until Spago is done with the build
      waitUntil (== "[info] Build succeeded.") herr
      -- Wait for initial "ready" log message
      waitUntil (== "I was born ready") hout
      pure (hin, hout, herr, hproc)

    _stopPurescript = terminateProcess -- TODO: Figure out `after` cleanup
    startPurescript bridge types = do
      withCurrentDirectory "test/RoundTrip/app" do
        createDirectoryIfMissing True "generated"
        writePSTypesWith
          defaultSwitch
          "generated"
          (buildBridge bridge)
          types
        spagoBuild
        spagoRun

myTypes :: [SumType 'Haskell]
myTypes =
  argonaut
    <$> [ equal . genericShow . order $ mkSumType @TestData
        , equal . genericShow . order $ mkSumType @TestSum
        , equal . genericShow . order $ mkSumType @TestRecursiveA
        , equal . genericShow . order $ mkSumType @TestRecursiveB
        , functor . equal . genericShow . order $ mkSumType @(TestRecord A)
        , equal . genericShow . order $ mkSumType @TestNewtype
        , equal . genericShow . order $ mkSumType @TestNewtypeRecord
        , equal . genericShow . order $ mkSumType @TestMultiInlineRecords
        , equal . genericShow . order $ mkSumType @TestTwoFields
        , equal . genericShow . order $ mkSumType @TestEnum
        , equal . genericShow . order $ mkSumType @MyUnit
        , equal . genericShow . order $ mkSumType @Request
        , equal . genericShow . order $ mkSumType @Response
        , equal . genericShow . order $ mkSumType @RepType
        ]

myPlutusTypes :: [SumType 'Haskell]
myPlutusTypes =
  [ equal . genericShow $ mkPlutusNewtype @ANewtype
  , equal . genericShow $ mkPlutusNewtype @ANewtypeRec
  , equal . genericShow $ unsafeMkPlutusDataType @ARecord
  , equal . genericShow $ unsafeMkPlutusDataType @ASum
  , equal . genericShow . order $ unsafeMkPlutusDataType @TestPlutusData
  , equal . genericShow . order $ unsafeMkPlutusDataType @TestPlutusDataSum
  ]
