import {
  GamesStateType,
  GAMES_ACTION_TYPES,
  GamesContextActionType,
} from "./types";

export const gamesReducer = (
  state: GamesStateType,
  { type, payload }: GamesContextActionType
): GamesStateType => {
  switch (type) {
    case GAMES_ACTION_TYPES.SET_USER_GAMES_LIST:
      return {
        ...state,
        userGameList: payload,
      };
    case GAMES_ACTION_TYPES.SET_FILTERED_USER_GAMES:
      return {
        ...state,
        filteredUserGameList: payload,
      };
    case GAMES_ACTION_TYPES.SET_USER_TOTAL_GAMES:
      return {
        ...state,
        userTotalGames: payload,
      };
    case GAMES_ACTION_TYPES.SET_SHOW_ADD_GAMES_DRAWER:
      return {
        ...state,
        showAddGamesDrawer: payload,
      };
    case GAMES_ACTION_TYPES.SET_SHOW_FILTER_GAMES_DRAWER:
      return {
        ...state,
        showFilterGamesDrawer: payload,
      };
    case GAMES_ACTION_TYPES.SET_CONSOLES_FILTERS_APPLIED:
      return {
        ...state,
        consolesFilterApplied: payload,
      };
    case GAMES_ACTION_TYPES.SET_SEARCH:
      return {
        ...state,
        search: payload,
      }
    default:
      return { ...state };
  }
};
