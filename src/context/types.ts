import { GamesType } from "../types";

export interface GlobalStateType {
  user: string;
  userTotalGames?: number;
  userGameList?: GamesType[];
  filteredUserGameList: GamesType[];
}

export interface GlobalContextType {
  state: GlobalStateType;
  setUser: (payload: string) => void;
  setUserGamesList: (payload: GamesType[]) => void;
  setFilteredUserGamesList: (payload: GamesType[]) => void;
}

export enum ACTION_TYPES {
  SET_USER = "SET_USER",
  SET_USER_GAMES_LIST = "SET_USER_GAMES_LIST",
  SET_USER_TOTAL_GAMES = "SET_USER_TOTAL_GAMES",
  SET_FILTERED_USER_GAMES = "SET_FILTERED_USER_GAMES",
}

export interface GlobalContextActionType {
  payload: any;
  type: ACTION_TYPES;
}

export interface GlobalStateProps {
  initialState?: GlobalStateType;
}
