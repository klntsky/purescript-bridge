// Generated by purs version 0.14.5
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Additive = function (x) {
    return x;
};
var showAdditive = function (dictShow) {
    return {
        show: function (v) {
            return "(Additive " + (Data_Show.show(dictShow)(v) + ")");
        }
    };
};
var semigroupAdditive = function (dictSemiring) {
    return {
        append: function (v) {
            return function (v1) {
                return Data_Semiring.add(dictSemiring)(v)(v1);
            };
        }
    };
};
var ordAdditive = function (dictOrd) {
    return dictOrd;
};
var monoidAdditive = function (dictSemiring) {
    return {
        mempty: Data_Semiring.zero(dictSemiring),
        Semigroup0: function () {
            return semigroupAdditive(dictSemiring);
        }
    };
};
var functorAdditive = {
    map: function (f) {
        return function (m) {
            return f(m);
        };
    }
};
var eqAdditive = function (dictEq) {
    return dictEq;
};
var eq1Additive = {
    eq1: function (dictEq) {
        return Data_Eq.eq(eqAdditive(dictEq));
    }
};
var ord1Additive = {
    compare1: function (dictOrd) {
        return Data_Ord.compare(ordAdditive(dictOrd));
    },
    Eq10: function () {
        return eq1Additive;
    }
};
var boundedAdditive = function (dictBounded) {
    return dictBounded;
};
var applyAdditive = {
    apply: function (v) {
        return function (v1) {
            return v(v1);
        };
    },
    Functor0: function () {
        return functorAdditive;
    }
};
var bindAdditive = {
    bind: function (v) {
        return function (f) {
            return f(v);
        };
    },
    Apply0: function () {
        return applyAdditive;
    }
};
var applicativeAdditive = {
    pure: Additive,
    Apply0: function () {
        return applyAdditive;
    }
};
var monadAdditive = {
    Applicative0: function () {
        return applicativeAdditive;
    },
    Bind1: function () {
        return bindAdditive;
    }
};
module.exports = {
    Additive: Additive,
    eqAdditive: eqAdditive,
    eq1Additive: eq1Additive,
    ordAdditive: ordAdditive,
    ord1Additive: ord1Additive,
    boundedAdditive: boundedAdditive,
    showAdditive: showAdditive,
    functorAdditive: functorAdditive,
    applyAdditive: applyAdditive,
    applicativeAdditive: applicativeAdditive,
    bindAdditive: bindAdditive,
    monadAdditive: monadAdditive,
    semigroupAdditive: semigroupAdditive,
    monoidAdditive: monoidAdditive
};
