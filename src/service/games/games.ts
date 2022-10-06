import axios from "axios";
import { AddGameResponse, GamesType, GetGamesRespoonse } from "./types";

export const getGamesService = async (): Promise<GetGamesRespoonse | null> => {
  let response: GetGamesRespoonse | null = null;
  try {
    const result = await axios.post<GetGamesRespoonse>(
      `${process.env.REACT_APP_MICROSERVICE_URL}/getGames`,
      {
        data: null,
      }
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

export const addGamesService = async (
  data: Omit<GamesType, "id">
): Promise<AddGameResponse> => {
  let response: AddGameResponse = {
    result: {
      data: { id: "" },
      message: "Failed",
    },
  };
  try {
    const result = await axios.post<AddGameResponse>(
      `${process.env.REACT_APP_MICROSERVICE_URL}/addGame`,
      { data }
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
