import { GamesType } from "../../types";

export type useUserGamesResponse = {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
  filteredUserGameList: GamesType[];
};
