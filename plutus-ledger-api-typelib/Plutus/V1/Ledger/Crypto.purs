-- File auto generated by purescript-bridge! --
module Plutus.V1.Ledger.Crypto where

import Prelude

import Data.Generic.Rep (class Generic)
import Data.Lens (Iso', Lens', Prism', iso, prism')
import Data.Lens.Iso.Newtype (_Newtype)
import Data.Lens.Record (prop)
import Data.Maybe (Maybe(Nothing, Just))
import Data.Newtype (class Newtype)
import Data.Show.Generic (genericShow)
import FromData (class FromData, genericFromData)
import Plutus.V1.Ledger.Bytes (LedgerBytes)
import ToData (class ToData, genericToData)
import Type.Proxy (Proxy(Proxy))
import Types.ByteArray (ByteArray)

newtype PubKey = PubKey LedgerBytes

instance Show PubKey where
  show a = genericShow a

derive instance Generic PubKey _

derive instance Newtype PubKey _

derive newtype instance ToData PubKey

derive newtype instance FromData PubKey

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

--------------------------------------------------------------------------------

_Signature :: Iso' Signature ByteArray
_Signature = _Newtype
