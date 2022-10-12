import { useState } from "react";
import { useGlobalContext } from "../context";

export const useUserGamesSearch = () => {
  const {
    state: { userGameList },
    setFilteredUserGamesList,
  } = useGlobalContext();
  const [search, setSearch] = useState("");

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);

    const currentFilteredUserGameList = userGameList?.filter(
      (game) =>
        game.name?.toLowerCase()?.includes(value.toLowerCase()) ||
        game.platform?.toLowerCase()?.includes(value.toLowerCase())
    );

    setFilteredUserGamesList(currentFilteredUserGameList || []);
  };

  return {
    search,
    handleChange,
  };
};
