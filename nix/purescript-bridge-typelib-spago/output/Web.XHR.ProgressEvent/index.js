// Generated by purs version 0.14.5
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toEvent = Unsafe_Coerce.unsafeCoerce;
var fromEvent = Web_Internal_FFI.unsafeReadProtoTagged("ProgressEvent");
module.exports = {
    fromEvent: fromEvent,
    toEvent: toEvent,
    lengthComputable: $foreign.lengthComputable,
    loaded: $foreign.loaded,
    total: $foreign.total
};
