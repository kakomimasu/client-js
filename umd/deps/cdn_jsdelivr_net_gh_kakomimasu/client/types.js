(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TileType = exports.ActionResult = exports.ActionType = void 0;
    exports.ActionType = {
        PUT: 1,
        NONE: 2,
        MOVE: 3,
        REMOVE: 4,
    };
    exports.ActionResult = {
        SUCCESS: 0,
        CONFLICT: 1,
        REVERT: 2,
        ERR_ONLY_ONE_TURN: 3,
        ERR_ILLEGAL_AGENT: 4,
        ERR_ILLEGAL_ACTION: 5,
    };
    exports.TileType = {
        AREA: 0,
        WALL: 1,
    };
});
