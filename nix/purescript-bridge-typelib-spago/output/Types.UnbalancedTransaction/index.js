// Generated by purs version 0.14.5
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Data_Argonaut_Core = require("../Data.Argonaut.Core/index.js");
var Data_Argonaut_Decode_Class = require("../Data.Argonaut.Decode.Class/index.js");
var Data_Argonaut_Decode_Combinators = require("../Data.Argonaut.Decode.Combinators/index.js");
var Data_Argonaut_Decode_Error = require("../Data.Argonaut.Decode.Error/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Lens_Lens = require("../Data.Lens.Lens/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Show_Generic = require("../Data.Show.Generic/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Serialization = require("../Serialization/index.js");
var Serialization_Address = require("../Serialization.Address/index.js");
var Serialization_Hash = require("../Serialization.Hash/index.js");
var Types_Scripts = require("../Types.Scripts/index.js");
var Types_Transaction = require("../Types.Transaction/index.js");
var Types_Value = require("../Types.Value/index.js");
var StakePubKeyHash = function (x) {
    return x;
};
var ScriptOutput = function (x) {
    return x;
};
var UnbalancedTx = function (x) {
    return x;
};
var PubKeyHash = function (x) {
    return x;
};
var PaymentPubKeyHash = function (x) {
    return x;
};
var PaymentPubKey = function (x) {
    return x;
};
var toDataStakePubKeyHash = Serialization_Hash.toDataEd25519KeyHash;
var toDataPubKeyHash = Serialization_Hash.toDataEd25519KeyHash;
var toDataPaymentPubKeyHash = toDataPubKeyHash;
var ordStakePubKeyHash = Serialization_Hash.ordEd25519KeyHash;
var ordPubKeyHash = Serialization_Hash.ordEd25519KeyHash;
var ordPaymentPubKeyHash = ordPubKeyHash;
var ordPaymentPubKey = Types_Transaction.ordPublicKey;
var newtypeUnbalancedTx_ = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeStakePubKeyHash_ = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypeScriptOutput_ = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypePubKeyHash_ = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypePaymentPubKey_ = {
    Coercible0: function () {
        return undefined;
    }
};
var newtypePaymentPubKeyHash_ = {
    Coercible0: function () {
        return undefined;
    }
};
var genericUnbalancedTx_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var genericStakePubKeyHash_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showStakePubKeyHash = {
    show: Data_Show_Generic.genericShow(genericStakePubKeyHash_)(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(Serialization_Hash.showEd25519KeyHash))({
        reflectSymbol: function () {
            return "StakePubKeyHash";
        }
    }))
};
var genericScriptOutput_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showScriptOutput = {
    show: Data_Show_Generic.genericShow(genericScriptOutput_)(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(Data_Show.showRecord()(Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "datumHash";
        }
    })(Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "validatorHash";
        }
    })(Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "value";
        }
    })(Data_Show.showRecordFieldsNil)(Types_Value.showValue))(Types_Scripts.showValidatorHash))(Types_Transaction.showDataHash))))({
        reflectSymbol: function () {
            return "ScriptOutput";
        }
    }))
};
var showUnbalancedTx = {
    show: Data_Show_Generic.genericShow(genericUnbalancedTx_)(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(Data_Show.showRecord()(Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "transaction";
        }
    })(Data_Show.showRecordFieldsCons({
        reflectSymbol: function () {
            return "utxoIndex";
        }
    })(Data_Show.showRecordFieldsNil)(Data_Map_Internal.showMap(Types_Transaction.showTransactionInput)(showScriptOutput)))(Types_Transaction.showTransaction))))({
        reflectSymbol: function () {
            return "UnbalancedTx";
        }
    }))
};
var genericPubKeyHash_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showPubKeyHash = {
    show: Data_Show_Generic.genericShow(genericPubKeyHash_)(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(Serialization_Hash.showEd25519KeyHash))({
        reflectSymbol: function () {
            return "PubKeyHash";
        }
    }))
};
var genericPaymentPubKey_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showPaymentPubKey = {
    show: Data_Show_Generic.genericShow(genericPaymentPubKey_)(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(Types_Transaction.showPublicKey))({
        reflectSymbol: function () {
            return "PaymentPubKey";
        }
    }))
};
var genericPaymentPubKeyHash_ = {
    to: function (x) {
        return x;
    },
    from: function (x) {
        return x;
    }
};
var showPaymentPubKeyHash = {
    show: Data_Show_Generic.genericShow(genericPaymentPubKeyHash_)(Data_Show_Generic.genericShowConstructor(Data_Show_Generic.genericShowArgsArgument(showPubKeyHash))({
        reflectSymbol: function () {
            return "PaymentPubKeyHash";
        }
    }))
};
var fromDataStakePubKeyHash = Serialization_Hash.fromDataEd25519KeyHash;
var fromDataPubKeyHash = Serialization_Hash.fromDataEd25519KeyHash;
var fromDataPaymentPubKeyHash = fromDataPubKeyHash;
var eqStakePubKeyHash = Serialization_Hash.eqEd25519KeyHash;
var eqScriptOutput = Data_Eq.eqRec()(Data_Eq.eqRowCons(Data_Eq.eqRowCons(Data_Eq.eqRowCons(Data_Eq.eqRowNil)()({
    reflectSymbol: function () {
        return "value";
    }
})(Types_Value.eqValue))()({
    reflectSymbol: function () {
        return "validatorHash";
    }
})(Types_Scripts.eqValidatorHash))()({
    reflectSymbol: function () {
        return "datumHash";
    }
})(Types_Transaction.eqDataHash));
var eqUnbalancedTx = Data_Eq.eqRec()(Data_Eq.eqRowCons(Data_Eq.eqRowCons(Data_Eq.eqRowNil)()({
    reflectSymbol: function () {
        return "utxoIndex";
    }
})(Data_Map_Internal.eqMap(Types_Transaction.eqTransactionInput)(eqScriptOutput)))()({
    reflectSymbol: function () {
        return "transaction";
    }
})(Types_Transaction.eqTransaction));
var eqPubKeyHash = Serialization_Hash.eqEd25519KeyHash;
var eqPaymentPubKeyHash = eqPubKeyHash;
var eqPaymentPubKey = Types_Transaction.eqPublicKey;
var decodeJsonPubKeyHash = {
    decodeJson: Data_Argonaut_Core.caseJsonObject(Data_Either.Left.create(new Data_Argonaut_Decode_Error.TypeMismatch("Expected object")))(Control_Bind.composeKleisli(Data_Either.bindEither)(Data_Function.flip(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonJson))("getPubKeyHash"))((function () {
        var $86 = Data_Functor.map(Data_Either.functorEither)(PubKeyHash);
        var $87 = Data_Argonaut_Decode_Class.decodeJson(Serialization_Hash.decodeJsonEd25519KeyHash);
        return function ($88) {
            return $86($87($88));
        };
    })()))
};
var decodeJsonPaymentPubKeyHa = {
    decodeJson: Data_Argonaut_Core.caseJsonObject(Data_Either.Left.create(new Data_Argonaut_Decode_Error.TypeMismatch("Expected object")))(Control_Bind.composeKleisli(Data_Either.bindEither)(Data_Function.flip(Data_Argonaut_Decode_Combinators.getField(Data_Argonaut_Decode_Class.decodeJsonJson))("unPaymentPubKeyHash"))((function () {
        var $89 = Data_Functor.map(Data_Either.functorEither)(PaymentPubKeyHash);
        var $90 = Data_Argonaut_Decode_Class.decodeJson(decodeJsonPubKeyHash);
        return function ($91) {
            return $89($90($91));
        };
    })()))
};
var pubKeyHashBaseAddress = function (networkId) {
    return function (pkh) {
        return function (skh) {
            return Serialization_Address.baseAddressToAddress(Serialization_Address.pubKeyAddress(networkId)(Data_Newtype.unwrap()(pkh))(Data_Newtype.unwrap()(skh)));
        };
    };
};
var payPubKeyVkey = function (v) {
    return v;
};
var payPubKeyRequiredSigner = function (v) {
    return Data_Functor.map(Data_Maybe.functorMaybe)(function ($92) {
        return Types_Transaction.RequiredSigner(Serialization.publicKeyHash($92));
    })(Serialization.publicKeyFromBech32(v));
};
var payPubKeyHashBaseAddress = function (networkId) {
    return function (v) {
        return function (skh) {
            return pubKeyHashBaseAddress(networkId)(v)(skh);
        };
    };
};
var emptyUnbalancedTx = {
    transaction: Data_Monoid.mempty(Types_Transaction.monoidTransaction),
    utxoIndex: Data_Map_Internal.empty
};
var ed25519RewardAddress = function (dictNewtype) {
    return function (network) {
        return function (skh) {
            return Serialization_Address.rewardAddress({
                network: network,
                paymentCred: Serialization_Address.keyHashCredential(Data_Newtype.unwrap()(skh))
            });
        };
    };
};
var pubKeyHashRewardAddress = function (networkId) {
    var $93 = ed25519RewardAddress()(networkId);
    return function ($94) {
        return Serialization_Address.rewardAddressToAddress($93($94));
    };
};
var payPubKeyHashRewardAddress = function (networkId) {
    return function (v) {
        return pubKeyHashRewardAddress(networkId)(v);
    };
};
var stakePubKeyHashRewardAddress = function (networkId) {
    var $95 = ed25519RewardAddress()(networkId);
    return function ($96) {
        return Serialization_Address.rewardAddressToAddress($95($96));
    };
};
var ed25519EnterpriseAddress = function (dictNewtype) {
    return function (network) {
        return function (pkh) {
            return Serialization_Address.enterpriseAddress({
                network: network,
                paymentCred: Serialization_Address.keyHashCredential(Data_Newtype.unwrap()(pkh))
            });
        };
    };
};
var pubKeyHashEnterpriseAddress = function (networkId) {
    var $97 = ed25519EnterpriseAddress()(networkId);
    return function ($98) {
        return Serialization_Address.enterpriseAddressToAddress($97($98));
    };
};
var payPubKeyHashEnterpriseAddress = function (networkId) {
    return function (v) {
        return pubKeyHashEnterpriseAddress(networkId)(v);
    };
};
var _utxoIndex = function (dictStrong) {
    return Data_Lens_Lens["lens'"](function (v) {
        return new Data_Tuple.Tuple(v.utxoIndex, function (utxoIx) {
            return {
                transaction: v.transaction,
                utxoIndex: utxoIx
            };
        });
    })(dictStrong);
};
var _transaction = function (dictStrong) {
    return Data_Lens_Lens["lens'"](function (v) {
        return new Data_Tuple.Tuple(v.transaction, function (tx) {
            return {
                transaction: tx,
                utxoIndex: v.utxoIndex
            };
        });
    })(dictStrong);
};
module.exports = {
    PaymentPubKey: PaymentPubKey,
    PaymentPubKeyHash: PaymentPubKeyHash,
    PubKeyHash: PubKeyHash,
    ScriptOutput: ScriptOutput,
    StakePubKeyHash: StakePubKeyHash,
    UnbalancedTx: UnbalancedTx,
    "_transaction": _transaction,
    "_utxoIndex": _utxoIndex,
    emptyUnbalancedTx: emptyUnbalancedTx,
    payPubKeyHashBaseAddress: payPubKeyHashBaseAddress,
    payPubKeyHashRewardAddress: payPubKeyHashRewardAddress,
    payPubKeyHashEnterpriseAddress: payPubKeyHashEnterpriseAddress,
    payPubKeyRequiredSigner: payPubKeyRequiredSigner,
    payPubKeyVkey: payPubKeyVkey,
    pubKeyHashBaseAddress: pubKeyHashBaseAddress,
    pubKeyHashEnterpriseAddress: pubKeyHashEnterpriseAddress,
    pubKeyHashRewardAddress: pubKeyHashRewardAddress,
    stakePubKeyHashRewardAddress: stakePubKeyHashRewardAddress,
    genericPaymentPubKey_: genericPaymentPubKey_,
    newtypePaymentPubKey_: newtypePaymentPubKey_,
    eqPaymentPubKey: eqPaymentPubKey,
    ordPaymentPubKey: ordPaymentPubKey,
    showPaymentPubKey: showPaymentPubKey,
    newtypeScriptOutput_: newtypeScriptOutput_,
    genericScriptOutput_: genericScriptOutput_,
    eqScriptOutput: eqScriptOutput,
    showScriptOutput: showScriptOutput,
    genericPubKeyHash_: genericPubKeyHash_,
    newtypePubKeyHash_: newtypePubKeyHash_,
    eqPubKeyHash: eqPubKeyHash,
    fromDataPubKeyHash: fromDataPubKeyHash,
    ordPubKeyHash: ordPubKeyHash,
    toDataPubKeyHash: toDataPubKeyHash,
    showPubKeyHash: showPubKeyHash,
    decodeJsonPubKeyHash: decodeJsonPubKeyHash,
    genericPaymentPubKeyHash_: genericPaymentPubKeyHash_,
    newtypePaymentPubKeyHash_: newtypePaymentPubKeyHash_,
    eqPaymentPubKeyHash: eqPaymentPubKeyHash,
    fromDataPaymentPubKeyHash: fromDataPaymentPubKeyHash,
    ordPaymentPubKeyHash: ordPaymentPubKeyHash,
    toDataPaymentPubKeyHash: toDataPaymentPubKeyHash,
    showPaymentPubKeyHash: showPaymentPubKeyHash,
    decodeJsonPaymentPubKeyHa: decodeJsonPaymentPubKeyHa,
    genericStakePubKeyHash_: genericStakePubKeyHash_,
    newtypeStakePubKeyHash_: newtypeStakePubKeyHash_,
    eqStakePubKeyHash: eqStakePubKeyHash,
    fromDataStakePubKeyHash: fromDataStakePubKeyHash,
    ordStakePubKeyHash: ordStakePubKeyHash,
    toDataStakePubKeyHash: toDataStakePubKeyHash,
    showStakePubKeyHash: showStakePubKeyHash,
    newtypeUnbalancedTx_: newtypeUnbalancedTx_,
    genericUnbalancedTx_: genericUnbalancedTx_,
    eqUnbalancedTx: eqUnbalancedTx,
    showUnbalancedTx: showUnbalancedTx
};
