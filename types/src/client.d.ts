import { ActionReq, ActionRes, Board, Error, Game, GameCreateReq, MatchReq, MatchRes, TournamentAddUserReq, TournamentCreateReq, TournamentDeleteReq, TournamentRes, User, UserDeleteReq, UserRegistReq } from "./deps.js";
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
    _fetchToJson(path: string): Promise<any>;
    _fetchPostJson(path: string, data: object, auth?: string): Promise<Response>;
    _fetch(path: string, auth?: string): Promise<Response>;
    _fetchPostJsonToJson(path: string, data: object, auth: string): Promise<any>;
    _fetchPostJsonToJsonWithAuth(path: string, data: object, auth: string): Promise<any>;
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
    match(data: MatchReq, auth: string): ApiRes<MatchRes>;
    getMatch(gameId: string): ApiRes<Game>;
    setAction(gameId: string, data: ActionReq, auth: string): ApiRes<ActionRes>;
}
