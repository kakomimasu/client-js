var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ApiClient_instances, _ApiClient_fetch;
export * from "./types.js";
export default class ApiClient {
    constructor(host = new URL("http://localhost:8880")) {
        _ApiClient_instances.add(this);
        Object.defineProperty(this, "baseUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.baseUrl = new URL("", host);
    }
    getVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, "/version");
        });
    }
    regenerateUserMeToken(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/users/me/token`, { auth });
        });
    }
    getUserMe(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/users/me`, { auth });
        });
    }
    deleteUserMe(data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/users/me`, { data, auth, method: "DELETE" });
        });
    }
    getUser(idOrName, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/users/${idOrName}`, { auth: auth });
        });
    }
    getUsers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/users?q=${query}`);
        });
    }
    createTournament(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, "/v1/tournaments", { data, method: "POST" });
        });
    }
    getTournaments() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/tournaments`);
        });
    }
    getTournament(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/tournaments/${id}`);
        });
    }
    deleteTournament(tournamentId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/tournaments/${tournamentId}`, { data, method: "DELETE" });
        });
    }
    addTournamentUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/tournaments/${id}/users`, { data, method: "POST" });
        });
    }
    createMatch(data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, "/v1/matches", { data, auth, method: "POST" });
        });
    }
    getBoards() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, "/v1/boards");
        });
    }
    joinGameIdMatch(id, data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/matches/${id}/players`, { data, auth, method: "POST" });
        });
    }
    joinFreeMatch(data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/matches/free/players`, { data, auth, method: "POST" });
        });
    }
    joinAiMatch(data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/matches/ai/players`, { data, auth, method: "POST" });
        });
    }
    getMatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/matches/${id}`);
        });
    }
    setAction(id, data, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ApiClient_instances, "m", _ApiClient_fetch).call(this, `/v1/matches/${id}/actions`, { data, auth, method: "PATCH" });
        });
    }
}
_ApiClient_instances = new WeakSet(), _ApiClient_fetch = function _ApiClient_fetch(path, init = {}) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const headers = new Headers();
        if (init.auth)
            headers.append("Authorization", init.auth);
        const method = (_a = init.method) !== null && _a !== void 0 ? _a : "GET";
        if (method !== "GET") {
            headers.append("Content-Type", "application/json");
        }
        const body = ("data" in init && init.data) ? init.data : {};
        try {
            const res = yield fetch(new URL(path, this.baseUrl).href, {
                method: method,
                headers,
                body: method !== "GET" ? JSON.stringify(body) : undefined,
            });
            return {
                success: res.status === 200,
                // deno-lint-ignore no-explicit-any
                data: yield res.json(),
                res,
            };
        }
        catch (e) {
            const data = { errorCode: -1, message: e.message };
            const res = new Response(JSON.stringify(data), { status: 404 });
            return { success: false, data, res };
        }
    });
};
