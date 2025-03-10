-- File auto generated by purescript-bridge! --
module Plutus.V1.Ledger.Bytes where

import Prelude

import Data.Generic.Rep (class Generic)
import Data.Lens (Iso', Lens', Prism', iso, prism')
import Data.Lens.Iso.Newtype (_Newtype)
import Data.Lens.Record (prop)
import Data.Maybe (Maybe(Nothing, Just))
import Data.Newtype (class Newtype)
import Data.Show.Generic (genericShow)
import FromData (class FromData, genericFromData)
import ToData (class ToData, genericToData)
import Type.Proxy (Proxy(Proxy))
import Types.ByteArray (ByteArray)

newtype LedgerBytes = LedgerBytes ByteArray

instance Show LedgerBytes where
  show a = genericShow a

derive instance Generic LedgerBytes _

derive instance Newtype LedgerBytes _

derive newtype instance ToData LedgerBytes

derive newtype instance FromData LedgerBytes

--------------------------------------------------------------------------------

_LedgerBytes :: Iso' LedgerBytes ByteArray
_LedgerBytes = _Newtype
