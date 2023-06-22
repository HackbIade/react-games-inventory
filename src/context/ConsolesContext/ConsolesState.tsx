import React, { useReducer } from "react";

import { ConsolesType } from "../../types";
import { consolesReducer } from "./ConsolesReducer";
import { ConsolesContext } from "./ConsolesContext";
import { CONSOLES_DEFAULT_INITIAL_STATE } from "./constants";
import { CONSOLES_ACTION_TYPES, ConsolesStateProps } from "./types";

export const ConsolesState: React.FC<
  React.PropsWithChildren<ConsolesStateProps>
> = ({ children, initialState = CONSOLES_DEFAULT_INITIAL_STATE }) => {
  const [state, dispatch] = useReducer(consolesReducer, initialState);

  const setUserConsolesList = (payload: ConsolesType[]) => {
    dispatch({ type: CONSOLES_ACTION_TYPES.SET_USER_CONSOLES_LIST, payload });
    (payload.length);
    setUserTotalConsoles(payload.length);
    setFilteredUserConsolesList(payload);
  };

  const setFilteredUserConsolesList = (payload: ConsolesType[]) => {
    dispatch({ type: CONSOLES_ACTION_TYPES.SET_FILTERED_USER_CONSOLES, payload });
  };

  const setUserTotalConsoles = (payload: number) => {
    dispatch({ type: CONSOLES_ACTION_TYPES.SET_USER_TOTAL_CONSOLES, payload });
  };

  const setShowAddConsolesDrawer = (payload: boolean) => {
    dispatch({ type: CONSOLES_ACTION_TYPES.SET_SHOW_ADD_CONSOLES_DRAWER, payload })
  }

  const setShowFilterConsolesDrawer = (payload: boolean) => {
    dispatch({ type: CONSOLES_ACTION_TYPES.SET_SHOW_FILTER_CONSOLES_DRAWER, payload })
  }

  return (
    <ConsolesContext.Provider
      value={{
        state,
        setUserConsolesList,
        setShowAddConsolesDrawer,
        setFilteredUserConsolesList,
        setShowFilterConsolesDrawer,
      }}
    >
      {children}
    </ConsolesContext.Provider>
  );
};