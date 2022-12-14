export const ActionType = {
    PUT: 1,
    NONE: 2,
    MOVE: 3,
    REMOVE: 4,
};
export const ActionResult = {
    SUCCESS: 0,
    CONFLICT: 1,
    REVERT: 2,
    ERR_ONLY_ONE_TURN: 3,
    ERR_ILLEGAL_AGENT: 4,
    ERR_ILLEGAL_ACTION: 5,
};
export const TileType = {
    AREA: 0,
    WALL: 1,
};
