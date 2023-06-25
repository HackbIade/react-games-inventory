export type GlobalStateType = {
  gameTag: string;
  loading?: boolean;
};

export type GlobalContextType = {
  state: GlobalStateType;
  setGameTag: (payload: string) => void;
  setLoading: (payload: boolean) => void;
};

export enum ACTION_TYPES {
  SET_LOADING = "SET_LOADING",
  SET_GAME_TAG = "SET_GAME_TAG",
}

export type GlobalContextActionType = {
  payload: any;
  type: ACTION_TYPES;
};

export type GlobalStateProps = {
  initialState?: GlobalStateType;
};
