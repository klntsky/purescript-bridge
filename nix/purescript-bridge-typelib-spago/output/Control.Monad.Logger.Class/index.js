// Generated by purs version 0.14.5
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Cont_Trans = require("../Control.Monad.Cont.Trans/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Control_Monad_List_Trans = require("../Control.Monad.List.Trans/index.js");
var Control_Monad_Maybe_Trans = require("../Control.Monad.Maybe.Trans/index.js");
var Control_Monad_RWS_Trans = require("../Control.Monad.RWS.Trans/index.js");
var Control_Monad_Reader_Trans = require("../Control.Monad.Reader.Trans/index.js");
var Control_Monad_State_Trans = require("../Control.Monad.State.Trans/index.js");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class/index.js");
var Control_Monad_Writer_Trans = require("../Control.Monad.Writer.Trans/index.js");
var Data_JSDate = require("../Data.JSDate/index.js");
var Data_Log_Level = require("../Data.Log.Level/index.js");
var Data_Map_Internal = require("../Data.Map.Internal/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var log = function (dict) {
    return dict.log;
};
var log$prime = function (dictMonadLogger) {
    return function (level) {
        return function (tags) {
            return function (message) {
                return Control_Bind.bind(((dictMonadLogger.MonadEffect0()).Monad0()).Bind1())(Effect_Class.liftEffect(dictMonadLogger.MonadEffect0())(Data_JSDate.now))((function () {
                    var $23 = log(dictMonadLogger);
                    return function ($24) {
                        return $23((function (v) {
                            return {
                                level: level,
                                message: message,
                                tags: tags,
                                timestamp: v
                            };
                        })($24));
                    };
                })());
            };
        };
    };
};
var trace = function (dictMonadLogger) {
    return log$prime(dictMonadLogger)(Data_Log_Level.Trace.value);
};
var trace$prime = function (dictMonadLogger) {
    return trace(dictMonadLogger)(Data_Map_Internal.empty);
};
var warn = function (dictMonadLogger) {
    return log$prime(dictMonadLogger)(Data_Log_Level.Warn.value);
};
var warn$prime = function (dictMonadLogger) {
    return warn(dictMonadLogger)(Data_Map_Internal.empty);
};
var monadLoggerContT = function (dictMonadLogger) {
    return {
        log: (function () {
            var $25 = Control_Monad_Trans_Class.lift(Control_Monad_Cont_Trans.monadTransContT)((dictMonadLogger.MonadEffect0()).Monad0());
            var $26 = log(dictMonadLogger);
            return function ($27) {
                return $25($26($27));
            };
        })(),
        MonadEffect0: function () {
            return Control_Monad_Cont_Trans.monadEffectContT(dictMonadLogger.MonadEffect0());
        }
    };
};
var monadLoggerExceptT = function (dictMonadLogger) {
    return {
        log: (function () {
            var $28 = Control_Monad_Trans_Class.lift(Control_Monad_Except_Trans.monadTransExceptT)((dictMonadLogger.MonadEffect0()).Monad0());
            var $29 = log(dictMonadLogger);
            return function ($30) {
                return $28($29($30));
            };
        })(),
        MonadEffect0: function () {
            return Control_Monad_Except_Trans.monadEffectExceptT(dictMonadLogger.MonadEffect0());
        }
    };
};
var monadLoggerListT = function (dictMonadLogger) {
    return {
        log: (function () {
            var $31 = Control_Monad_Trans_Class.lift(Control_Monad_List_Trans.monadTransListT)((dictMonadLogger.MonadEffect0()).Monad0());
            var $32 = log(dictMonadLogger);
            return function ($33) {
                return $31($32($33));
            };
        })(),
        MonadEffect0: function () {
            return Control_Monad_List_Trans.monadEffectListT(dictMonadLogger.MonadEffect0());
        }
    };
};
var monadLoggerMaybeT = function (dictMonadLogger) {
    return {
        log: (function () {
            var $34 = Control_Monad_Trans_Class.lift(Control_Monad_Maybe_Trans.monadTransMaybeT)((dictMonadLogger.MonadEffect0()).Monad0());
            var $35 = log(dictMonadLogger);
            return function ($36) {
                return $34($35($36));
            };
        })(),
        MonadEffect0: function () {
            return Control_Monad_Maybe_Trans.monadEffectMaybe(dictMonadLogger.MonadEffect0());
        }
    };
};
var monadLoggerRWST = function (dictMonoid) {
    return function (dictMonadLogger) {
        return {
            log: (function () {
                var $37 = Control_Monad_Trans_Class.lift(Control_Monad_RWS_Trans.monadTransRWST(dictMonoid))((dictMonadLogger.MonadEffect0()).Monad0());
                var $38 = log(dictMonadLogger);
                return function ($39) {
                    return $37($38($39));
                };
            })(),
            MonadEffect0: function () {
                return Control_Monad_RWS_Trans.monadEffectRWS(dictMonoid)(dictMonadLogger.MonadEffect0());
            }
        };
    };
};
var monadLoggerReaderT = function (dictMonadLogger) {
    return {
        log: (function () {
            var $40 = Control_Monad_Trans_Class.lift(Control_Monad_Reader_Trans.monadTransReaderT)((dictMonadLogger.MonadEffect0()).Monad0());
            var $41 = log(dictMonadLogger);
            return function ($42) {
                return $40($41($42));
            };
        })(),
        MonadEffect0: function () {
            return Control_Monad_Reader_Trans.monadEffectReader(dictMonadLogger.MonadEffect0());
        }
    };
};
var monadLoggerStateT = function (dictMonadLogger) {
    return {
        log: (function () {
            var $43 = Control_Monad_Trans_Class.lift(Control_Monad_State_Trans.monadTransStateT)((dictMonadLogger.MonadEffect0()).Monad0());
            var $44 = log(dictMonadLogger);
            return function ($45) {
                return $43($44($45));
            };
        })(),
        MonadEffect0: function () {
            return Control_Monad_State_Trans.monadEffectState(dictMonadLogger.MonadEffect0());
        }
    };
};
var monadLoggerWriterT = function (dictMonoid) {
    return function (dictMonadLogger) {
        return {
            log: (function () {
                var $46 = Control_Monad_Trans_Class.lift(Control_Monad_Writer_Trans.monadTransWriterT(dictMonoid))((dictMonadLogger.MonadEffect0()).Monad0());
                var $47 = log(dictMonadLogger);
                return function ($48) {
                    return $46($47($48));
                };
            })(),
            MonadEffect0: function () {
                return Control_Monad_Writer_Trans.monadEffectWriter(dictMonoid)(dictMonadLogger.MonadEffect0());
            }
        };
    };
};
var info = function (dictMonadLogger) {
    return log$prime(dictMonadLogger)(Data_Log_Level.Info.value);
};
var info$prime = function (dictMonadLogger) {
    return info(dictMonadLogger)(Data_Map_Internal.empty);
};
var error = function (dictMonadLogger) {
    return log$prime(dictMonadLogger)(Data_Log_Level["Error"].value);
};
var error$prime = function (dictMonadLogger) {
    return error(dictMonadLogger)(Data_Map_Internal.empty);
};
var debug = function (dictMonadLogger) {
    return log$prime(dictMonadLogger)(Data_Log_Level.Debug.value);
};
var debug$prime = function (dictMonadLogger) {
    return debug(dictMonadLogger)(Data_Map_Internal.empty);
};
module.exports = {
    log: log,
    trace: trace,
    debug: debug,
    info: info,
    warn: warn,
    error: error,
    monadLoggerContT: monadLoggerContT,
    monadLoggerExceptT: monadLoggerExceptT,
    monadLoggerListT: monadLoggerListT,
    monadLoggerMaybeT: monadLoggerMaybeT,
    monadLoggerRWST: monadLoggerRWST,
    monadLoggerReaderT: monadLoggerReaderT,
    monadLoggerStateT: monadLoggerStateT,
    monadLoggerWriterT: monadLoggerWriterT
};
