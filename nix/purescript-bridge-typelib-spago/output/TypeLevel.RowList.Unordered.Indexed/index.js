// Generated by purs version 0.14.5
"use strict";
var uniqueIndicesNilI = {};
var uniqueIndicesConsINilI = {};
var uniqueIndicesConsIConsI = function (dictUniqueIndices) {
    return function (dictUniqueIndices1) {
        return {};
    };
};
var uniqueIndicesConsIConsI1 = function (dictFail) {
    return {};
};
var indexRowListWithAccNilNil = {};
var indexRowListWithAccConsCo = function (dictIndexRowListWithAcc) {
    return {};
};
var indexRowList = function (dictIndexRowListWithAcc) {
    return {};
};
var getWithLabelConsI = function (dictGetWithLabel) {
    return {};
};
var getWithLabelConsI1 = function (dictIsSymbol) {
    return {};
};
var getLabelWithIndexConsI = function (dictGetLabelWithIndex) {
    return function (dictAllUniqueLabelsI) {
        return function (dictUniqueIndices) {
            return function (dictIsSymbol) {
                return function (dictKnownNat) {
                    return {
                        KnownNat0: dictGetLabelWithIndex.KnownNat0,
                        AllUniqueLabelsI1: function () {
                            return undefined;
                        },
                        UniqueIndices2: function () {
                            return undefined;
                        }
                    };
                };
            };
        };
    };
};
var getLabelWithIndexConsI1 = function (dictAllUniqueLabelsI) {
    return function (dictUniqueIndices) {
        return function (dictIsSymbol) {
            return function (dictKnownNat) {
                return {
                    KnownNat0: function () {
                        return dictKnownNat;
                    },
                    AllUniqueLabelsI1: function () {
                        return undefined;
                    },
                    UniqueIndices2: function () {
                        return undefined;
                    }
                };
            };
        };
    };
};
var getLabelIndex = function (dictIndexRowList) {
    return function (dictGetIndexWithLabel) {
        return {};
    };
};
var getIndexWithLabelConsI = function (dictGetIndexWithLabel) {
    return function (dictAllUniqueLabelsI) {
        return function (dictUniqueIndices) {
            return function (dictIsSymbol) {
                return function (dictKnownNat) {
                    return {
                        IsSymbol0: dictGetIndexWithLabel.IsSymbol0
                    };
                };
            };
        };
    };
};
var getIndexWithLabelConsI1 = function (dictAllUniqueLabelsI) {
    return function (dictUniqueIndices) {
        return function (dictIsSymbol) {
            return function (dictKnownNat) {
                return {
                    IsSymbol0: function () {
                        return dictIsSymbol;
                    }
                };
            };
        };
    };
};
var allUniqueLabelsINilI = {};
var allUniqueLabelsIConsINilI = {};
var allUniqueLabelsIConsICons = function (dictAllUniqueLabelsI) {
    return function (dictAllUniqueLabelsI1) {
        return {};
    };
};
var allUniqueLabelsIConsICons1 = function (dictFail) {
    return {};
};
var uniqueIndicesTests = (function () {
    var testUniques = function (dictUniqueIndices) {
        return "[0, 1, 2] have all unique indices";
    };
    var testSingletonZ = function (dictUniqueIndices) {
        return "Singleton list has all unique indices";
    };
    var testSingletonSSZ = function (dictUniqueIndices) {
        return "Singleton list has all unique indices";
    };
    var testNil = function (dictUniqueIndices) {
        return "Empty list has all unique indices";
    };
    var _testDups2 = function (dictUniqueIndices) {
        return "[1, 0, 1] has dups and shouldn't compile";
    };
    var _testDups = function (dictUniqueIndices) {
        return "[1, 1, 2] has dups and shouldn't compile";
    };
    return [ testNil(), testSingletonZ(), testSingletonSSZ(), testUniques() ];
})();
module.exports = {
    uniqueIndicesTests: uniqueIndicesTests,
    uniqueIndicesNilI: uniqueIndicesNilI,
    uniqueIndicesConsINilI: uniqueIndicesConsINilI,
    uniqueIndicesConsIConsI1: uniqueIndicesConsIConsI1,
    uniqueIndicesConsIConsI: uniqueIndicesConsIConsI,
    allUniqueLabelsINilI: allUniqueLabelsINilI,
    allUniqueLabelsIConsINilI: allUniqueLabelsIConsINilI,
    allUniqueLabelsIConsICons1: allUniqueLabelsIConsICons1,
    allUniqueLabelsIConsICons: allUniqueLabelsIConsICons,
    getIndexWithLabelConsI1: getIndexWithLabelConsI1,
    getIndexWithLabelConsI: getIndexWithLabelConsI,
    getLabelWithIndexConsI1: getLabelWithIndexConsI1,
    getLabelWithIndexConsI: getLabelWithIndexConsI,
    getWithLabelConsI1: getWithLabelConsI1,
    getWithLabelConsI: getWithLabelConsI,
    getLabelIndex: getLabelIndex,
    indexRowList: indexRowList,
    indexRowListWithAccNilNil: indexRowListWithAccNilNil,
    indexRowListWithAccConsCo: indexRowListWithAccConsCo
};
