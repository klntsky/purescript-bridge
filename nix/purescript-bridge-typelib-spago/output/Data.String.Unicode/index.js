// Generated by purs version 0.14.5
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Data_CodePoint_Unicode = require("../Data.CodePoint.Unicode/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_String_CodePoints = require("../Data.String.CodePoints/index.js");
var convertFull = function (f) {
    var $0 = Control_Bind.bindFlipped(Control_Bind.bindArray)(f);
    return function ($1) {
        return Data_String_CodePoints.fromCodePointArray($0(Data_String_CodePoints.toCodePointArray($1)));
    };
};
var toLower = convertFull(Data_CodePoint_Unicode.toLower);
var toUpper = convertFull(Data_CodePoint_Unicode.toUpper);
var convert = function (f) {
    var $2 = Data_Functor.map(Data_Functor.functorArray)(f);
    return function ($3) {
        return Data_String_CodePoints.fromCodePointArray($2(Data_String_CodePoints.toCodePointArray($3)));
    };
};
var toLowerSimple = convert(Data_CodePoint_Unicode.toLowerSimple);
var toUpperSimple = convert(Data_CodePoint_Unicode.toUpperSimple);
var caseFoldSimple = convert(Data_CodePoint_Unicode.caseFoldSimple);
var caseFold = convertFull(Data_CodePoint_Unicode.caseFold);
var caselessMatch = function (s1) {
    return function (s2) {
        return caseFold(s1) === caseFold(s2);
    };
};
module.exports = {
    toUpper: toUpper,
    toLower: toLower,
    caseFold: caseFold,
    caselessMatch: caselessMatch,
    toUpperSimple: toUpperSimple,
    toLowerSimple: toLowerSimple,
    caseFoldSimple: caseFoldSimple
};
