-- File auto generated by purescript-bridge! --
module TestData where

import Prelude

import Data.Generic.Rep (class Generic)
import Data.Maybe (Maybe(Nothing, Just))
import Data.Show.Generic (genericShow)
import Data.Tuple (Tuple(Tuple))
import FromData (class FromData, genericFromData)
import ToData (class ToData, genericToData)
import TypeLevel.DataSchema (ApPCons, Field, I, Id, IxK, MkField, MkField_, MkIxK, MkIxK_, PCons, PNil, PSchema, class HasPlutusSchema, type (:+), type (:=), type (@@))
import TypeLevel.Nat (S, Z)

data TwoRecords
  = FirstRecord
    { _fra :: String
    , _frb :: Int
    }
  | SecondRecord
    { _src :: Int
    , _srd :: Array Int
    }

derive instance Generic TwoRecords _

instance Show TwoRecords where
  show a = genericShow a

instance HasPlutusSchema TwoRecords
  ("FirstRecord" :=
     ("_fra" := I String
     :+ "_frb" := I Int
     :+ PNil)
   @@ (Z)
  :+ "SecondRecord" :=
       ("_src" := I Int
       :+ "_srd" := I (Array Int)
       :+ PNil)
     @@ (S (Z))
  :+ PNil)

instance ToData TwoRecords where
  toData x = genericToData x

instance FromData TwoRecords where
  fromData x = genericFromData x
