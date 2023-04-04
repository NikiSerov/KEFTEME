import axios from "axios";
import { LS_TOKEN_KEY } from "../constants/constants";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const authInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem(LS_TOKEN_KEY)}`;
  return config;
};

authInstance.interceptors.request.use(authInterceptor);

export { instance, authInstance };
