// Generated by purs version 0.14.5
"use strict";
var Data_Argonaut_Core = require("../Data.Argonaut.Core/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Lens_Prism = require("../Data.Lens.Prism/index.js");
var _String = function (dictChoice) {
    return Data_Lens_Prism["prism'"](Data_Argonaut_Core.fromString)(Data_Argonaut_Core.toString)(dictChoice);
};
var _Object = function (dictChoice) {
    return Data_Lens_Prism["prism'"](Data_Argonaut_Core.fromObject)(Data_Argonaut_Core.toObject)(dictChoice);
};
var _Number = function (dictChoice) {
    return Data_Lens_Prism["prism'"](Data_Argonaut_Core.fromNumber)(Data_Argonaut_Core.toNumber)(dictChoice);
};
var _Null = function (dictChoice) {
    return Data_Lens_Prism["prism'"](Data_Function["const"](Data_Argonaut_Core.jsonNull))(Data_Argonaut_Core.toNull)(dictChoice);
};
var _Boolean = function (dictChoice) {
    return Data_Lens_Prism["prism'"](Data_Argonaut_Core.fromBoolean)(Data_Argonaut_Core.toBoolean)(dictChoice);
};
var _Array = function (dictChoice) {
    return Data_Lens_Prism["prism'"](Data_Argonaut_Core.fromArray)(Data_Argonaut_Core.toArray)(dictChoice);
};
module.exports = {
    "_Null": _Null,
    "_Boolean": _Boolean,
    "_Number": _Number,
    "_String": _String,
    "_Array": _Array,
    "_Object": _Object
};
