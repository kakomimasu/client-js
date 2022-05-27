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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../types.js", "../core/types.js", "../v1/types.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("../types.js"), exports);
    __exportStar(require("../core/types.js"), exports);
    __exportStar(require("../v1/types.js"), exports);
    class ApiClient {
        constructor(host = new URL("http://localhost:8880")) {
            Object.defineProperty(this, "baseUrl", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.baseUrl = new URL("", host);
        }
        // deno-lint-ignore ban-types
        _fetchPostJson(path, data, auth) {
            return __awaiter(this, void 0, void 0, function* () {
                const headers = new Headers();
                headers.append("Content-Type", "application/json");
                if (auth)
                    headers.append("Authorization", auth);
                try {
                    const res = yield fetch(new URL(path, this.baseUrl).href, {
                        method: "POST",
                        headers,
                        body: JSON.stringify(data),
                    });
                    return res;
                }
                catch (e) {
                    const error = { errorCode: -1, message: e.message };
                    const res = new Response(JSON.stringify(error), { status: 404 });
                    return res;
                }
            });
        }
        _fetch(path, auth) {
            return __awaiter(this, void 0, void 0, function* () {
                // console.log(new URL(path, this.baseUrl).href);
                try {
                    const res = yield fetch(new URL(path, this.baseUrl).href, auth
                        ? {
                            headers: new Headers({
                                Authorization: auth,
                            }),
                        }
                        : {});
                    return res;
                }
                catch (e) {
                    const error = { errorCode: -1, message: e.message };
                    const res = new Response(JSON.stringify(error), { status: 404 });
                    return res;
                }
            });
        }
        getVersion() {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetch("/version");
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        usersVerify(idToken) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetch("/v1/users/verify", idToken);
                const success = res.status === 200;
                const data = success ? undefined : yield res.json();
                return { success, data, res };
            });
        }
        usersRegist(data, auth) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetchPostJson("/v1/users/regist", data, auth);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        usersDelete(data, auth) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetchPostJson("/v1/users/delete", data, auth);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        usersShow(identifier, idToken) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetch(`/v1/users/show/${identifier}`, idToken);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        usersSearch(searchText) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetch(`/v1/users/search?q=${searchText}`);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        tournamentsCreate(data) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetchPostJson("/v1/tournament/create", data);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        tournamentsGet(id = "") {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetch(`/v1/tournament/get?id=${id}`);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        tournamentsDelete(data) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetchPostJson("/v1/tournament/delete", data);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        tournamentsAddUser(tournamentId, data) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetchPostJson(`/v1/tournament/add?id=${tournamentId}`, data);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        gameCreate(data, auth) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetchPostJson("/v1/game/create", data, auth);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        getBoards() {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetch("/v1/game/boards");
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        match(data, auth) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetchPostJson("/v1/match", data, auth);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        getMatch(gameId) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetch(`/v1/match/${gameId}`);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
        setAction(gameId, data, auth) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield this._fetchPostJson(`/v1/match/${gameId}/action`, data, auth);
                return { success: res.status === 200, data: yield res.json(), res };
            });
        }
    }
    exports.default = ApiClient;
});
