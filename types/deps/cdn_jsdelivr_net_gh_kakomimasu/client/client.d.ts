import * as T from "./types.js";
export * from "./types.js";
export declare type ApiRes<T> = {
    success: true;
    data: T;
    res: Response;
} | {
    success: false;
    data: T.ErrorRes;
    res: Response;
};
export default class ApiClient {
    #private;
    baseUrl: URL;
    constructor(host?: string | URL);
    getVersion(): Promise<ApiRes<T.VersionRes>>;
    createUser(data: T.CreateUserReq, auth?: string): Promise<ApiRes<T.AuthedUser>>;
    deleteUser(idOrName: string, data: T.DeleteUserReq, auth: string): Promise<ApiRes<T.AuthedUser>>;
    getUser(idOrName: string, auth?: string): Promise<ApiRes<T.User>>;
    getUsers(query: string): Promise<ApiRes<T.GetUsersRes>>;
    createTournament(data: T.CreateTournamentReq): Promise<ApiRes<T.Tournament>>;
    getTournaments(): Promise<ApiRes<T.GetTournamentsRes>>;
    getTournament(id: string): Promise<ApiRes<T.Tournament>>;
    deleteTournament(tournamentId: string, data?: T.DeleteTournamentReq): Promise<ApiRes<T.Tournament>>;
    addTournamentUser(id: string, data: T.AddTournamentUserReq): Promise<ApiRes<T.Tournament>>;
    createMatch(data: T.CreateMatchReq, auth?: string): Promise<ApiRes<T.Game>>;
    getBoards(): Promise<ApiRes<T.GetBoardsRes>>;
    joinGameIdMatch(id: string, data: T.JoinGameIdMatchReq, auth?: string): Promise<ApiRes<T.JoinMatchRes>>;
    joinFreeMatch(data: T.JoinFreeMatchReq, auth?: string): Promise<ApiRes<T.JoinMatchRes>>;
    joinAiMatch(data: T.JoinAiMatchReq, auth?: string): Promise<ApiRes<T.JoinMatchRes>>;
    getMatch(id: string): Promise<ApiRes<T.Game>>;
    setAction(id: string, data: T.ActionMatchReq, auth: string): Promise<ApiRes<T.ActionMatchRes>>;
}
