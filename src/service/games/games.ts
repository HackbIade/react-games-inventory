import axios from "axios";
import { GetGamesRespoonse } from "./types";

export const getGames = async (): Promise<GetGamesRespoonse | null> => {
  let response: GetGamesRespoonse | null = null;
  try {
    const result = await axios.post<GetGamesRespoonse>(
      "https://us-central1-games-inventory.cloudfunctions.net/getGames",
      { data: null }
    );

    if (result?.data) {
      response = result.data;
    }
  } catch (error) {
    console.log("ups");
  } finally {
    return response;
  }
};
