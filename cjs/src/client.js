"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ApiClient {
    constructor(host = "http://localhost:8880") {
        this.baseUrl = host + "/api";
    }
    _fetchToJson(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const resJson = yield (yield fetch(this.baseUrl + path)).json();
            return resJson;
        });
    }
    _fetchPostJson(path, data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            if (auth)
                headers.append("Authorization", auth);
            const res = yield fetch(this.baseUrl + path, {
                method: "POST",
                headers,
                body: JSON.stringify(data),
            });
            return res;
        });
    }
    _fetch(path, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(this.baseUrl + path, auth
                ? {
                    headers: new Headers({
                        Authorization: auth,
                    }),
                }
                : {});
            return res;
        });
    }
    _fetchPostJsonToJson(path, data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const resJson = yield (yield this._fetchPostJson(path, data, auth)).json();
            return resJson;
        });
    }
    _fetchPostJsonToJsonWithAuth(path, data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            if (auth)
                headers.append("Authorization", auth);
            const resJson = yield (yield fetch(this.baseUrl + path, {
                method: "POST",
                headers,
                body: JSON.stringify(data),
            })).json();
            return resJson;
        });
    }
    usersVerify(idToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetch("/users/verify", idToken);
            const success = res.status === 200;
            const data = success ? undefined : yield res.json();
            return { success, data, res };
        });
    }
    usersRegist(data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetchPostJson("/users/regist", data, auth);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    usersDelete(data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetchPostJson("/users/delete", data, auth);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    usersShow(identifier, idToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetch(`/users/show/${identifier}`, idToken);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    usersSearch(searchText) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetch(`/users/search?q=${searchText}`);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    tournamentsCreate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetchPostJson("/tournament/create", data);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    tournamentsGet(id = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetch(`/tournament/get?id=${id}`);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    tournamentsDelete(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetchPostJson("/tournament/delete", data);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    tournamentsAddUser(tournamentId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetchPostJson(`/tournament/add?id=${tournamentId}`, data);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    gameCreate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetchPostJson("/game/create", data);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    getBoards() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetch("/game/boards");
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    match(data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetchPostJson("/match", data, auth);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    getMatch(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetch(`/match/${gameId}`);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
    setAction(gameId, data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._fetchPostJson(`/match/${gameId}/action`, data, auth);
            return { success: res.status === 200, data: yield res.json(), res };
        });
    }
}
exports.default = ApiClient;
