export declare const ActionType: {
    readonly PUT: 1;
    readonly NONE: 2;
    readonly MOVE: 3;
    readonly REMOVE: 4;
};
export declare const ActionResult: {
    readonly SUCCESS: 0;
    readonly CONFLICT: 1;
    readonly REVERT: 2;
    readonly ERR_ONLY_ONE_TURN: 3;
    readonly ERR_ILLEGAL_AGENT: 4;
    readonly ERR_ILLEGAL_ACTION: 5;
};
export declare const TileType: {
    readonly AREA: 0;
    readonly WALL: 1;
};
export declare type VersionRes = {
    version: string;
};
export declare type DryRunOption = {
    dryRun?: boolean;
};
export declare type ErrorRes = {
    errorCode: number;
    message: string;
};
export declare type JoinMatchReqBase = {
    spec?: string;
    guestName?: string;
};
export declare type JoinMatchRes = {
    userId: string;
    spec: string;
    gameId: string;
    index: number;
    pic: string;
};
export declare type JoinGameIdMatchReq = JoinMatchReqBase & DryRunOption;
export declare type JoinGameIdMatchRes = JoinMatchRes;
export declare type JoinFreeMatchReq = JoinMatchReqBase & DryRunOption;
export declare type JoinFreeMatchRes = JoinMatchRes;
export declare type JoinAiMatchReq = JoinMatchReqBase & {
    aiName: "none" | "a1" | "a2" | "a3" | "a4";
    boardName?: string;
    nAgent?: number;
    totalTurn?: number;
    operationSec?: number;
    transitionSec?: number;
} & DryRunOption;
export declare type JoinAiMatchRes = JoinMatchRes;
export declare type GetMatchRes = Game;
export declare type ActionMatchReq = {
    actions: ({
        agentId: number;
        type: "PUT" | "MOVE" | "REMOVE";
        x: number;
        y: number;
    } | {
        agentId: number;
        type: "NONE";
    })[];
} & DryRunOption;
export declare type ActionMatchRes = {
    receptionUnixTime: number;
    turn: number;
};
export declare type CreateMatchReq = {
    name?: string;
    boardName: string;
    nPlayer?: number;
    nAgent?: number;
    totalTurn?: number;
    operationSec?: number;
    transitionSec?: number;
    playerIdentifiers?: string[];
    tournamentId?: string;
    isPersonal?: boolean;
} & DryRunOption;
export declare type CreateMatchRes = Game;
export declare type StreamMatchesInitialRes = {
    type: "initial";
    q: string;
    startIndex?: number;
    endIndex?: number;
    games: Game[];
    gamesNum: number;
};
export declare type StreamMatchesUpdateRes = {
    type: "update";
    game: Game;
};
export declare type StreamMatchesAddRes = {
    type: "add";
    game: Game;
};
export declare type StreamMatchesRemoveRes = {
    type: "remove";
    gameId: string;
};
export declare type StreamMatchesRes = StreamMatchesInitialRes | StreamMatchesUpdateRes | StreamMatchesAddRes | StreamMatchesRemoveRes;
export declare type GetBoardsRes = Board[];
export declare type GetTournamentsRes = Tournament[];
export declare type CreateTournamentReq = {
    name: string;
    type: "round-robin" | "knockout";
    organizer?: string;
    remarks?: string;
    participants?: string[];
} & DryRunOption;
export declare type CreateTournamentRes = Tournament;
export declare type GetTournamentRes = Tournament;
export declare type DeleteTournamentReq = DryRunOption;
export declare type DeleteTournamentRes = Tournament;
export declare type AddTournamentUserReq = {
    user: string;
} & DryRunOption;
export declare type AddTournamentUserRes = Tournament;
export declare type GetUserRes = User;
export declare type DeleteUserReq = DryRunOption;
export declare type DeleteUserRes = AuthedUser;
export declare type GetUsersRes = User[];
export declare type CreateUserReq = {
    screenName: string;
    name: string;
} & DryRunOption;
export declare type CreateUserRes = AuthedUser;
export declare type RegenerateUserTokenRes = AuthedUser;
export declare type Game = {
    id: string;
    status: "free" | "ready" | "gaming" | "ended";
    turn: number;
    totalTurn: number;
    nPlayer: number;
    nAgent: number;
    field: {
        width: number;
        height: number;
        points: number[];
        tiles: {
            type: typeof TileType[keyof typeof TileType];
            player: number | null;
        }[];
    } | null;
    players: Player[];
    log: {
        players: {
            point: Point;
            actions: {
                agentId: number;
                type: typeof ActionType[keyof typeof ActionType];
                x: number;
                y: number;
                res: typeof ActionResult[keyof typeof ActionResult];
            }[];
        }[];
    }[];
    name?: string;
    startedAtUnixTime: number | null;
    reservedUsers: string[];
    type: "normal" | "self" | "personal";
    operationSec: number;
    transitionSec: number;
};
export declare type Board = {
    name: string;
    width: number;
    height: number;
    nAgent?: number;
    nPlayer?: number;
    totalTurn?: number;
    operationSec?: number;
    transitionSec?: number;
    points: number[];
};
export declare type Point = {
    areaPoint: number;
    wallPoint: number;
};
export declare type Player = {
    id: string;
    agents: {
        x: number;
        y: number;
    }[];
    point: Point;
    type: "account" | "guest";
};
export declare type Tournament = {
    name: string;
    organizer: string;
    type: "round-robin" | "knockout";
    remarks: string;
    users: string[];
    id: string;
    gameIds: string[];
};
declare type UserBase = {
    screenName: string;
    name: string;
    id: string;
    gameIds: string[];
};
export declare type User = UserBase & {
    bearerToken?: string;
};
export declare type AuthedUser = UserBase & {
    bearerToken: string;
};
export {};
