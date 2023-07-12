import { useGamesContext } from "../context";

export const useUserGamesSearch = () => {
  const {
    state: {
      search,
      userGameList,
      consolesFilterApplied,
    },
    setSearch,
    setFilteredUserGamesList,
  } = useGamesContext();

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
    const filteredConsolesToSearch = consolesFilterApplied
      .filter(({ shown }) => shown === true)
      .map(({ name }) => name);
    const currentFilteredUserGameList = userGameList?.filter(
      (game) =>
        game.name?.toLowerCase()?.includes(value.toLowerCase()) &&
        filteredConsolesToSearch.includes(game.platform)
    );
    setFilteredUserGamesList(currentFilteredUserGameList || []);
  };

  return {
    search,
    handleChange,
  };
};
