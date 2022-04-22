-- File auto generated by purescript-bridge! --
module Plutus.V1.Ledger.Value where

import Prelude

import ConstrIndices (class HasConstrIndices, constrIndices, fromConstr2Index)
import Data.BigInt (BigInt)
import Data.Generic.Rep (class Generic)
import Data.Lens (Iso', Lens', Prism', iso, prism')
import Data.Lens.Iso.Newtype (_Newtype)
import Data.Lens.Record (prop)
import Data.Maybe (Maybe(Nothing, Just))
import Data.Newtype (class Newtype)
import Data.Tuple (Tuple, Tuple(Tuple))
import FromData (class FromData, fromData, genericFromData)
import Plutus.Types.AssocMap (Map)
import ToData (class ToData, genericToData, toData)
import Type.Proxy (Proxy(Proxy))
import Types.ByteArray (ByteArray)

newtype Value = Value (Map CurrencySymbol (Map TokenName BigInt))

derive instance Generic Value _

derive instance Newtype Value _

instance HasConstrIndices Value where
  constrIndices _ = fromConstr2Index [ Tuple "Value" 0 ]

derive newtype instance ToData Value

derive newtype instance FromData Value

--------------------------------------------------------------------------------

_Value :: Iso' Value (Map CurrencySymbol (Map TokenName BigInt))
_Value = _Newtype

--------------------------------------------------------------------------------

newtype CurrencySymbol = CurrencySymbol ByteArray

derive instance Eq CurrencySymbol

derive instance Ord CurrencySymbol

derive instance Generic CurrencySymbol _

derive instance Newtype CurrencySymbol _

instance HasConstrIndices CurrencySymbol where
  constrIndices _ = fromConstr2Index [ Tuple "CurrencySymbol" 0 ]

derive newtype instance ToData CurrencySymbol

derive newtype instance FromData CurrencySymbol

--------------------------------------------------------------------------------

_CurrencySymbol :: Iso' CurrencySymbol ByteArray
_CurrencySymbol = _Newtype

--------------------------------------------------------------------------------

newtype AssetClass = AssetClass (Tuple CurrencySymbol TokenName)

derive instance Eq AssetClass

derive instance Ord AssetClass

derive instance Generic AssetClass _

derive instance Newtype AssetClass _

instance HasConstrIndices AssetClass where
  constrIndices _ = fromConstr2Index [ Tuple "AssetClass" 0 ]

derive newtype instance ToData AssetClass

derive newtype instance FromData AssetClass

--------------------------------------------------------------------------------

_AssetClass :: Iso' AssetClass (Tuple CurrencySymbol TokenName)
_AssetClass = _Newtype

--------------------------------------------------------------------------------

newtype TokenName = TokenName ByteArray

derive instance Eq TokenName

derive instance Ord TokenName

derive instance Generic TokenName _

derive instance Newtype TokenName _

instance HasConstrIndices TokenName where
  constrIndices _ = fromConstr2Index [ Tuple "TokenName" 0 ]

derive newtype instance ToData TokenName

derive newtype instance FromData TokenName

--------------------------------------------------------------------------------

_TokenName :: Iso' TokenName ByteArray
_TokenName = _Newtype
