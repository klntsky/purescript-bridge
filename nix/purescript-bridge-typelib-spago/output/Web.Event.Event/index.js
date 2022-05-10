// Generated by purs version 0.14.5
"use strict";
var $foreign = require("./foreign.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Web_Event_EventPhase = require("../Web.Event.EventPhase/index.js");
var Web_Event_Internal_Types = require("../Web.Event.Internal.Types/index.js");
var EventType = function (x) {
    return x;
};
var target = function ($1) {
    return Data_Nullable.toMaybe($foreign["_target"]($1));
};
var ordEventType = Data_Ord.ordString;
var newtypeEventType = {
    Coercible0: function () {
        return undefined;
    }
};
var eventPhase = function (dictPartial) {
    var $2 = Data_Maybe.fromJust();
    var $3 = Data_Enum.toEnum(Web_Event_EventPhase.boundedEnumEventPhase);
    return function ($4) {
        return $2($3($foreign.eventPhaseIndex($4)));
    };
};
var eqEventType = Data_Eq.eqString;
var currentTarget = function ($5) {
    return Data_Nullable.toMaybe($foreign["_currentTarget"]($5));
};
module.exports = {
    EventType: EventType,
    target: target,
    currentTarget: currentTarget,
    eventPhase: eventPhase,
    newtypeEventType: newtypeEventType,
    eqEventType: eqEventType,
    ordEventType: ordEventType,
    type_: $foreign.type_,
    stopPropagation: $foreign.stopPropagation,
    stopImmediatePropagation: $foreign.stopImmediatePropagation,
    bubbles: $foreign.bubbles,
    cancelable: $foreign.cancelable,
    preventDefault: $foreign.preventDefault,
    defaultPrevented: $foreign.defaultPrevented,
    timeStamp: $foreign.timeStamp
};
