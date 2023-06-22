import { ConsolesType } from "../../types";

export type useUserConsolesResponse = {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
  userConsolesList?: ConsolesType[];
  filteredUserConsolesList: ConsolesType[];
};
