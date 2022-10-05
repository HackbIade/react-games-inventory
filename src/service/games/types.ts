export interface GetGamesRespoonse {
  result: {
    list: GamesType[];
  };
}

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
  id: string;
}
