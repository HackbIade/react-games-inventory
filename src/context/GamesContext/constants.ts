import { GamesStateType } from "../GamesContext";

export const GAMES_DEFAULT_INITIAL_STATE: GamesStateType = {
  userGameList: [],
  userTotalGames: null,
  filteredUserGameList: [],
  showAddGamesDrawer: false,
  consolesFilterApplied: [],
  showFilterGamesDrawer: false,
};
