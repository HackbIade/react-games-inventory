import {
  ACTION_TYPES,
  GlobalStateType,
  GlobalContextActionType,
} from "./types";

export const globalReducer = (
  state: GlobalStateType,
  { type, payload }: GlobalContextActionType
): GlobalStateType => {
  switch (type) {
    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: payload,
      };
    case ACTION_TYPES.SET_USER_GAMES_LIST:
      return {
        ...state,
        userGameList: payload,
      };
    case ACTION_TYPES.SET_FILTERED_USER_GAMES:
      return {
        ...state,
        filteredUserGameList: payload,
      };
    case ACTION_TYPES.SET_USER_TOTAL_GAMES:
      return {
        ...state,
        userTotalGames: payload,
      };
    default:
      return { ...state };
  }
};
