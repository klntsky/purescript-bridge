// Generated by purs version 0.14.5
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Effect_Console = require("../Effect.Console/index.js");
var Test_QuickCheck = require("../Test.QuickCheck/index.js");
var checkSemigroup = function (dictSemigroup) {
    return function (dictArbitrary) {
        return function (dictEq) {
            return function (v) {
                var associativity = function (x) {
                    return function (y) {
                        return function (z) {
                            return Data_Eq.eq(dictEq)(Data_Semigroup.append(dictSemigroup)(Data_Semigroup.append(dictSemigroup)(x)(y))(z))(Data_Semigroup.append(dictSemigroup)(x)(Data_Semigroup.append(dictSemigroup)(y)(z)));
                        };
                    };
                };
                return function __do() {
                    Effect_Console.log("Checking 'Associativity' law for Semigroup")();
                    return Test_QuickCheck["quickCheck'"](Test_QuickCheck.testableFunction(dictArbitrary)(Test_QuickCheck.testableFunction(dictArbitrary)(Test_QuickCheck.testableFunction(dictArbitrary)(Test_QuickCheck.testableBoolean))))(1000)(associativity)();
                };
            };
        };
    };
};
module.exports = {
    checkSemigroup: checkSemigroup
};
