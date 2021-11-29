import { AxiosInstance } from "./AxiosInstance";
import { URL } from "./urlConsts";

export const logIn = async (credentials) => {
  try {
    const { data: response } = await AxiosInstance.post(
      URL.LOGIN,
      credentials
    );
    return response;
  } catch (error) {
    return error.data;
  }
};
