import axios from "axios";
import { GetConsolesFromUserRequest, GetConsolesResponse } from "./types";

export const getConsolesFromUserService = async ({
  user,
}: GetConsolesFromUserRequest): Promise<GetConsolesResponse | null> => {
  let response: GetConsolesResponse | null = null;
  try {
    const result = await axios.post<GetConsolesResponse>(
      `${import.meta.env.VITE_MICROSERVICE_URL}/getConsolesFromUser`,
      {
        data: {
          user,
        },
      }
    );
    if (result?.data) {
      response = result.data;
    }
  } catch (_error) {
  } finally {
    return response;
  }
};
