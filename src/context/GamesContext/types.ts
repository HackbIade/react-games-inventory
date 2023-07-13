import { ConsoleFilter, GamesType } from "../../types";

export type GamesStateType = {
  search: string;
  userGameList: GamesType[];
  showAddGamesDrawer: boolean;
  userTotalGames: number | null;
  showFilterGamesDrawer: boolean;
  filteredUserGameList: GamesType[];
  consolesFilterApplied: ConsoleFilter[];
};

export type GamesContextType = {
  state: GamesStateType;
  setSearch: (payload: string) => void;
  setUserGamesList: (payload: GamesType[]) => void;
  setShowAddGamesDrawer: (payload: boolean) => void;
  setShowFilterGamesDrawer: (payload: boolean) => void;
  setFilteredUserGamesList: (payload: GamesType[]) => void;
  setConsolesFilterApplied: (payload: ConsoleFilter[]) => void;
};

export enum GAMES_ACTION_TYPES {
  SET_SEARCH = "SET_SEARCH",
  SET_USER_GAMES_LIST = "SET_USER_GAMES_LIST",
  SET_USER_TOTAL_GAMES = "SET_USER_TOTAL_GAMES",
  SET_FILTERED_USER_GAMES = "SET_FILTERED_USER_GAMES",
  SET_SHOW_ADD_GAMES_DRAWER = "SET_SHOW_ADD_GAMES_DRAWER",
  SET_SHOW_FILTER_GAMES_DRAWER = "SET_SHOW_FILTER_GAMES_DRAWER",
  SET_CONSOLES_FILTERS_APPLIED = "SET_CONSOLES_FILTERS_APPLIED",
}

export type GamesContextActionType = {
  payload: any;
  type: GAMES_ACTION_TYPES;
};

export type GamesStateProps = {
  initialState?: GamesStateType;
};
