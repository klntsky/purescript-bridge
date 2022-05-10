// Generated by purs version 0.14.5
"use strict";
var Aeson = require("../Aeson/index.js");
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Argonaut_Decode_Class = require("../Data.Argonaut.Decode.Class/index.js");
var Data_Argonaut_Decode_Error = require("../Data.Argonaut.Decode.Error/index.js");
var Data_Argonaut_Encode_Class = require("../Data.Argonaut.Encode.Class/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_BigInt = require("../Data.BigInt/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Generic_Rep = require("../Data.Generic.Rep/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Show_Generic = require("../Data.Show.Generic/index.js");
var Data_String_CodePoints = require("../Data.String.CodePoints/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_UInt = require("../Data.UInt/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Foreign_Object = require("../Foreign.Object/index.js");
var QueryM_JsonWsp = require("../QueryM.JsonWsp/index.js");
var Serialization_Address = require("../Serialization.Address/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var Types_ByteArray = require("../Types.ByteArray/index.js");
var Types_Value = require("../Types.Value/index.js");
var Untagged_TypeCheck = require("../Untagged.TypeCheck/index.js");
var Untagged_Union = require("../Untagged.Union/index.js");
var TxEvaluationResult = function (x) {
    return x;
};
var OgmiosBlockHeaderHash = function (x) {
    return x;
};
var UtxoQR = function (x) {
    return x;
};
var ChainOrigin = function (x) {
    return x;
};
var CtChainOrigin = (function () {
    function CtChainOrigin(value0) {
        this.value0 = value0;
    };
    CtChainOrigin.create = function (value0) {
        return new CtChainOrigin(value0);
    };
    return CtChainOrigin;
})();
var CtChainPoint = (function () {
    function CtChainPoint(value0) {
        this.value0 = value0;
    };
    CtChainPoint.create = function (value0) {
        return new CtChainPoint(value0);
    };
    return CtChainPoint;
})();
var Assets = function (x) {
    return x;
};
var showUtxoQR = Data_Map_Internal.showMap(Data_Show.showRecord()(Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "index";
    }
})(Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "txId";
    }
})(Data_Show.showRecordFieldsNil)(Data_Show.showString))(Data_UInt.uintShowInstance)))(Data_Show.showRecord()(Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "address";
    }
})(Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "datum";
    }
})(Data_Show.showRecordFieldsCons({
    reflectSymbol: function () {
        return "value";
    }
})(Data_Show.showRecordFieldsNil)(Types_Value.showValue))(Data_Maybe.showMaybe(Data_Show.showString)))(Data_Show.showString)));
var hasRuntimeTypeChainOrigin = Untagged_TypeCheck.hasRuntimeTypeString;
var genericOgmiosBlockHeaderH = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showOgmiosBlockHeaderHash = {
    show: Data_Show_Generic.genericShow(genericOgmiosBlockHeaderH)(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(Data_Show.showString))({
        reflectSymbol: function () {
            return "OgmiosBlockHeaderHash";
        }
    }))
};
var genericChainTipQR_ = {
    to: function (x) {
        if (x instanceof Data_Generic_Rep.Inl) {
            return new CtChainOrigin(x.value0);
        };
        if (x instanceof Data_Generic_Rep.Inr) {
            return new CtChainPoint(x.value0);
        };
        throw new Error("Failed pattern match at QueryM.Ogmios (line 165, column 1 - line 165, column 37): " + [ x.constructor.name ]);
    },
    from: function (x) {
        if (x instanceof CtChainOrigin) {
            return new Data_Generic_Rep.Inl(x.value0);
        };
        if (x instanceof CtChainPoint) {
            return new Data_Generic_Rep.Inr(x.value0);
        };
        throw new Error("Failed pattern match at QueryM.Ogmios (line 165, column 1 - line 165, column 37): " + [ x.constructor.name ]);
    }
};
var genericChainOrigin_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showChainOrigin = {
    show: Data_Show_Generic.genericShow(genericChainOrigin_)(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(Data_Show.showString))({
        reflectSymbol: function () {
            return "ChainOrigin";
        }
    }))
};
var showChainTipQR = {
    show: Data_Show_Generic.genericShow(genericChainTipQR_)(Data_Show_Generic.genericShowSum(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showChainOrigin))({
        reflectSymbol: function () {
            return "CtChainOrigin";
        }
    }))(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(Data_Show.showRecord()(Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "hash";
        }
    })(Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "slot";
        }
    })(Data_Show.showRecordFieldsNil)(Serialization_Address.showSlot))(showOgmiosBlockHeaderHash))))({
        reflectSymbol: function () {
            return "CtChainPoint";
        }
    })))
};
var eqOgmiosBlockHeaderHash = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var eqChainOrigin = {
    eq: function (x) {
        return function (y) {
            return x === y;
        };
    }
};
var decodeAesonTxEvaluationRe = {
    decodeAeson: function (v) {
        return new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("DecodeAeson TxEvaluationResult is not implemented"));
    }
};
var decodeAesonOgmiosBlockHea = Aeson.decodeAesonString;
var decodeAesonChainOrigin = Aeson.decodeAesonString;
var decodeAesonChainTipQR = {
    decodeAeson: function (j) {
        return Control_Bind.bind(Data_Either.bindEither)(Aeson.decodeAeson(Aeson["decodeAeson|+|"]()(decodeAesonChainOrigin)(Aeson.decodeAesonRecord(Aeson.gDecodeAesonCons(Aeson.decodeAesonField1(decodeAesonOgmiosBlockHea))(Aeson.gDecodeAesonCons(Aeson.decodeAesonField1(Serialization_Address.decodeAesonSlot))(Aeson.gDecodeAesonRowNil)({
            reflectSymbol: function () {
                return "slot";
            }
        })()())({
            reflectSymbol: function () {
                return "hash";
            }
        })()())()))(j))(function (v) {
            return Control_Applicative.pure(Data_Either.applicativeEither)(Data_Either.either(CtChainOrigin.create)(CtChainPoint.create)(Untagged_Union.toEither1(hasRuntimeTypeChainOrigin)(v)));
        });
    }
};
var decodeAesonAssets = {
    decodeAeson: function (j) {
        var assetStrError = function (str) {
            return function (t) {
                return function (v) {
                    return Data_Argonaut_Decode_Error.TypeMismatch.create("In " + (str + (": Expected hex-encoded " + (t + (", got: " + v)))));
                };
            };
        };
        var decodeAsset = function (assetStr) {
            return function (quantity) {
                var v = (function () {
                    var v1 = Data_String_CodePoints.indexOf(".")(assetStr);
                    if (v1 instanceof Data_Maybe.Nothing) {
                        return new Data_Tuple.Tuple(assetStr, "");
                    };
                    if (v1 instanceof Data_Maybe.Just) {
                        var v2 = Data_String_CodePoints.splitAt(v1.value0)(assetStr);
                        var tn = Data_Maybe.fromMaybe("")(Data_Functor.mapFlipped(Data_Maybe.functorMaybe)(Data_String_CodePoints.uncons(v2.after))(function (v3) {
                            return v3.tail;
                        }));
                        return new Data_Tuple.Tuple(v2.before, tn);
                    };
                    throw new Error("Failed pattern match at QueryM.Ogmios (line 303, column 31 - line 310, column 27): " + [ v1.constructor.name ]);
                })();
                return Control_Bind.bind(Data_Either.bindEither)(Data_Either.note(assetStrError(assetStr)("CurrencySymbol")(v.value0))(Control_Bind.bindFlipped(Data_Maybe.bindMaybe)(Types_Value.mkCurrencySymbol)(Types_ByteArray.hexToByteArray(v.value0))))(function (currSymb) {
                    return Control_Bind.bind(Data_Either.bindEither)(Data_Either.note(assetStrError(assetStr)("TokenName")(v.value1))(Control_Bind.bindFlipped(Data_Maybe.bindMaybe)(Types_Value.mkTokenName)(Types_ByteArray.hexToByteArray(v.value1))))(function (tokenName) {
                        return Control_Applicative.pure(Data_Either.applicativeEither)(new Data_Tuple.Tuple(currSymb, Data_Map_Internal.singleton(tokenName)(quantity)));
                    });
                });
            };
        };
        return Control_Bind.bind(Data_Either.bindEither)(Data_Functor.map(Data_Either.functorEither)(Foreign_Object.toUnfoldable(Data_Unfoldable.unfoldableArray))(Aeson.decodeAeson(Aeson.decodeAeson1(Foreign_Object.traversableObject)(Aeson.decodeAesonBigInt)(Data_Argonaut_Decode_Class.decodeForeignObject(Data_Argonaut_Decode_Class.decodeJsonJson)))(j)))(function (v) {
            return Data_Functor.map(Data_Either.functorEither)((function () {
                var $75 = Data_Map_Internal.fromFoldableWith(Types_Value.ordCurrencySymbol)(Data_Foldable.foldableArray)(Data_Map_Internal.unionWith(Types_Value.ordTokenName)(Data_Semiring.add(Data_BigInt.semiringBigInt)));
                return function ($76) {
                    return Assets($75($76));
                };
            })())(Data_Traversable.sequence(Data_Traversable.traversableArray)(Data_Either.applicativeEither)(Data_Functor.map(Data_Functor.functorArray)(Data_Tuple.uncurry(decodeAsset))(v)));
        });
    }
};
var parseValue = function (outer) {
    return Control_Bind.bind(Data_Either.bindEither)(Aeson.getField(Aeson.decodeAeson1(Foreign_Object.traversableObject)(Aeson.decodeAesonAeson)(Data_Argonaut_Decode_Class.decodeForeignObject(Data_Argonaut_Decode_Class.decodeJsonJson)))(outer)("value"))(function (o) {
        return Control_Bind.bind(Data_Either.bindEither)(Control_Alt.alt(Data_Either.altEither)(QueryM_JsonWsp.parseFieldToBigInt(o)("coins"))(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("Expected 'coins' to be an Int or a BigInt"))))(function (coins) {
            return Control_Bind.bind(Data_Either.bindEither)(Data_Functor.map(Data_Either.functorEither)(Data_Maybe.fromMaybe(Data_Map_Internal.empty))(Aeson.getFieldOptional(decodeAesonAssets)(o)("assets")))(function (v) {
                return Control_Applicative.pure(Data_Either.applicativeEither)(Types_Value.mkValue(Data_Newtype.wrap()(coins))(Data_Newtype.wrap()(v)));
            });
        });
    });
};
var mkOgmiosCallType = function (dictEncodeJson) {
    return QueryM_JsonWsp.mkCallType(dictEncodeJson)({
        type: "jsonwsp/request",
        version: "1.0",
        servicename: "ogmios"
    });
};
var queryChainTipCall = mkOgmiosCallType(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "query";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "step";
    }
})())({
    reflectSymbol: function () {
        return "id";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "version";
    }
})())({
    reflectSymbol: function () {
        return "type";
    }
})())({
    reflectSymbol: function () {
        return "servicename";
    }
})())({
    reflectSymbol: function () {
        return "mirror";
    }
})())({
    reflectSymbol: function () {
        return "methodname";
    }
})())({
    reflectSymbol: function () {
        return "args";
    }
})())())({
    methodname: "Query",
    args: Data_Function["const"]({
        query: "chainTip"
    })
})(Type_Proxy["Proxy"].value);
var queryUtxosAtCall = mkOgmiosCallType(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonArray(Data_Argonaut_Encode_Class.encodeJsonJString))(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "utxo";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "query";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "step";
    }
})())({
    reflectSymbol: function () {
        return "id";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "version";
    }
})())({
    reflectSymbol: function () {
        return "type";
    }
})())({
    reflectSymbol: function () {
        return "servicename";
    }
})())({
    reflectSymbol: function () {
        return "mirror";
    }
})())({
    reflectSymbol: function () {
        return "methodname";
    }
})())({
    reflectSymbol: function () {
        return "args";
    }
})())())({
    methodname: "Query",
    args: function ($77) {
        return (function (v) {
            return {
                query: v
            };
        })((function (v) {
            return {
                utxo: v
            };
        })(Data_Array.singleton($77)));
    }
})(Type_Proxy["Proxy"].value);
var queryUtxosCall = mkOgmiosCallType(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonArray(Data_Argonaut_Encode_Class.encodeJsonJString))(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "utxo";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "query";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "step";
    }
})())({
    reflectSymbol: function () {
        return "id";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "version";
    }
})())({
    reflectSymbol: function () {
        return "type";
    }
})())({
    reflectSymbol: function () {
        return "servicename";
    }
})())({
    reflectSymbol: function () {
        return "mirror";
    }
})())({
    reflectSymbol: function () {
        return "methodname";
    }
})())({
    reflectSymbol: function () {
        return "args";
    }
})())())({
    methodname: "Query",
    args: function (v) {
        return {
            query: v
        };
    }
})(Type_Proxy["Proxy"].value);
var submitTxCall = mkOgmiosCallType(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "submit";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "step";
    }
})())({
    reflectSymbol: function () {
        return "id";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "version";
    }
})())({
    reflectSymbol: function () {
        return "type";
    }
})())({
    reflectSymbol: function () {
        return "servicename";
    }
})())({
    reflectSymbol: function () {
        return "mirror";
    }
})())({
    reflectSymbol: function () {
        return "methodname";
    }
})())({
    reflectSymbol: function () {
        return "args";
    }
})())())({
    methodname: "SubmitTx",
    args: function ($78) {
        return (function (v) {
            return {
                submit: v
            };
        })(Types_ByteArray.byteArrayToHex((function (v) {
            return v.txCbor;
        })($78)));
    }
})(Type_Proxy["Proxy"].value);
var evaluateTxCall = mkOgmiosCallType(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "evaluate";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeRecord(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "step";
    }
})())({
    reflectSymbol: function () {
        return "id";
    }
})())())(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonCons(Data_Argonaut_Encode_Class.encodeJsonJString)(Data_Argonaut_Encode_Class.gEncodeJsonNil)({
    reflectSymbol: function () {
        return "version";
    }
})())({
    reflectSymbol: function () {
        return "type";
    }
})())({
    reflectSymbol: function () {
        return "servicename";
    }
})())({
    reflectSymbol: function () {
        return "mirror";
    }
})())({
    reflectSymbol: function () {
        return "methodname";
    }
})())({
    reflectSymbol: function () {
        return "args";
    }
})())())({
    methodname: "EvaluateTx",
    args: function ($79) {
        return (function (v) {
            return {
                evaluate: v
            };
        })(Types_ByteArray.byteArrayToHex((function (v) {
            return v.txCbor;
        })($79)));
    }
})(Type_Proxy["Proxy"].value);
var aesonObject = Aeson.caseAesonObject(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("expected object")));
var parseTxOut = aesonObject(function (o) {
    return Control_Bind.bind(Data_Either.bindEither)(QueryM_JsonWsp.parseFieldToString(o)("address"))(function (address) {
        return Control_Bind.bind(Data_Either.bindEither)(parseValue(o))(function (value) {
            var datum = Data_Either.hush(QueryM_JsonWsp.parseFieldToString(o)("datum"));
            return Control_Applicative.pure(Data_Either.applicativeEither)({
                address: address,
                value: value,
                datum: datum
            });
        });
    });
});
var parseTxOutRef = aesonObject(function (o) {
    return Control_Bind.bind(Data_Either.bindEither)(QueryM_JsonWsp.parseFieldToString(o)("txId"))(function (txId) {
        return Control_Bind.bind(Data_Either.bindEither)(QueryM_JsonWsp.parseFieldToUInt(o)("index"))(function (index) {
            return Control_Applicative.pure(Data_Either.applicativeEither)({
                txId: txId,
                index: index
            });
        });
    });
});
var parseUtxoQueryResult = (function () {
    var insertFunc = function (acc) {
        var inner = function (innerArray) {
            return Control_Bind.bind(Data_Either.bindEither)(Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("missing 0th element, expected an OgmiosTxOutRef"))(Data_Array.index(innerArray)(0)))(function (txOutRefJson) {
                return Control_Bind.bind(Data_Either.bindEither)(Data_Either.note(new Data_Argonaut_Decode_Error.TypeMismatch("missing 1st element, expected a TxOut"))(Data_Array.index(innerArray)(1)))(function (txOutJson) {
                    return Control_Bind.bind(Data_Either.bindEither)(parseTxOutRef(txOutRefJson))(function (txOutRef) {
                        return Control_Bind.bind(Data_Either.bindEither)(parseTxOut(txOutJson))(function (txOut) {
                            return Data_Functor.map(Data_Either.functorEither)(Data_Map_Internal.insert(Data_Ord.ordRecord()(Data_Ord.ordRecordCons(Data_Ord.ordRecordCons(Data_Ord.ordRecordNil)()({
                                reflectSymbol: function () {
                                    return "txId";
                                }
                            })(Data_Ord.ordString))()({
                                reflectSymbol: function () {
                                    return "index";
                                }
                            })(Data_UInt.uintOrd)))(txOutRef)(txOut))(acc);
                        });
                    });
                });
            });
        };
        return Aeson.caseAesonArray(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("Expected Array")))(inner);
    };
    return Aeson.caseAesonArray(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("Expected Array")))(Data_Foldable.foldl(Data_Foldable.foldableArray)(insertFunc)(new Data_Either.Right(Data_Map_Internal.empty)));
})();
var decodeAesonUtxoQR = {
    decodeAeson: function (j) {
        return Data_Functor.map(Data_Either.functorEither)(UtxoQR)(parseUtxoQueryResult(j));
    }
};
module.exports = {
    ChainOrigin: ChainOrigin,
    CtChainOrigin: CtChainOrigin,
    CtChainPoint: CtChainPoint,
    OgmiosBlockHeaderHash: OgmiosBlockHeaderHash,
    TxEvaluationResult: TxEvaluationResult,
    UtxoQR: UtxoQR,
    queryChainTipCall: queryChainTipCall,
    queryUtxosCall: queryUtxosCall,
    queryUtxosAtCall: queryUtxosAtCall,
    submitTxCall: submitTxCall,
    evaluateTxCall: evaluateTxCall,
    decodeAesonTxEvaluationRe: decodeAesonTxEvaluationRe,
    genericChainTipQR_: genericChainTipQR_,
    showChainTipQR: showChainTipQR,
    decodeAesonChainTipQR: decodeAesonChainTipQR,
    eqOgmiosBlockHeaderHash: eqOgmiosBlockHeaderHash,
    decodeAesonOgmiosBlockHea: decodeAesonOgmiosBlockHea,
    genericOgmiosBlockHeaderH: genericOgmiosBlockHeaderH,
    showOgmiosBlockHeaderHash: showOgmiosBlockHeaderHash,
    eqChainOrigin: eqChainOrigin,
    decodeAesonChainOrigin: decodeAesonChainOrigin,
    hasRuntimeTypeChainOrigin: hasRuntimeTypeChainOrigin,
    genericChainOrigin_: genericChainOrigin_,
    showChainOrigin: showChainOrigin,
    showUtxoQR: showUtxoQR,
    decodeAesonUtxoQR: decodeAesonUtxoQR
};
