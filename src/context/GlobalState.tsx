import React, { useReducer } from "react";

import { GamesType } from "../types";
import { GlobalContext } from "./GlobalContext";
import { globalReducer } from "./GlogalReducer";
import { APP_DEFAULT_INITIAL_STATE } from "./constants";
import { ACTION_TYPES, GlobalStateProps } from "./types";

export const GlobalState: React.FC<
  React.PropsWithChildren<GlobalStateProps>
> = ({ children, initialState = APP_DEFAULT_INITIAL_STATE }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const setUser = (payload: string) => {
    dispatch({ type: ACTION_TYPES.SET_USER, payload });
  };

  const setUserGamesList = (payload: GamesType[]) => {
    dispatch({ type: ACTION_TYPES.SET_USER_GAMES_LIST, payload });
  };

  const setFilteredUserGamesList = (payload: GamesType[]) => {
    dispatch({ type: ACTION_TYPES.SET_FILTERED_USER_GAMES, payload });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        setUser,
        setUserGamesList,
        setFilteredUserGamesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

/* @ts-ignore*/
export const useGlobalState = () => useContext(GlobalState);
