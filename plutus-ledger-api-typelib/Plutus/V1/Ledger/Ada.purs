-- File auto generated by purescript-bridge! --
module Plutus.V1.Ledger.Ada where

import Prelude

import ConstrIndices (class HasConstrIndices, constrIndices, fromConstr2Index)
import Data.BigInt (BigInt)
import Data.Generic.Rep (class Generic)
import Data.Lens (Iso', Lens', Prism', iso, prism')
import Data.Lens.Iso.Newtype (_Newtype)
import Data.Lens.Record (prop)
import Data.Maybe (Maybe(Nothing, Just))
import Data.Newtype (class Newtype)
import Data.Tuple (Tuple(Tuple))
import FromData (class FromData, fromData, genericFromData)
import ToData (class ToData, genericToData, toData)
import Type.Proxy (Proxy(Proxy))

newtype Ada = Lovelace BigInt

derive instance Generic Ada _

derive instance Newtype Ada _

instance HasConstrIndices Ada where
  constrIndices _ = fromConstr2Index [ Tuple "Lovelace" 0 ]

derive newtype instance ToData Ada

derive newtype instance FromData Ada

--------------------------------------------------------------------------------

_Lovelace :: Iso' Ada BigInt
_Lovelace = _Newtype
