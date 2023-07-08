export type GetUserFromUidRequest = {
  uid: string;
};

export type GetUserFromUidResponse = {
  result: {
    gameTag: string;
  };
};

export type SetUserToUIDRequest = {
  uid: string;
  gameTag: string;
  platform: string;
}