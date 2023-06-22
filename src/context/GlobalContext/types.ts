export type GlobalStateType = {
  user: string;
};

export type GlobalContextType = {
  state: GlobalStateType;
  setUser: (payload: string) => void;
};

export enum ACTION_TYPES {
  SET_USER = "SET_USER",
}

export type GlobalContextActionType = {
  payload: any;
  type: ACTION_TYPES;
};

export type GlobalStateProps = {
  initialState?: GlobalStateType;
};
