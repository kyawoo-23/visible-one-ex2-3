import axios, { AxiosError, AxiosResponse } from "axios";

// Create an instance of Axios with default configuration
export const MusicAPI = axios.create({
  baseURL: "https://www.theaudiodb.com/api/v1/json/2/",
  headers: {
    "Content-Type": "application/json",
  },
});

MusicAPI.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

MusicAPI.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log("Success:", response);
    return response;
  },
  (error: AxiosError) => {
    // console.log("Error: ", error);
    return Promise.reject(error);
  }
);
