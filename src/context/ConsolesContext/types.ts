import { ConsolesType } from "../../types";

export type ConsolesStateType = {
  showAddConsolesDrawer: boolean;
  userConsolesList: ConsolesType[];
  userTotalConsoles: number | null;
  showFilterConsolesDrawer: boolean;
  filteredUserConsolesList: ConsolesType[];
};

export type ConsolesContextType = {
  state: ConsolesStateType;
  setUserConsolesList: (payload: ConsolesType[]) => void;
  setShowAddConsolesDrawer: (payload: boolean) => void;
  setShowFilterConsolesDrawer: (payload: boolean) => void;
  setFilteredUserConsolesList: (payload: ConsolesType[]) => void;
};

export enum CONSOLES_ACTION_TYPES {
  SET_USER_CONSOLES_LIST = "SET_USER_CONSOLES_LIST",
  SET_USER_TOTAL_CONSOLES = "SET_USER_TOTAL_CONSOLES",
  SET_FILTERED_USER_CONSOLES = "SET_FILTERED_USER_CONSOLES",
  SET_SHOW_ADD_CONSOLES_DRAWER = "SET_SHOW_ADD_CONSOLES_DRAWER",
  SET_SHOW_FILTER_CONSOLES_DRAWER = "SET_SHOW_FILTER_CONSOLES_DRAWER",
}

export type ConsolesContextActionType = {
  payload: any;
  type: CONSOLES_ACTION_TYPES;
};

export type ConsolesStateProps = {
  initialState?: ConsolesStateType;
};
