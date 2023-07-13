export type GamesType = {
  name: string;
  cover?: string;
  tags?: string[];
  status?: string;
  platform: string;
  developer?: string;
  publisher?: string;
  completionDate?: Date;
  isLimitedRun?: boolean;
  digitalVersion?: boolean;
  startedPlayingDate?: Date;
  addedToCollection?: string;
  trandingGameCard?: boolean;
};


export type ConsoleFilter = {
  name: string;
  shown: boolean;
};