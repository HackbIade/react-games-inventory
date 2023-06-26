import { createContext, useContext } from "react";
import { AuthContextModel, UserContextState } from "./types";

export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel
);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};
