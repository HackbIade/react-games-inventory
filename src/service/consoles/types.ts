import { ConsolesType } from "../../types";

export type GetConsolesFromUserRequest = {
  user: string;
};

export type GetConsolesResponse = {
  result: ConsolesType[];
};
