// Generated by purs version 0.14.5
"use strict";
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var _Right = function (dictChoice) {
    return Data_Profunctor_Choice.right(dictChoice);
};
var _Left = function (dictChoice) {
    return Data_Profunctor_Choice.left(dictChoice);
};
module.exports = {
    "_Left": _Left,
    "_Right": _Right,
    left: Data_Profunctor_Choice.left,
    right: Data_Profunctor_Choice.right
};
