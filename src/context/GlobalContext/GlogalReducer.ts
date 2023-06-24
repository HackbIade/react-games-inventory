import {
  ACTION_TYPES,
  GlobalStateType,
  GlobalContextActionType,
} from "./types";

export const globalReducer = (
  state: GlobalStateType,
  { type, payload }: GlobalContextActionType
): GlobalStateType => {
  switch (type) {
    case ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: payload,
      };
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return { ...state };
  }
};
