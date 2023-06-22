import { createContext, useContext } from "react";

import { ConsolesContextType } from "./types";

export const ConsolesContext = createContext<ConsolesContextType>(
  {} as ConsolesContextType
);

export const useConsolesContext = () => useContext(ConsolesContext);
