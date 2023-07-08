import axios from "axios";
import { GetUserFromUidRequest, GetUserFromUidResponse, SetUserToUIDRequest } from "./types";

export const getUserFromUidService = async ({
  uid,
}: GetUserFromUidRequest): Promise<GetUserFromUidResponse | null> => {
  let response: GetUserFromUidResponse | null = null;
  try {
    const result = await axios.post<GetUserFromUidResponse>(
      `${import.meta.env.VITE_MICROSERVICE_URL}/getUserFromUid`,
      {
        data: {
          uid,
        },
      }
    );

    if (result?.data) {
      response = result.data;
    }
  } catch (_) {
  } finally {
    return response;
  }
};


export const setUserToUIDService = async ({
  uid,
  gameTag,
  platform,
}: SetUserToUIDRequest) => {
  let response = null;
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_MICROSERVICE_URL}/setUserToUID`,
      {
        data: {
          uid,
          gameTag,
          platform,
        }
      }
    )

    if (result?.data) {
      response = result.data;
    }
  } catch (_) {
    
  }finally{
    return response
  }
}