import React, { useEffect, useReducer } from "react";

import { ConsoleFilter, GamesType } from "../../types";
import { gamesReducer } from "./GamesReducer";
import { GamesContext } from "./GamesContext";
import { GAMES_DEFAULT_INITIAL_STATE } from "./constants";
import { GAMES_ACTION_TYPES, GamesStateProps } from "./types";

export const GamesState: React.FC<
  React.PropsWithChildren<GamesStateProps>
> = ({ children, initialState = GAMES_DEFAULT_INITIAL_STATE }) => {
  const [state, dispatch] = useReducer(gamesReducer, initialState);

  const setUserGamesList = (payload: GamesType[]) => {
    dispatch({ type: GAMES_ACTION_TYPES.SET_USER_GAMES_LIST, payload });
    setUserTotalGames(payload.length);
    setFilteredUserGamesList(payload);
  };

  const setFilteredUserGamesList = (payload: GamesType[]) => {
    dispatch({ type: GAMES_ACTION_TYPES.SET_FILTERED_USER_GAMES, payload });
  };

  const setUserTotalGames = (payload: number) => {
    dispatch({ type: GAMES_ACTION_TYPES.SET_USER_TOTAL_GAMES, payload });
  };

  const setShowAddGamesDrawer = (payload: boolean) => {
    dispatch({ type: GAMES_ACTION_TYPES.SET_SHOW_ADD_GAMES_DRAWER, payload })
  };

  const setShowFilterGamesDrawer = (payload: boolean) => {
    dispatch({ type: GAMES_ACTION_TYPES.SET_SHOW_FILTER_GAMES_DRAWER, payload })
  };

  const setConsolesFilterApplied = (payload: ConsoleFilter[]) => {
    dispatch({ type: GAMES_ACTION_TYPES.SET_CONSOLES_FILTERS_APPLIED, payload })
  }

  const setSearch = (payload: string) => {
    dispatch({ type: GAMES_ACTION_TYPES.SET_SEARCH, payload })
  }

  useEffect(() => {
    if (state.consolesFilterApplied?.length > 0) {
      const newFilteredUserGames = state.userGameList.filter(({ platform }) =>
        state.consolesFilterApplied.find(({ name }) => platform == name)?.shown === true)
        setUserTotalGames(newFilteredUserGames.length);
      dispatch({ type: GAMES_ACTION_TYPES.SET_FILTERED_USER_GAMES, payload: newFilteredUserGames })
    }
  }, [state.consolesFilterApplied])



  return (
    <GamesContext.Provider
      value={{
        state,
        setSearch,
        setUserGamesList,
        setUserTotalGames,
        setShowAddGamesDrawer,
        setShowFilterGamesDrawer,
        setFilteredUserGamesList,
        setConsolesFilterApplied,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};