import { GamesType } from "../../../types";

export interface GameListProps {
  isError?: boolean;
  isLoading?: boolean;
  filteredUserGameList: GamesType[];
}
