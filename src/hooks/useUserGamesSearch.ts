import { useGamesContext } from "../context";

export const useUserGamesSearch = () => {
  const {
    state: {search, userGameList, consolesFilterApplied},
    setSearch,
    setUserTotalGames,
    setFilteredUserGamesList,
  } = useGamesContext();

  const handleChange = ({
    target: {value},
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
    const filteredConsolesToSearch = consolesFilterApplied
      .filter(({shown}) => shown === true)
      .map(({name}) => name);
    const currentFilteredUserGameList = userGameList?.filter(game => {
      return filteredConsolesToSearch.length > 0
        ? game.name?.toLowerCase()?.includes(value.toLowerCase()) &&
            filteredConsolesToSearch?.includes(game.platform)
        : game.name?.toLowerCase()?.includes(value.toLowerCase());
    });
    setUserTotalGames(currentFilteredUserGameList.length);
    setFilteredUserGamesList(currentFilteredUserGameList || []);
  };

  return {
    search,
    handleChange,
  };
};
