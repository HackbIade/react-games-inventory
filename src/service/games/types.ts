import { AlertColor } from "@mui/material";

export interface GamesType {
  addedToCollection?: Date;
  completionDate?: Date;
  cover?: string;
  digitalVersion?: boolean;
  name?: string;
  platform?: string;
  publisher?: string;
  startedPlayingDate?: Date;
  status?: string;
  tags?: string[];
}
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
