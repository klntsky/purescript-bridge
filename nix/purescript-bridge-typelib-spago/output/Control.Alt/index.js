// Generated by purs version 0.14.5
"use strict";
var Data_Functor = require("../Data.Functor/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var altArray = {
    alt: Data_Semigroup.append(Data_Semigroup.semigroupArray),
    Functor0: function () {
        return Data_Functor.functorArray;
    }
};
var alt = function (dict) {
    return dict.alt;
};
module.exports = {
    alt: alt,
    altArray: altArray,
    map: Data_Functor.map,
    "void": Data_Functor["void"]
};
