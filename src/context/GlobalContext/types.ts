export type GlobalStateType = {
  user: string;
  loading?: boolean;
};

export type GlobalContextType = {
  state: GlobalStateType;
  setUser: (payload: string) => void;
  setLoading: (payload: boolean) => void;
};

export enum ACTION_TYPES {
  SET_USER = "SET_USER",
  SET_LOADING = "SET_LOADING",
}

export type GlobalContextActionType = {
  payload: any;
  type: ACTION_TYPES;
};

export type GlobalStateProps = {
  initialState?: GlobalStateType;
};
