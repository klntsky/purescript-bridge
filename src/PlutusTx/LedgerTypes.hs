{-# LANGUAGE ScopedTypeVariables #-}

module PlutusTx.LedgerTypes (writeLedgerTypes, writeLedgerTypesAnd, plutusLedgerApiBridge, writePlutusTypes) where

import Language.PureScript.Bridge (
  BridgeBuilder,
  BridgePart,
  Language (Haskell),
  PSType,
  SumType,
  TypeInfo (
    TypeInfo,
    _typeModule,
    _typeName,
    _typePackage,
    _typeParameters
  ),
  argonaut,
  buildBridge,
  defaultBridge,
  genericShow,
  mkPlutusDataType,
  mkPlutusNewtype,
  mkSumType,
  order,
  psTypeParameters,
  typeModule,
  typeName,
  unsafeMkPlutusDataType,
  writePSTypes,
  (<|>),
  (^==),
 )
import Language.PureScript.Bridge.TypeParameters (A)
import PlutusTx.ConstrIndices ()

-- Ledger type imports
import Plutus.V1.Ledger.Ada (Ada)
import Plutus.V1.Ledger.Address (Address)
import Plutus.V1.Ledger.Bytes (LedgerBytes)
import Plutus.V1.Ledger.Contexts (ScriptContext, ScriptPurpose, TxInInfo, TxInfo)
import Plutus.V1.Ledger.Credential (Credential, StakingCredential)
import Plutus.V1.Ledger.Crypto (PrivateKey, PubKey, PubKeyHash, Signature)
import Plutus.V1.Ledger.DCert (DCert)
import Plutus.V1.Ledger.Interval (Extended, Interval, LowerBound, UpperBound)
import Plutus.V1.Ledger.Scripts (
  Datum,
  DatumHash,
  MintingPolicy,
  MintingPolicyHash,
  Redeemer,
  ScriptHash,
  StakeValidatorHash,
  Validator,
  ValidatorHash,
 )
import Plutus.V1.Ledger.Slot (Slot)
import Plutus.V1.Ledger.Time (DiffMilliSeconds, POSIXTime)
import Plutus.V1.Ledger.Tx (TxOut, TxOutRef)
import Plutus.V1.Ledger.TxId (TxId)
import Plutus.V1.Ledger.Value (
  AssetClass,
  CurrencySymbol,
  TokenName,
  Value,
 )

import Data.Text (Text)

{- | Ledger types translation
 Ledger types exist in several forms and it's useful to formulate a language
 to differentiate them:
  - `original` ledger types from the Haskell `github:input-output-hk\/plutus\/plutus-ledger-api` library,
  - `bridged` ledger types that are Purescript copies of the `originals`,
  - `ctl native` ledger types that are specified directly in CTL.

 Since `ctl native` ledger types are used in CTL contracts, it's useful for
 'user defined' data types , intended to be Plutus Data encoded/decoded, to be
 `bridged` so they use `ctl native` ledger types where possible. However, to
 assure compatible Plutus Data representation of `ctl native` ledger type with
 `originals`, we propose to use this library and perform `ctl native <->
 bridged <-> plutus data` mapping.
-}
writeLedgerTypes :: FilePath -> IO ()
writeLedgerTypes fp = writeLedgerTypesAnd fp []

writeLedgerTypesAnd :: FilePath -> [SumType 'Haskell] -> IO ()
writeLedgerTypesAnd fp myTypes =
  writePSTypes
    fp
    (buildBridge plutusLedgerApiBridge)
    (ledgerTypes <> myTypes)

plutusLedgerApiBridge :: BridgeBuilder PSType
plutusLedgerApiBridge = defaultBridge <|> origToCtlNativePrimitivesBridge <|> origToCtlNativeOverriddenBridge <|> origToCtlNativeScriptsBridge

writePlutusTypes :: FilePath -> [SumType 'Haskell] -> IO ()
writePlutusTypes fp =
  writePSTypes
    fp
    (buildBridge (defaultBridge <|> origToCtlNativePrimitivesBridge <|> origToCtlNativeOverriddenBridge))

origToCtlNativePrimitivesBridge :: BridgeBuilder PSType
origToCtlNativePrimitivesBridge =
  -- Primitive types
  ctlBridgePart "PlutusTx.Builtins.Internal" "BuiltinByteString" "Types.ByteArray" "ByteArray"
    <|> ctlBridgePart "PlutusTx.Builtins.Internal" "BuiltinData" "Types.PlutusData" "PlutusData"
    <|> ctlBridgePart "GHC.Integer.Type" "Integer" "Data.BigInt" "BigInt"
    <|> ctlBridgePart "PlutusTx.Ratio" "Rational" "Types.Rational" "Rational"
    <|> mapBridge

mapBridge :: BridgePart
mapBridge = do
  typeModule ^== "PlutusTx.AssocMap"
  typeName ^== "Map"
  TypeInfo "plutonomicon-cardano-transaction-lib" "Plutus.Types.AssocMap" "Map" <$> psTypeParameters

origToCtlNativeOverriddenBridge :: BridgeBuilder PSType
origToCtlNativeOverriddenBridge =
  ctlBridgePart "Plutus.V1.Ledger.Value" "Value" "Plutus.Types.Value" "Value"
    <|> ctlBridgePart "Plutus.V1.Ledger.Value" "CurrencySymbol" "Plutus.Types.CurrencySymbol" "CurrencySymbol"
    <|> ctlBridgePart "Plutus.V1.Ledger.Value" "TokenName" "Types.TokenName" "TokenName"
    <|> ctlBridgePart "Plutus.V1.Ledger.Address" "Address" "Plutus.Types.Address" "Address"

origToCtlNativeScriptsBridge :: BridgeBuilder PSType
origToCtlNativeScriptsBridge =
  ctlBridgePart "Plutus.V1.Ledger.Scripts" "MintingPolicy" "Types.Scripts" "MintingPolicy"
    <|> ctlBridgePart "Plutus.V1.Ledger.Scripts" "Validator" "Types.Scripts" "Validator"

_overriddenTypes :: [SumType 'Haskell]
_overriddenTypes =
  [ mkPlutusNewtype @Value
  , order $ mkPlutusNewtype @CurrencySymbol
  , order $ mkPlutusNewtype @TokenName
  , mkPlutusNewtype @Address
  , argonaut $ mkSumType @MintingPolicy
  , argonaut $ mkSumType @Validator
  ]

ledgerTypes :: [SumType 'Haskell]
ledgerTypes =
  genericShow
    <$> [ order $ mkPlutusNewtype @AssetClass -- this might be a type synonym in the version of Plutus we're using at Cardax?
        , order $ unsafeMkPlutusDataType @TxId
        , unsafeMkPlutusDataType @TxOut
        , unsafeMkPlutusDataType @TxOutRef
        , order $ mkPlutusNewtype @DiffMilliSeconds
        , order $ mkPlutusNewtype @POSIXTime
        , order $ mkPlutusNewtype @Slot
        , mkPlutusNewtype @Redeemer
        , mkPlutusNewtype @Datum
        , mkPlutusNewtype @ScriptHash
        , mkPlutusNewtype @ValidatorHash
        , mkPlutusNewtype @DatumHash
        , mkPlutusNewtype @MintingPolicyHash
        , mkPlutusNewtype @StakeValidatorHash
        , mkPlutusNewtype @PubKey
        , mkPlutusNewtype @PubKeyHash
        , mkPlutusNewtype @PrivateKey
        , mkPlutusNewtype @Signature
        , unsafeMkPlutusDataType @TxInfo
        , unsafeMkPlutusDataType @TxInInfo
        , unsafeMkPlutusDataType @ScriptContext
        , mkPlutusNewtype @LedgerBytes
        , mkPlutusNewtype @Ada
        , unsafeMkPlutusDataType @(Interval A)
        , unsafeMkPlutusDataType @(LowerBound A)
        , unsafeMkPlutusDataType @(UpperBound A)
        , mkPlutusDataType @DCert
        , mkPlutusDataType @(Extended A)
        , mkPlutusDataType @StakingCredential
        , mkPlutusDataType @Credential
        , mkPlutusDataType @ScriptPurpose
        ]

ctlBridgePart :: Text -> Text -> Text -> Text -> BridgePart
ctlBridgePart haskTypeModule haskTypeName psTypeModule psTypeName = do
  typeModule ^== haskTypeModule
  typeName ^== haskTypeName
  return $
    TypeInfo
      { _typePackage = "plutonomicon-cardano-transaction-lib"
      , _typeModule = psTypeModule
      , _typeName = psTypeName
      , _typeParameters = []
      }
