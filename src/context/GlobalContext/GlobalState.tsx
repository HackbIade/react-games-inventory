import React, { useReducer } from "react";

import { globalReducer } from "./GlogalReducer";
import { GlobalContext } from "./GlobalContext";
import { GLOBAL_DEFAULT_INITIAL_STATE } from "./constants";
import { ACTION_TYPES, GlobalStateProps } from "./types";

export const GlobalState: React.FC<
  React.PropsWithChildren<GlobalStateProps>
> = ({ children, initialState = GLOBAL_DEFAULT_INITIAL_STATE }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const setGameTag = (payload: string) => {
    dispatch({ type: ACTION_TYPES.SET_GAME_TAG, payload });
  };

  const setLoading = (payload: boolean) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload })
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        setGameTag,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};