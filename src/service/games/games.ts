import axios from "axios";
import {
  GetGamesRequest,
  AddGamesRequest,
  GetGamesResponse,
  AddGamesResponse,
} from "./types";

export const getGamesService = async ({
  user,
}: GetGamesRequest): Promise<GetGamesResponse | null> => {
  let response: GetGamesResponse | null = null;
  try {
    const result = await axios.post<GetGamesResponse>(
      `${import.meta.env.VITE_MICROSERVICE_URL}/getGamesFromUser`,
      {
        data: {
          user,
        },
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
  data: AddGamesRequest
): Promise<AddGamesResponse> => {
  let response: AddGamesResponse = {
    result: {
      status: "Failed",
      message: "Failed",
    },
  };
  try {
    const result = await axios.post<AddGamesResponse>(
      `${import.meta.env.VITE_MICROSERVICE_URL}/addGamesToUser`,
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
