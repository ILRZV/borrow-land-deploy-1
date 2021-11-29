import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "http://192.168.8.39.:/api",
  timeout: 5000,
  responseType: "json",
});
