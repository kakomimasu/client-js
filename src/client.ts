import {
  ActionReq,
  ActionRes,
  Board,
  Error,
  Game,
  GameCreateReq,
  MatchReq,
  MatchRes,
  TournamentAddUserReq,
  TournamentCreateReq,
  TournamentDeleteReq,
  TournamentRes,
  User,
  UserDeleteReq,
  UserRegistReq,
} from "./types.ts";

export type ApiRes<T> = Promise<
  { success: true; data: T; res: Response } | {
    success: false;
    data: Error;
    res: Response;
  }
>;

export default class ApiClient {
  public baseUrl: string;

  constructor(host = "http://localhost:8880") {
    this.baseUrl = host + "/api";
  }

  async _fetchToJson(path: string) {
    const resJson = await (await fetch(this.baseUrl + path)).json();
    return resJson;
  }

  async _fetchPostJson(path: string, data: object, auth?: string) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (auth) headers.append("Authorization", auth);
    const res = await fetch(
      this.baseUrl + path,
      {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      },
    );
    return res;
  }

  async _fetch(path: string, auth?: string) {
    const res = await fetch(
      this.baseUrl + path,
      auth
        ? {
          headers: new Headers({
            Authorization: auth,
          }),
        }
        : {},
    );
    return res;
  }

  async _fetchPostJsonToJson(path: string, data: object, auth: string) {
    const resJson = await (await this._fetchPostJson(path, data, auth)).json();
    return resJson;
  }

  async _fetchPostJsonToJsonWithAuth(path: string, data: object, auth: string) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (auth) headers.append("Authorization", auth);
    const resJson = await (await fetch(
      this.baseUrl + path,
      {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      },
    )).json();
    return resJson;
  }

  async usersVerify(idToken: string): ApiRes<undefined> {
    const res = await this._fetch("/users/verify", idToken);
    const success = res.status === 200;
    const data = success ? undefined : await res.json();
    return { success, data, res };
  }
  async usersRegist(
    data: UserRegistReq,
    auth?: string,
  ): ApiRes<Required<User>> {
    const res = await this._fetchPostJson("/users/regist", data, auth);
    return { success: res.status === 200, data: await res.json(), res };
  }

  async usersDelete(data: UserDeleteReq, auth: string): ApiRes<User> {
    const res = await this._fetchPostJson("/users/delete", data, auth);
    return { success: res.status === 200, data: await res.json(), res };
  }

  async usersShow(identifier: string, idToken?: string): ApiRes<User> {
    const res = await this._fetch(`/users/show/${identifier}`, idToken);
    return { success: res.status === 200, data: await res.json(), res };
  }

  async usersSearch(searchText: string): ApiRes<User[]> {
    const res = await this._fetch(`/users/search?q=${searchText}`);
    return { success: res.status === 200, data: await res.json(), res };
  }

  async tournamentsCreate(data: TournamentCreateReq): ApiRes<TournamentRes> {
    const res = await this._fetchPostJson("/tournament/create", data);
    return { success: res.status === 200, data: await res.json(), res };
  }
  async tournamentsGet(id: string): ApiRes<TournamentRes>;
  async tournamentsGet(): ApiRes<TournamentRes[]>;
  async tournamentsGet(id = ""): ApiRes<TournamentRes | TournamentRes[]> {
    const res = await this._fetch(`/tournament/get?id=${id}`);
    return { success: res.status === 200, data: await res.json(), res };
  }

  async tournamentsDelete(data: TournamentDeleteReq): ApiRes<TournamentRes> {
    const res = await this._fetchPostJson("/tournament/delete", data);
    return { success: res.status === 200, data: await res.json(), res };
  }
  async tournamentsAddUser(
    tournamentId: string,
    data: TournamentAddUserReq,
  ): ApiRes<TournamentRes> {
    const res = await this._fetchPostJson(
      `/tournament/add?id=${tournamentId}`,
      data,
    );
    return { success: res.status === 200, data: await res.json(), res };
  }

  async gameCreate(data: GameCreateReq): ApiRes<Game> {
    const res = await this._fetchPostJson("/game/create", data);
    return { success: res.status === 200, data: await res.json(), res };
  }

  async getBoards(): ApiRes<Board[]> {
    const res = await this._fetch("/game/boards");
    return { success: res.status === 200, data: await res.json(), res };
  }

  async match(data: MatchReq, auth: string): ApiRes<MatchRes> {
    const res = await this._fetchPostJson("/match", data, auth);
    return { success: res.status === 200, data: await res.json(), res };
  }

  async getMatch(gameId: string): ApiRes<Game> {
    const res = await this._fetch(`/match/${gameId}`);
    return { success: res.status === 200, data: await res.json(), res };
  }

  async setAction(
    gameId: string,
    data: ActionReq,
    auth: string,
  ): ApiRes<ActionRes> {
    const res = await this._fetchPostJson(
      `/match/${gameId}/action`,
      data,
      auth,
    );
    return { success: res.status === 200, data: await res.json(), res };
  }
}
