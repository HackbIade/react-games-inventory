import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useGamesContext } from "../../context";
import { useUserGamesResponse } from "./types";
import { useGlobalContext } from "../../context";
import { getGamesService } from "../../service";
import { GetGamesResponse } from "../../service/games/types";

export const useUserGames = (): useUserGamesResponse => {
  const {
    setLoading,
    setGameTag,
    state: { gameTag },
  } = useGlobalContext();
  const {
    setUserGamesList,
    setFilteredUserGamesList,
    state: { filteredUserGameList, userTotalGames },
  } = useGamesContext();
  const [searchParams] = useSearchParams();
  const gameTagByParam = searchParams.get("gameTag") || "";
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refetch = async () => {
    setIsError(false);
    setIsLoading(true);
    let response: GetGamesResponse | null = null;
    if (gameTag) {
      response = await getGamesService({
        user: gameTag,
      });
    }
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
    if (!gameTag) {
      setGameTag(gameTagByParam);
    } else if (userTotalGames === null) {
      refetch();
    }
  }, [gameTag]);

  return {
    refetch,
    isError,
    isLoading,
    filteredUserGameList,
  };
};
