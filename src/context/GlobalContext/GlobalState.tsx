import React, { useReducer } from "react";

import { globalReducer } from "./GlogalReducer";
import { GLOBAL_DEFAULT_INITIAL_STATE } from "./constants";
import { ACTION_TYPES, GlobalStateProps } from "./types";
import { GlobalContext } from "./GlobalContext";

export const GlobalState: React.FC<
  React.PropsWithChildren<GlobalStateProps>
> = ({ children, initialState = GLOBAL_DEFAULT_INITIAL_STATE }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const setUser = (payload: string) => {
    dispatch({ type: ACTION_TYPES.SET_USER, payload });
  };

  const setLoading = (payload: boolean) => {
    dispatch({ type: ACTION_TYPES.SET_LOADING, payload })
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        setUser,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};