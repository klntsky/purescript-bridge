-- File auto generated by purescript-bridge! --
module Plutus.V1.Ledger.Ada where

import Prelude

import Data.BigInt (BigInt)
import Data.Generic.Rep (class Generic)
import Data.Lens (Iso', Lens', Prism', iso, prism')
import Data.Lens.Iso.Newtype (_Newtype)
import Data.Lens.Record (prop)
import Data.Maybe (Maybe(Nothing, Just))
import Data.Newtype (class Newtype)
import Data.Show.Generic (genericShow)
import Data.Tuple (Tuple(Tuple))
import FromData (class FromData, genericFromData)
import ToData (class ToData, genericToData)
import Type.Proxy (Proxy(Proxy))
import TypeLevel.DataSchema (ApPCons, Field, I, Id, IxK, MkField, MkField_, MkIxK, MkIxK_, PCons, PNil, PSchema, class HasPlutusSchema, type (:+), type (:=), type (@@))
import TypeLevel.Nat (S, Z)

newtype Ada = Lovelace { getLovelace :: BigInt }

instance Show Ada where
  show a = genericShow a

derive instance Generic Ada _

derive instance Newtype Ada _

instance HasPlutusSchema Ada
  ("Lovelace" :=
     ("getLovelace" := I BigInt
     :+ PNil)
   @@ (Z)
  :+ PNil)

derive newtype instance ToData Ada

derive newtype instance FromData Ada

--------------------------------------------------------------------------------

_Lovelace :: Iso' Ada {getLovelace :: BigInt}
_Lovelace = _Newtype
