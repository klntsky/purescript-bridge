# purescript-bridge (Plutus remix)

This repository contains a fork of `purescript-bridge` which has been modified for compatibility with with Plutus. The top-level `PlutusBridge` module should provide all of the necessary functionality for Plutus-related uses. 

To facilitate compatibility with Plutus, the modules in this project provide:

## The `HasConstrIndices` type class (located in `PlutusTx.ConstrIndices`)  

``` haskell
class HasConstrIndices (a :: Type) where
  getConstrIndices :: [(Int, String)]
```

This class is used to record constructor index information. Due to the existence of the `makeIsDataIndexed` function in Plutus, the `PlutusCore.Data.Data` instance generated by `ToData` for a given Haskell type may contain constructors (i.e. `Constr Integer [Data]`) where the index (the `Integer`) may not match the natural order of the constructors. The natural order of the constructors, therefore, cannot be relied upon. `HasConstrIndices` allows us to encode the correct order and use that to generate PureScript `ToData`/`FromData` instances which are compatible with the Haskell instances. 

Users should not ordinarily have to write `HasConstrIndices` instances by hand, and ought to employ the template haskell hooks to generate these instances if possible.  


## Template Haskell machinery 

The `PlutusTx.Aux` module contains several template Haskell functions which can generate `HasConstrIndices` instances. Most users will simply use `PlutusTx.Aux.unstableMakeIsData` or `PlutusTx.Aux.makeIsDataIndexed`. Each of these functions generates the same Haskell `ToData`/`FromData` instances as the Plutus `unstableMakeIsData`/`makeIsDataIndexed` functions, but also generates a Haskell `HasConstrIndices` instance which can be used to generate compatible PureScript `ToData`/`FromData` instances. 

## `mkSumTypeIndexed` & friends 

Once a Haskell `HasConstrIndices` instance has been provided for a type (again, typically through the template haskell functions), you can use `mkSumTypeIndexed` to produce a `SumType Haskell` which will generate a corresponding _PureScript_ `HasConstrIndices` class when writing the bridge. (The PureScript `HasConstrIndices` class is defined in the `ConstrIndices` module of the [cardano-transaction-lib](https://github.com/Plutonomicon/cardano-transaction-lib/) library.)

A type with a PureScript `HasConstrIndices` instance can (provided it is otherwise suitable, i.e., does not contain functions/etc) make use of `genericToData` and `genericFromData` from the `cardano-transaction-lib` library. See the `ToData` and `FromData` modules in that library for more details. 

In cases where you are _certain_ that the index information for a type will never change (perhaps because it is a simple newtpe wrapper), or where you are _certain_ that the constructor indices will always conform with the "natural" order, you may use `extremelyUnsafeMkSumType` instead. This is provided as a convenience however, and its use is discouraged. 

## A Plutus.V1.Ledger Type Package 

Because almost anyone using this library will probably want PureScript versions of those `Plutus.V1.Ledger.X` types that have `Lift`/`ToData`/`FromData` instances, functions for generating those types are provided in this project's `PlutusTx.LedgerTypes` module. 

If you want to generate _only_ the Ledger types (and not generate PureScript versions of your own Haskell types), use `writeLedgerTypes :: FilePath -> IO ()`. The Sample directory in this project's root folder provides an example of the output of that function. 

If you wish to generate both PureScript versions of the Ledger types _and_ some of your own Haskell types, use the function `writerLedgerTypesAnd :: FilePath -> [SumType 'Haskell] -> IO ()`. 

## Examples

The `PlutusTx.LedgerTypes` and `PlutusTx.ConstrIndices` modules should provide sufficient examples of how all of this works together. If you remain confused, please open an issue and I will attempt to clear up the confusion. 


# Old Readme 

Translate your Haskell types to PureScript types. It should in theory work for almost all Haskell types, including type constructors!
You just have to instantiate it with dummy parameters from e.g. "Language.PureScript.Bridge.TypeParameters".

Data type translation is fully and easily customizable by providing your own `BridgePart` instances!

## JSON encoding / decoding

For compatible JSON representations you should be using [aeson](http://hackage.haskell.org/package/aeson)'s generic encoding/decoding with default options
and `encodeJson` and `decodeJson` from "Data.Argonaut.Generic.Aeson" in [purescript-argonaut-generic-codecs](https://github.com/eskimor/purescript-argonaut-generic-codecs).


## Documentation

Usage of this library is documented in `Language.Purescript.Bridge`, with `writePSTypes` you should have everything to get started. Documentation can be found [here](https://www.stackage.org/nightly/package/purescript-bridge).

## Status

It works for my use case and is used in production. PRs for more `PSType`s definitions and bridges are very welcome! 
