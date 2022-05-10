// Generated by purs version 0.14.5
"use strict";
var $foreign = require("./foreign.js");
var Aeson = require("../Aeson/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Data_Argonaut_Decode_Error = require("../Data.Argonaut.Decode.Error/index.js");
var Data_Argonaut_Encode_Class = require("../Data.Argonaut.Encode.Class/index.js");
var Data_Either = require("../Data.Either/index.js");
var Record = require("../Record/index.js");
var JsonWspCall = function (x) {
    return x;
};
var parseFieldToUInt = function (o) {
    return function (str) {
        var err = Data_Argonaut_Decode_Error.TypeMismatch.create("expected field: '" + (str + "' as a UInt"));
        return Control_Bind.bindFlipped(Data_Either.bindEither)(Aeson.caseAesonUInt(new Data_Either.Left(err))(Data_Either.Right.create))(Aeson.getField(Aeson.decodeAesonAeson)(o)(str));
    };
};
var parseFieldToString = function (o) {
    return function (str) {
        return Control_Bind.bindFlipped(Data_Either.bindEither)(Aeson.caseAesonString(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("expected field: '" + (str + "' as a String"))))(Data_Either.Right.create))(Aeson.getField(Aeson.decodeAesonAeson)(o)(str));
    };
};
var parseMirror = Aeson.caseAesonObject(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("expected object")))(function (o) {
    return Control_Bind.bind(Data_Either.bindEither)(parseFieldToString(o)("step"))(function (step) {
        return Control_Bind.bind(Data_Either.bindEither)(parseFieldToString(o)("id"))(function (id) {
            return Control_Applicative.pure(Data_Either.applicativeEither)({
                step: step,
                id: id
            });
        });
    });
});
var parseFieldToBigInt = function (o) {
    return function (str) {
        var err = Data_Argonaut_Decode_Error.TypeMismatch.create("expected field: '" + (str + "' as a BigInt"));
        return Control_Bind.bindFlipped(Data_Either.bindEither)(Aeson.caseAesonBigInt(new Data_Either.Left(err))(Data_Either.Right.create))(Aeson.getField(Aeson.decodeAesonAeson)(o)(str));
    };
};
var mkJsonWspRequest = function (service) {
    return function (method) {
        return function __do() {
            var id = $foreign["_uniqueId"](method.methodname + "-")();
            return Record.merge()()({
                mirror: {
                    step: "INIT",
                    id: id
                }
            })(Record.merge()()(service)(method));
        };
    };
};
var mkCallType = function (dictEncodeJson) {
    return function (service) {
        return function (v) {
            return function (v1) {
                return JsonWspCall(function (i) {
                    return function __do() {
                        var req = mkJsonWspRequest(service)({
                            methodname: v.methodname,
                            args: v.args(i)
                        })();
                        return {
                            body: Data_Argonaut_Encode_Class.encodeJson(dictEncodeJson)(req),
                            id: req.mirror.id
                        };
                    };
                });
            };
        };
    };
};
var buildRequest = function (v) {
    return v;
};
var aesonObject = Aeson.caseAesonObject(new Data_Either.Left(new Data_Argonaut_Decode_Error.TypeMismatch("expected object")));
var parseJsonWspResponse = function (dictDecodeAeson) {
    return aesonObject(function (o) {
        return Control_Bind.bind(Data_Either.bindEither)(parseFieldToString(o)("type"))(function (typeField) {
            return Control_Bind.bind(Data_Either.bindEither)(parseFieldToString(o)("version"))(function (version) {
                return Control_Bind.bind(Data_Either.bindEither)(parseFieldToString(o)("servicename"))(function (servicename) {
                    return Control_Bind.bind(Data_Either.bindEither)(parseFieldToString(o)("methodname"))(function (methodname) {
                        return Control_Bind.bind(Data_Either.bindEither)(Control_Bind.bindFlipped(Data_Either.bindEither)(Aeson.decodeAeson(dictDecodeAeson))(Aeson.getField(Aeson.decodeAesonAeson)(o)("result")))(function (result) {
                            return Control_Bind.bind(Data_Either.bindEither)(Control_Bind.bindFlipped(Data_Either.bindEither)(parseMirror)(Aeson.getField(Aeson.decodeAesonAeson)(o)("reflection")))(function (reflection) {
                                return Control_Applicative.pure(Data_Either.applicativeEither)({
                                    type: typeField,
                                    version: version,
                                    servicename: servicename,
                                    methodname: methodname,
                                    result: result,
                                    reflection: reflection
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};
module.exports = {
    mkCallType: mkCallType,
    buildRequest: buildRequest,
    parseJsonWspResponse: parseJsonWspResponse,
    parseFieldToString: parseFieldToString,
    parseFieldToUInt: parseFieldToUInt,
    parseFieldToBigInt: parseFieldToBigInt
};
