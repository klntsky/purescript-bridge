// Generated by purs version 0.14.5
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_List = require("../Data.List/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var CatQueue = (function () {
    function CatQueue(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    CatQueue.create = function (value0) {
        return function (value1) {
            return new CatQueue(value0, value1);
        };
    };
    return CatQueue;
})();
var unsnoc = function ($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
        if (v.value1 instanceof Data_List_Types.Cons) {
            $tco_done = true;
            return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value1.value0, new CatQueue(v.value0, v.value1.value1)));
        };
        if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
            $tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        if (v.value1 instanceof Data_List_Types.Nil) {
            $copy_v = new CatQueue(Data_List_Types.Nil.value, Data_List.reverse(v.value0));
            return;
        };
        throw new Error("Failed pattern match at Data.CatQueue (line 93, column 1 - line 93, column 63): " + [ v.constructor.name ]);
    };
    while (!$tco_done) {
        $tco_result = $tco_loop($copy_v);
    };
    return $tco_result;
};
var uncons = function ($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
        if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
            $tco_done = true;
            return Data_Maybe.Nothing.value;
        };
        if (v.value0 instanceof Data_List_Types.Nil) {
            $copy_v = new CatQueue(Data_List.reverse(v.value1), Data_List_Types.Nil.value);
            return;
        };
        if (v.value0 instanceof Data_List_Types.Cons) {
            $tco_done = true;
            return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0.value0, new CatQueue(v.value0.value1, v.value1)));
        };
        throw new Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [ v.constructor.name ]);
    };
    while (!$tco_done) {
        $tco_result = $tco_loop($copy_v);
    };
    return $tco_result;
};
var snoc = function (v) {
    return function (a) {
        return new CatQueue(v.value0, new Data_List_Types.Cons(a, v.value1));
    };
};
var showCatQueue = function (dictShow) {
    return {
        show: function (v) {
            return "(CatQueue " + (Data_Show.show(Data_List_Types.showList(dictShow))(v.value0) + (" " + (Data_Show.show(Data_List_Types.showList(dictShow))(v.value1) + ")")));
        }
    };
};
var $$null = function (v) {
    if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
        return true;
    };
    return false;
};
var length = function (v) {
    return Data_List.length(v.value0) + Data_List.length(v.value1) | 0;
};
var functorCatQueue = {
    map: function (f) {
        return function (v) {
            return new CatQueue(Data_Functor.map(Data_List_Types.functorList)(f)(v.value0), Data_Functor.map(Data_List_Types.functorList)(f)(v.value1));
        };
    }
};
var foldableCatQueue = {
    foldMap: function (dictMonoid) {
        return Data_Foldable.foldMapDefaultL(foldableCatQueue)(dictMonoid);
    },
    foldr: function (f) {
        return Data_Foldable.foldrDefault(foldableCatQueue)(f);
    },
    foldl: function (f) {
        var go = function ($copy_acc) {
            return function ($copy_q) {
                var $tco_var_acc = $copy_acc;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(acc, q) {
                    var v = uncons(q);
                    if (v instanceof Data_Maybe.Just) {
                        $tco_var_acc = f(acc)(v.value0.value0);
                        $copy_q = v.value0.value1;
                        return;
                    };
                    if (v instanceof Data_Maybe.Nothing) {
                        $tco_done = true;
                        return acc;
                    };
                    throw new Error("Failed pattern match at Data.CatQueue (line 148, column 16 - line 150, column 22): " + [ v.constructor.name ]);
                };
                while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_acc, $copy_q);
                };
                return $tco_result;
            };
        };
        return go;
    }
};
var semigroupCatQueue = {
    append: Data_Foldable.foldl(foldableCatQueue)(snoc)
};
var empty = new CatQueue(Data_List_Types.Nil.value, Data_List_Types.Nil.value);
var monoidCatQueue = {
    mempty: empty,
    Semigroup0: function () {
        return semigroupCatQueue;
    }
};
var singleton = snoc(empty);
var fromFoldable = function (dictFoldable) {
    return function (f) {
        return Data_Foldable.foldMap(dictFoldable)(monoidCatQueue)(singleton)(f);
    };
};
var traversableCatQueue = {
    traverse: function (dictApplicative) {
        return function (f) {
            var $100 = Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Foldable.foldl(foldableCatQueue)(snoc)(empty));
            var $101 = Data_Foldable.foldl(foldableCatQueue)(function (acc) {
                var $103 = Control_Apply.lift2(dictApplicative.Apply0())(snoc)(acc);
                return function ($104) {
                    return $103(f($104));
                };
            })(Control_Applicative.pure(dictApplicative)(empty));
            return function ($102) {
                return $100($101($102));
            };
        };
    },
    sequence: function (dictApplicative) {
        return Data_Traversable.sequenceDefault(traversableCatQueue)(dictApplicative);
    },
    Functor0: function () {
        return functorCatQueue;
    },
    Foldable1: function () {
        return foldableCatQueue;
    }
};
var unfoldable1CatQueue = {
    unfoldr1: function (f) {
        return function (b) {
            var go = function ($copy_source) {
                return function ($copy_memo) {
                    var $tco_var_source = $copy_source;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(source, memo) {
                        var v = f(source);
                        if (v.value1 instanceof Data_Maybe.Nothing) {
                            $tco_done = true;
                            return snoc(memo)(v.value0);
                        };
                        if (v.value1 instanceof Data_Maybe.Just) {
                            $tco_var_source = v.value1.value0;
                            $copy_memo = snoc(memo)(v.value0);
                            return;
                        };
                        throw new Error("Failed pattern match at Data.CatQueue (line 155, column 24 - line 157, column 57): " + [ v.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_source, $copy_memo);
                    };
                    return $tco_result;
                };
            };
            return go(b)(empty);
        };
    }
};
var unfoldableCatQueue = {
    unfoldr: function (f) {
        return function (b) {
            var go = function ($copy_source) {
                return function ($copy_memo) {
                    var $tco_var_source = $copy_source;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(source, memo) {
                        var v = f(source);
                        if (v instanceof Data_Maybe.Nothing) {
                            $tco_done = true;
                            return memo;
                        };
                        if (v instanceof Data_Maybe.Just) {
                            $tco_var_source = v.value0.value1;
                            $copy_memo = snoc(memo)(v.value0.value0);
                            return;
                        };
                        throw new Error("Failed pattern match at Data.CatQueue (line 162, column 24 - line 164, column 57): " + [ v.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_source, $copy_memo);
                    };
                    return $tco_result;
                };
            };
            return go(b)(empty);
        };
    },
    Unfoldable10: function () {
        return unfoldable1CatQueue;
    }
};
var cqEq = function (dictEq) {
    var elemEq = Data_Eq.eq(dictEq);
    var go = function ($copy_xs) {
        return function ($copy_ys) {
            var $tco_var_xs = $copy_xs;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(xs, ys) {
                var v = uncons(ys);
                var v1 = uncons(xs);
                if (v1 instanceof Data_Maybe.Just && (v instanceof Data_Maybe.Just && elemEq(v1.value0.value0)(v.value0.value0))) {
                    $tco_var_xs = v1.value0.value1;
                    $copy_ys = v.value0.value1;
                    return;
                };
                if (v1 instanceof Data_Maybe.Nothing && v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return true;
                };
                $tco_done = true;
                return false;
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_xs, $copy_ys);
            };
            return $tco_result;
        };
    };
    return go;
};
var eqCatQueue = function (dictEq) {
    return {
        eq: cqEq(dictEq)
    };
};
var cqCompare = function (dictOrd) {
    var elemCompare = Data_Ord.compare(dictOrd);
    var go = function ($copy_xs) {
        return function ($copy_ys) {
            var $tco_var_xs = $copy_xs;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(xs, ys) {
                var v = uncons(ys);
                var v1 = uncons(xs);
                if (v1 instanceof Data_Maybe.Just && v instanceof Data_Maybe.Just) {
                    var v2 = elemCompare(v1.value0.value0)(v.value0.value0);
                    if (v2 instanceof Data_Ordering.EQ) {
                        $tco_var_xs = v1.value0.value1;
                        $copy_ys = v.value0.value1;
                        return;
                    };
                    $tco_done = true;
                    return v2;
                };
                if (v1 instanceof Data_Maybe.Just && v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return Data_Ordering.GT.value;
                };
                if (v1 instanceof Data_Maybe.Nothing && v instanceof Data_Maybe.Just) {
                    $tco_done = true;
                    return Data_Ordering.LT.value;
                };
                if (v1 instanceof Data_Maybe.Nothing && v instanceof Data_Maybe.Nothing) {
                    $tco_done = true;
                    return Data_Ordering.EQ.value;
                };
                throw new Error("Failed pattern match at Data.CatQueue (line 118, column 16 - line 125, column 30): " + [ v1.constructor.name, v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_xs, $copy_ys);
            };
            return $tco_result;
        };
    };
    return go;
};
var ordCatQueue = function (dictOrd) {
    return {
        compare: cqCompare(dictOrd),
        Eq0: function () {
            return eqCatQueue(dictOrd.Eq0());
        }
    };
};
var cons = function (a) {
    return function (v) {
        return new CatQueue(new Data_List_Types.Cons(a, v.value0), v.value1);
    };
};
var monadCatQueue = {
    Applicative0: function () {
        return applicativeCatQueue;
    },
    Bind1: function () {
        return bindCatQueue;
    }
};
var bindCatQueue = {
    bind: Data_Function.flip(Data_Foldable.foldMap(foldableCatQueue)(monoidCatQueue)),
    Apply0: function () {
        return applyCatQueue;
    }
};
var applyCatQueue = {
    apply: Control_Monad.ap(monadCatQueue),
    Functor0: function () {
        return functorCatQueue;
    }
};
var applicativeCatQueue = {
    pure: singleton,
    Apply0: function () {
        return applyCatQueue;
    }
};
var altCatQueue = {
    alt: Data_Semigroup.append(semigroupCatQueue),
    Functor0: function () {
        return functorCatQueue;
    }
};
var plusCatQueue = {
    empty: empty,
    Alt0: function () {
        return altCatQueue;
    }
};
var alternativeCatQueue = {
    Applicative0: function () {
        return applicativeCatQueue;
    },
    Plus1: function () {
        return plusCatQueue;
    }
};
var monadPlusCatQueue = {
    Monad0: function () {
        return monadCatQueue;
    },
    Alternative1: function () {
        return alternativeCatQueue;
    }
};
var monadZeroCatQueue = {
    Monad0: function () {
        return monadCatQueue;
    },
    Alternative1: function () {
        return alternativeCatQueue;
    },
    MonadZeroIsDeprecated2: function () {
        return undefined;
    }
};
module.exports = {
    CatQueue: CatQueue,
    empty: empty,
    "null": $$null,
    singleton: singleton,
    length: length,
    cons: cons,
    snoc: snoc,
    uncons: uncons,
    unsnoc: unsnoc,
    fromFoldable: fromFoldable,
    eqCatQueue: eqCatQueue,
    ordCatQueue: ordCatQueue,
    semigroupCatQueue: semigroupCatQueue,
    monoidCatQueue: monoidCatQueue,
    showCatQueue: showCatQueue,
    foldableCatQueue: foldableCatQueue,
    unfoldable1CatQueue: unfoldable1CatQueue,
    unfoldableCatQueue: unfoldableCatQueue,
    traversableCatQueue: traversableCatQueue,
    functorCatQueue: functorCatQueue,
    applyCatQueue: applyCatQueue,
    applicativeCatQueue: applicativeCatQueue,
    bindCatQueue: bindCatQueue,
    monadCatQueue: monadCatQueue,
    altCatQueue: altCatQueue,
    plusCatQueue: plusCatQueue,
    alternativeCatQueue: alternativeCatQueue,
    monadZeroCatQueue: monadZeroCatQueue,
    monadPlusCatQueue: monadPlusCatQueue
};
