import { AlertColor } from "@mui/material";

import { GamesType } from "../../types";

export interface GetGamesResponse {
  result: GamesType[];
}

export interface GetGamesRequest {
  user: string;
}

export interface AddGamesResponse {
  result: {
    message: string;
    status: AlertColor;
  };
}

export interface AddGamesRequest {
  user: string;
  userCode: string;
  games: GamesType[];
}
