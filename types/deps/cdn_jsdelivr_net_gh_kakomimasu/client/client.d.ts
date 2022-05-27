import { VersionRes } from "../types.js";
import { Error } from "../core/types.js";
import { ActionReq, ActionRes, Board, Game, GameCreateReq, MatchReq, MatchRes, TournamentAddUserReq, TournamentCreateReq, TournamentDeleteReq, TournamentRes, User, UserDeleteReq, UserRegistReq } from "../v1/types.js";
export * from "../types.js";
export * from "../core/types.js";
export * from "../v1/types.js";
export declare type ApiRes<T> = Promise<{
    success: true;
    data: T;
    res: Response;
} | {
    success: false;
    data: Error;
    res: Response;
}>;
export default class ApiClient {
    baseUrl: URL;
    constructor(host?: string | URL);
    _fetchPostJson(path: string, data: object, auth?: string): Promise<Response>;
    _fetch(path: string, auth?: string): Promise<Response>;
    getVersion(): ApiRes<VersionRes>;
    usersVerify(idToken: string): ApiRes<undefined>;
    usersRegist(data: UserRegistReq, auth?: string): ApiRes<Required<User>>;
    usersDelete(data: UserDeleteReq, auth: string): ApiRes<User>;
    usersShow(identifier: string, idToken?: string): ApiRes<User>;
    usersSearch(searchText: string): ApiRes<User[]>;
    tournamentsCreate(data: TournamentCreateReq): ApiRes<TournamentRes>;
    tournamentsGet(id: string): ApiRes<TournamentRes>;
    tournamentsGet(): ApiRes<TournamentRes[]>;
    tournamentsDelete(data: TournamentDeleteReq): ApiRes<TournamentRes>;
    tournamentsAddUser(tournamentId: string, data: TournamentAddUserReq): ApiRes<TournamentRes>;
    gameCreate(data: GameCreateReq, auth?: string): ApiRes<Game>;
    getBoards(): ApiRes<Board[]>;
    match(data: MatchReq, auth?: string): ApiRes<MatchRes>;
    getMatch(gameId: string): ApiRes<Game>;
    setAction(gameId: string, data: ActionReq, auth: string): ApiRes<ActionRes>;
}
