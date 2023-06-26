import { useEffect, useState } from "react";
import { useConsolesContext, useGlobalContext } from "../../context";
import { useUserConsolesResponse } from "./types";
import { useSearchParams } from "react-router-dom";
import { getConsolesFromUserService } from "../../service";

export const useUserConsoles = (): useUserConsolesResponse => {
  const {
    setGameTag: setUser,
    state: { gameTag: user },
  } = useGlobalContext();
  const {
    setUserConsolesList,
    setFilteredUserConsolesList,
    state: { filteredUserConsolesList, userConsolesList, userTotalConsoles },
  } = useConsolesContext();
  const [searchParams] = useSearchParams();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refetch = async () => {
    setIsError(false);
    setIsLoading(true);
    const response = await getConsolesFromUserService({ user });

    if (response === null) {
      setIsError(true);
    } else {
      setUserConsolesList(response.result);
      setFilteredUserConsolesList(response.result);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!user) {
      const userByParams = searchParams.get("user") || "";
      setUser(userByParams);
    } else if (userTotalConsoles === null) {
      refetch();
    }
  }, [user]);

  return {
    refetch,
    isError,
    isLoading,
    userConsolesList,
    filteredUserConsolesList,
  };
};
