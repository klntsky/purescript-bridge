// Generated by purs version 0.14.5
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Show = require("../Data.Show/index.js");
var Disj = function (x) {
    return x;
};
var showDisj = function (dictShow) {
    return {
        show: function (v) {
            return "(Disj " + (Data_Show.show(dictShow)(v) + ")");
        }
    };
};
var semiringDisj = function (dictHeytingAlgebra) {
    return {
        zero: Data_HeytingAlgebra.ff(dictHeytingAlgebra),
        one: Data_HeytingAlgebra.tt(dictHeytingAlgebra),
        add: function (v) {
            return function (v1) {
                return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
            };
        },
        mul: function (v) {
            return function (v1) {
                return Data_HeytingAlgebra.conj(dictHeytingAlgebra)(v)(v1);
            };
        }
    };
};
var semigroupDisj = function (dictHeytingAlgebra) {
    return {
        append: function (v) {
            return function (v1) {
                return Data_HeytingAlgebra.disj(dictHeytingAlgebra)(v)(v1);
            };
        }
    };
};
var ordDisj = function (dictOrd) {
    return dictOrd;
};
var monoidDisj = function (dictHeytingAlgebra) {
    return {
        mempty: Data_HeytingAlgebra.ff(dictHeytingAlgebra),
        Semigroup0: function () {
            return semigroupDisj(dictHeytingAlgebra);
        }
    };
};
var functorDisj = {
    map: function (f) {
        return function (m) {
            return f(m);
        };
    }
};
var eqDisj = function (dictEq) {
    return dictEq;
};
var eq1Disj = {
    eq1: function (dictEq) {
        return Data_Eq.eq(eqDisj(dictEq));
    }
};
var ord1Disj = {
    compare1: function (dictOrd) {
        return Data_Ord.compare(ordDisj(dictOrd));
    },
    Eq10: function () {
        return eq1Disj;
    }
};
var boundedDisj = function (dictBounded) {
    return dictBounded;
};
var applyDisj = {
    apply: function (v) {
        return function (v1) {
            return v(v1);
        };
    },
    Functor0: function () {
        return functorDisj;
    }
};
var bindDisj = {
    bind: function (v) {
        return function (f) {
            return f(v);
        };
    },
    Apply0: function () {
        return applyDisj;
    }
};
var applicativeDisj = {
    pure: Disj,
    Apply0: function () {
        return applyDisj;
    }
};
var monadDisj = {
    Applicative0: function () {
        return applicativeDisj;
    },
    Bind1: function () {
        return bindDisj;
    }
};
module.exports = {
    Disj: Disj,
    eqDisj: eqDisj,
    eq1Disj: eq1Disj,
    ordDisj: ordDisj,
    ord1Disj: ord1Disj,
    boundedDisj: boundedDisj,
    showDisj: showDisj,
    functorDisj: functorDisj,
    applyDisj: applyDisj,
    applicativeDisj: applicativeDisj,
    bindDisj: bindDisj,
    monadDisj: monadDisj,
    semigroupDisj: semigroupDisj,
    monoidDisj: monoidDisj,
    semiringDisj: semiringDisj
};
