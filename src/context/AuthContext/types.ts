import { Auth, User, UserCredential } from "firebase/auth";
import { ReactNode } from "react";

export type AuthProviderProps = {
  children?: ReactNode;
};

export type UserContextState = {
  id?: string;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export type AuthContextModel = {
  auth: Auth;
  user: User | null;
  updateUserProfile?: ({
    photoURL,
    displayName,
  }: {
    photoURL?: string | null | undefined;
    displayName?: string | null | undefined;
  }) => Promise<void> | undefined;
  signOutUser: () => Promise<void>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
};
