// Generated by purs version 0.14.5
"use strict";
var Control_Apply = require("../Control.Apply/index.js");
var Control_Category = require("../Control.Category/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Monoid_Dual = require("../Data.Monoid.Dual/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord_Max = require("../Data.Ord.Max/index.js");
var Data_Ord_Min = require("../Data.Ord.Min/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var JoinWith = function (x) {
    return x;
};
var FoldRight1 = (function () {
    function FoldRight1(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    FoldRight1.create = function (value0) {
        return function (value1) {
            return new FoldRight1(value0, value1);
        };
    };
    return FoldRight1;
})();
var Act = function (x) {
    return x;
};
var semigroupJoinWith = function (dictSemigroup) {
    return {
        append: function (v) {
            return function (v1) {
                return JoinWith(function (j) {
                    return Data_Semigroup.append(dictSemigroup)(v(j))(Data_Semigroup.append(dictSemigroup)(j)(v1(j)));
                });
            };
        }
    };
};
var semigroupAct = function (dictApply) {
    return {
        append: function (v) {
            return function (v1) {
                return Control_Apply.applySecond(dictApply)(v)(v1);
            };
        }
    };
};
var runFoldRight1 = function (v) {
    return v.value0(v.value1);
};
var mkFoldRight1 = FoldRight1.create(Data_Function["const"]);
var joinee = function (v) {
    return v;
};
var getAct = function (v) {
    return v;
};
var foldr1 = function (dict) {
    return dict.foldr1;
};
var foldl1 = function (dict) {
    return dict.foldl1;
};
var maximumBy = function (dictFoldable1) {
    return function (cmp) {
        return foldl1(dictFoldable1)(function (x) {
            return function (y) {
                var $76 = Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(x)(y))(Data_Ordering.GT.value);
                if ($76) {
                    return x;
                };
                return y;
            };
        });
    };
};
var minimumBy = function (dictFoldable1) {
    return function (cmp) {
        return foldl1(dictFoldable1)(function (x) {
            return function (y) {
                var $77 = Data_Eq.eq(Data_Ordering.eqOrdering)(cmp(x)(y))(Data_Ordering.LT.value);
                if ($77) {
                    return x;
                };
                return y;
            };
        });
    };
};
var foldableTuple = {
    foldMap1: function (dictSemigroup) {
        return function (f) {
            return function (v) {
                return f(v.value1);
            };
        };
    },
    foldr1: function (v) {
        return function (v1) {
            return v1.value1;
        };
    },
    foldl1: function (v) {
        return function (v1) {
            return v1.value1;
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableTuple;
    }
};
var foldableMultiplicative = {
    foldr1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldl1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldMap1: function (dictSemigroup) {
        return function (f) {
            return function (v) {
                return f(v);
            };
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableMultiplicative;
    }
};
var foldableIdentity = {
    foldMap1: function (dictSemigroup) {
        return function (f) {
            return function (v) {
                return f(v);
            };
        };
    },
    foldl1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldr1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableIdentity;
    }
};
var foldableDual = {
    foldr1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldl1: function (v) {
        return function (v1) {
            return v1;
        };
    },
    foldMap1: function (dictSemigroup) {
        return function (f) {
            return function (v) {
                return f(v);
            };
        };
    },
    Foldable0: function () {
        return Data_Foldable.foldableDual;
    }
};
var foldRight1Semigroup = {
    append: function (v) {
        return function (v1) {
            return new FoldRight1(function (a) {
                return function (f) {
                    return v.value0(f(v.value1)(v1.value0(a)(f)))(f);
                };
            }, v1.value1);
        };
    }
};
var foldMap1DefaultR = function (dictFoldable1) {
    return function (dictFunctor) {
        return function (dictSemigroup) {
            return function (f) {
                var $115 = foldr1(dictFoldable1)(Data_Semigroup.append(dictSemigroup));
                var $116 = Data_Functor.map(dictFunctor)(f);
                return function ($117) {
                    return $115($116($117));
                };
            };
        };
    };
};
var foldMap1DefaultL = function (dictFoldable1) {
    return function (dictFunctor) {
        return function (dictSemigroup) {
            return function (f) {
                var $118 = foldl1(dictFoldable1)(Data_Semigroup.append(dictSemigroup));
                var $119 = Data_Functor.map(dictFunctor)(f);
                return function ($120) {
                    return $118($119($120));
                };
            };
        };
    };
};
var foldMap1Default = function (dictWarn) {
    return function (dictFoldable1) {
        return function (dictFunctor) {
            return function (dictSemigroup) {
                return foldMap1DefaultL(dictFoldable1)(dictFunctor)(dictSemigroup);
            };
        };
    };
};
var foldMap1 = function (dict) {
    return dict.foldMap1;
};
var foldl1Default = function (dictFoldable1) {
    var $121 = Data_Function.flip((function () {
        var $123 = Data_Newtype.alaF()()()()(Data_Monoid_Dual.Dual)(foldMap1(dictFoldable1)(Data_Monoid_Dual.semigroupDual(foldRight1Semigroup)))(mkFoldRight1);
        return function ($124) {
            return runFoldRight1($123($124));
        };
    })());
    return function ($122) {
        return $121(Data_Function.flip($122));
    };
};
var foldr1Default = function (dictFoldable1) {
    return Data_Function.flip((function () {
        var $125 = foldMap1(dictFoldable1)(foldRight1Semigroup)(mkFoldRight1);
        return function ($126) {
            return runFoldRight1($125($126));
        };
    })());
};
var intercalateMap = function (dictFoldable1) {
    return function (dictSemigroup) {
        return function (j) {
            return function (f) {
                return function (foldable) {
                    return joinee(foldMap1(dictFoldable1)(semigroupJoinWith(dictSemigroup))(function ($127) {
                        return JoinWith(Data_Function["const"](f($127)));
                    })(foldable))(j);
                };
            };
        };
    };
};
var intercalate = function (dictFoldable1) {
    return function (dictSemigroup) {
        return Data_Function.flip(intercalateMap(dictFoldable1)(dictSemigroup))(Control_Category.identity(Control_Category.categoryFn));
    };
};
var maximum = function (dictOrd) {
    return function (dictFoldable1) {
        return Data_Newtype.ala()()()(Data_Ord_Max.Max)(foldMap1(dictFoldable1)(Data_Ord_Max.semigroupMax(dictOrd)));
    };
};
var minimum = function (dictOrd) {
    return function (dictFoldable1) {
        return Data_Newtype.ala()()()(Data_Ord_Min.Min)(foldMap1(dictFoldable1)(Data_Ord_Min.semigroupMin(dictOrd)));
    };
};
var traverse1_ = function (dictFoldable1) {
    return function (dictApply) {
        return function (f) {
            return function (t) {
                return Data_Functor.voidRight(dictApply.Functor0())(Data_Unit.unit)(getAct(foldMap1(dictFoldable1)(semigroupAct(dictApply))(function ($128) {
                    return Act(f($128));
                })(t)));
            };
        };
    };
};
var for1_ = function (dictFoldable1) {
    return function (dictApply) {
        return Data_Function.flip(traverse1_(dictFoldable1)(dictApply));
    };
};
var sequence1_ = function (dictFoldable1) {
    return function (dictApply) {
        return traverse1_(dictFoldable1)(dictApply)(Control_Category.identity(Control_Category.categoryFn));
    };
};
var fold1 = function (dictFoldable1) {
    return function (dictSemigroup) {
        return foldMap1(dictFoldable1)(dictSemigroup)(Control_Category.identity(Control_Category.categoryFn));
    };
};
module.exports = {
    foldMap1: foldMap1,
    fold1: fold1,
    foldr1: foldr1,
    foldl1: foldl1,
    traverse1_: traverse1_,
    for1_: for1_,
    sequence1_: sequence1_,
    foldr1Default: foldr1Default,
    foldl1Default: foldl1Default,
    foldMap1DefaultR: foldMap1DefaultR,
    foldMap1DefaultL: foldMap1DefaultL,
    foldMap1Default: foldMap1Default,
    intercalate: intercalate,
    intercalateMap: intercalateMap,
    maximum: maximum,
    maximumBy: maximumBy,
    minimum: minimum,
    minimumBy: minimumBy,
    foldableDual: foldableDual,
    foldableMultiplicative: foldableMultiplicative,
    foldableTuple: foldableTuple,
    foldableIdentity: foldableIdentity
};
