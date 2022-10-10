import { GamesType } from "../types";

export interface GlobalStateType {
  user: string | null;
  userGameList: GamesType[] | null;
}

export interface GlobalContextType {
  state: GlobalStateType;
  setUser: (payload: string) => void;
  setUserGamesList: (payload: GamesType[]) => void;
}

export enum ACTION_TYPES {
  SET_USER = "SET_USER",
  SET_USER_GAMES = "SET_USER_GAMES",
}

export interface GlobalContextActionType {
  payload: any;
  type: ACTION_TYPES;
}

export interface GlobalStateProps {
  initialState?: GlobalStateType;
}
