var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./deps/cdn_jsdelivr_net_gh_kakomimasu/client/client.js", "./deps/cdn_jsdelivr_net_gh_kakomimasu/client/client.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApiClient = void 0;
    __exportStar(require("./deps/cdn_jsdelivr_net_gh_kakomimasu/client/client.js"), exports);
    var client_js_1 = require("./deps/cdn_jsdelivr_net_gh_kakomimasu/client/client.js");
    Object.defineProperty(exports, "ApiClient", { enumerable: true, get: function () { return __importDefault(client_js_1).default; } });
});
