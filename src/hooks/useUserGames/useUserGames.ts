import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getGamesService } from "../../service";
import { useGamesContext } from "../../context";
import { useUserGamesResponse } from "./types";
import { useGlobalContext } from "../../context";

export const useUserGames = (): useUserGamesResponse => {
  const {
    setUser,
    setLoading,
    state: { user },
  } = useGlobalContext();
  const {
    setUserGamesList,
    setFilteredUserGamesList,
    state: { filteredUserGameList, userTotalGames },
  } = useGamesContext();
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
    setLoading(isLoading);
  }, [isLoading]);
  

  useEffect(() => {
    if (!user) {
      const userByParams = searchParams.get("user") || "";
      setUser(userByParams);
    } else if (userTotalGames === null) {
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
