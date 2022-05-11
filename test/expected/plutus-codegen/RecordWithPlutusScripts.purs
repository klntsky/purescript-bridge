-- File auto generated by purescript-bridge! --
module TestData where

import Prelude

import Control.Lazy (defer)
import Data.Argonaut.Core (jsonNull)
import Data.Argonaut.Decode (class DecodeJson, decodeJson)
import Data.Argonaut.Decode.Aeson ((</$\>), (</*\>), (</\>), decode, null)
import Data.Argonaut.Encode (class EncodeJson, encodeJson)
import Data.Argonaut.Encode.Aeson ((>$<), (>/\<), encode, null)
import Data.Generic.Rep (class Generic)
import Data.Maybe (Maybe(Nothing, Just))
import Data.Newtype (class Newtype, unwrap)
import Data.Tuple.Nested ((/\))
import Types.Scripts (MintingPolicy, Validator)
import Data.Argonaut.Decode.Aeson as D
import Data.Argonaut.Encode.Aeson as E
import Data.Map as Map

newtype RecordWithPlutusScripts = RecordWithPlutusScripts
  { mintingPolicy :: MintingPolicy
  , validator :: Validator
  }

instance EncodeJson RecordWithPlutusScripts where
  encodeJson = defer \_ -> E.encode $ unwrap >$< (E.record
                                                   { mintingPolicy: E.value :: _ MintingPolicy
                                                   , validator: E.value :: _ Validator
                                                   })

instance DecodeJson RecordWithPlutusScripts where
  decodeJson = defer \_ -> D.decode $ (RecordWithPlutusScripts <$> D.record "RecordWithPlutusScripts"
      { mintingPolicy: D.value :: _ MintingPolicy
      , validator: D.value :: _ Validator
      })

derive instance Generic RecordWithPlutusScripts _

derive instance Newtype RecordWithPlutusScripts _
