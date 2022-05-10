// Generated by purs version 0.14.5
"use strict";
var $foreign = require("./foreign.js");
var Partial = require("../Partial/index.js");
var unsafePartial = $foreign["_unsafePartial"];
var unsafeCrashWith = function (msg) {
    return unsafePartial(function (dictPartial) {
        return Partial.crashWith()(msg);
    });
};
module.exports = {
    unsafePartial: unsafePartial,
    unsafeCrashWith: unsafeCrashWith
};
