import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { GamesType } from "../types";
import { getGamesService } from "../service";
import { useGlobalContext } from "../context";

interface userUserGamesResponse {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
  filteredUserGameList: GamesType[];
}

export const useUserGames = (): userUserGamesResponse => {
  const {
    setUser,
    setUserGamesList,
    setFilteredUserGamesList,
    state: { user, userGameList, filteredUserGameList },
  } = useGlobalContext();
  const [searchParams] = useSearchParams();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refetch = async () => {
    setIsError(false);
    setIsLoading(true);
    const response = await getGamesService({ user });

    if (response === null) {
      setIsError(true);
    } else {
      setUserGamesList(response.result);
      setFilteredUserGamesList(response.result);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!user) {
      const userByParams = searchParams.get("user") || "";
      setUser(userByParams);
    } else if (userGameList === undefined) {
      refetch();
    }
  }, [user]);

  return {
    refetch,
    isError,
    isLoading,
    filteredUserGameList,
  };
};
