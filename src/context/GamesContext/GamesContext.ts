import { createContext, useContext } from "react";

import { GamesContextType } from "./types";

export const GamesContext = createContext<GamesContextType>(
  {} as GamesContextType
);

export const useGamesContext = () => useContext(GamesContext);
