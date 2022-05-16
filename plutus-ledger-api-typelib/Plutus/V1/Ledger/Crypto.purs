-- File auto generated by purescript-bridge! --
module Plutus.V1.Ledger.Crypto where

import Prelude

import Control.Lazy (defer)
import Data.Argonaut.Core (Json, jsonNull)
import Data.Argonaut.Decode (class DecodeJson, decodeJson)
import Data.Argonaut.Decode.Aeson ((</$\>), (</*\>), (</\>), decode, null)
import Data.Argonaut.Encode (class EncodeJson, encodeJson)
import Data.Argonaut.Encode.Aeson ((>$<), (>/\<), encode, null)
import Data.Generic.Rep (class Generic)
import Data.Lens (Iso', Lens', Prism', iso, prism')
import Data.Lens.Iso.Newtype (_Newtype)
import Data.Lens.Record (prop)
import Data.Maybe (Maybe(Nothing, Just))
import Data.Newtype (class Newtype, unwrap)
import Data.Op (Op(Op))
import Data.Show.Generic (genericShow)
import Data.Tuple.Nested ((/\))
import FromData (class FromData, genericFromData)
import Plutus.V1.Ledger.Bytes (LedgerBytes)
import Record (get)
import ToData (class ToData, genericToData)
import Type.Proxy (Proxy(Proxy))
import Types.ByteArray (ByteArray)
import Data.Argonaut.Decode.Aeson as D
import Data.Argonaut.Encode.Aeson as E
import Data.Map as Map

newtype PubKey = PubKey LedgerBytes

instance Show PubKey where
  show a = genericShow a

derive instance Generic PubKey _

derive instance Newtype PubKey _



derive newtype instance ToData PubKey

derive newtype instance FromData PubKey

instance EncodeJson PubKey where
  encodeJson x = E.encode  (E.record {getPubKey: E.value :: Op Json (LedgerBytes) }) {getPubKey: unwrap x}

instance DecodeJson PubKey where
  decodeJson = defer \_ -> get (Proxy :: Proxy "getPubKey") <$> D.decode D.record "getPubKey"{ getPubKey: D.value}

--------------------------------------------------------------------------------

_PubKey :: Iso' PubKey LedgerBytes
_PubKey = _Newtype

--------------------------------------------------------------------------------

newtype PubKeyHash = PubKeyHash ByteArray

instance Show PubKeyHash where
  show a = genericShow a

derive instance Generic PubKeyHash _

derive instance Newtype PubKeyHash _



derive newtype instance ToData PubKeyHash

derive newtype instance FromData PubKeyHash

instance EncodeJson PubKeyHash where
  encodeJson x = E.encode  (E.record {getPubKeyHash: E.value :: Op Json (ByteArray) }) {getPubKeyHash: unwrap x}

instance DecodeJson PubKeyHash where
  decodeJson = defer \_ -> get (Proxy :: Proxy "getPubKeyHash") <$> D.decode D.record "getPubKeyHash"{ getPubKeyHash: D.value}

--------------------------------------------------------------------------------

_PubKeyHash :: Iso' PubKeyHash ByteArray
_PubKeyHash = _Newtype

--------------------------------------------------------------------------------

newtype PrivateKey = PrivateKey LedgerBytes

instance Show PrivateKey where
  show a = genericShow a

derive instance Generic PrivateKey _

derive instance Newtype PrivateKey _



derive newtype instance ToData PrivateKey

derive newtype instance FromData PrivateKey

instance EncodeJson PrivateKey where
  encodeJson x = E.encode  (E.record {getPrivateKey: E.value :: Op Json (LedgerBytes) }) {getPrivateKey: unwrap x}

instance DecodeJson PrivateKey where
  decodeJson = defer \_ -> get (Proxy :: Proxy "getPrivateKey") <$> D.decode D.record "getPrivateKey"{ getPrivateKey: D.value}

--------------------------------------------------------------------------------

_PrivateKey :: Iso' PrivateKey LedgerBytes
_PrivateKey = _Newtype

--------------------------------------------------------------------------------

newtype Signature = Signature ByteArray

instance Show Signature where
  show a = genericShow a

derive instance Generic Signature _

derive instance Newtype Signature _



derive newtype instance ToData Signature

derive newtype instance FromData Signature

instance EncodeJson Signature where
  encodeJson x = E.encode  (E.record {getSignature: E.value :: Op Json (ByteArray) }) {getSignature: unwrap x}

instance DecodeJson Signature where
  decodeJson = defer \_ -> get (Proxy :: Proxy "getSignature") <$> D.decode D.record "getSignature"{ getSignature: D.value}

--------------------------------------------------------------------------------

_Signature :: Iso' Signature ByteArray
_Signature = _Newtype
