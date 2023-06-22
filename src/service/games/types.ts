import { AlertColor } from "@mui/material";

import { GamesType } from "../../types";

export type GetGamesResponse = {
  result: GamesType[];
};

export type GetGamesRequest = {
  user: string;
};

export type AddGamesResponse = {
  result: {
    message: string;
    status: AlertColor;
  };
};

export type AddGamesRequest = {
  user: string;
  userCode: string;
  games: GamesType[];
};
