import { createContext, useContext } from "react";

import { GlobalContextType } from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const useGlobalContext = () => useContext(GlobalContext);
