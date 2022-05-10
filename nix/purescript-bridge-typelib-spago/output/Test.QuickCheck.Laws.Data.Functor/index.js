// Generated by purs version 0.14.5
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Effect_Console = require("../Effect.Console/index.js");
var Test_QuickCheck = require("../Test.QuickCheck/index.js");
var Test_QuickCheck_Arbitrary = require("../Test.QuickCheck.Arbitrary/index.js");
var Test_QuickCheck_Laws = require("../Test.QuickCheck.Laws/index.js");
var checkFunctor = function (dictFunctor) {
    return function (dictArbitrary) {
        return function (dictEq) {
            return function (v) {
                var identity = function (f) {
                    return Data_Eq.eq(dictEq)(Data_Functor.map(dictFunctor)(Control_Category.identity(Control_Category.categoryFn))(f))(Control_Category.identity(Control_Category.categoryFn)(f));
                };
                var composition = function (f) {
                    return function (g) {
                        return function (x) {
                            return Data_Eq.eq(dictEq)(Data_Functor.map(dictFunctor)(function ($6) {
                                return f(g($6));
                            })(x))((function (v1) {
                                return Data_Functor.map(dictFunctor)(f)(v1);
                            })((function (v1) {
                                return Data_Functor.map(dictFunctor)(g)(v1);
                            })(x)));
                        };
                    };
                };
                return function __do() {
                    Effect_Console.log("Checking 'Identity' law for Functor")();
                    Test_QuickCheck["quickCheck'"](Test_QuickCheck.testableFunction(dictArbitrary)(Test_QuickCheck.testableBoolean))(1000)(identity)();
                    Effect_Console.log("Checking 'Composition' law for Functor")();
                    return Test_QuickCheck["quickCheck'"](Test_QuickCheck.testableFunction(Test_QuickCheck_Arbitrary.arbFunction(Test_QuickCheck_Laws.coarbitraryB)(Test_QuickCheck_Laws.arbitraryA))(Test_QuickCheck.testableFunction(Test_QuickCheck_Arbitrary.arbFunction(Test_QuickCheck_Laws.coarbitraryA)(Test_QuickCheck_Laws.arbitraryB))(Test_QuickCheck.testableFunction(dictArbitrary)(Test_QuickCheck.testableBoolean))))(1000)(composition)();
                };
            };
        };
    };
};
module.exports = {
    checkFunctor: checkFunctor
};
