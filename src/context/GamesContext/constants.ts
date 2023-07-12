import { GamesStateType } from "../GamesContext";

export const GAMES_DEFAULT_INITIAL_STATE: GamesStateType = {
  search: '',
  userGameList: [],
  userTotalGames: null,
  filteredUserGameList: [],
  showAddGamesDrawer: false,
  consolesFilterApplied: [],
  showFilterGamesDrawer: false,
};
