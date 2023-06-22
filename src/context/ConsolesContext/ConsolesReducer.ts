import {
  ConsolesStateType,
  CONSOLES_ACTION_TYPES,
  ConsolesContextActionType,
} from "./types";

export const consolesReducer = (
  state: ConsolesStateType,
  { type, payload }: ConsolesContextActionType
): ConsolesStateType => {
  switch (type) {
    case CONSOLES_ACTION_TYPES.SET_USER_CONSOLES_LIST:
      return {
        ...state,
        userConsolesList: payload,
      };
    case CONSOLES_ACTION_TYPES.SET_FILTERED_USER_CONSOLES:
      return {
        ...state,
        filteredUserConsolesList: payload,
      };
    case CONSOLES_ACTION_TYPES.SET_USER_TOTAL_CONSOLES:
      return {
        ...state,
        userTotalConsoles: payload,
      };
    case CONSOLES_ACTION_TYPES.SET_SHOW_ADD_CONSOLES_DRAWER:
      return {
        ...state,
        showAddConsolesDrawer: payload,
      };
    case CONSOLES_ACTION_TYPES.SET_SHOW_FILTER_CONSOLES_DRAWER:
      return {
        ...state,
        showFilterConsolesDrawer: payload,
      };
    default:
      return { ...state };
  }
};
