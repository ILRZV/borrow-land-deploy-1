import { AxiosInstance } from "./AxiosInstance";
import { URL } from "./urlConsts";

export const registration = async (credentials) => {
  try {
    const { data: response } = await AxiosInstance.post(
      URL.REGISTER,
      credentials
    );
    return response;
  } catch (error) {
    return error.data;
  }
};
