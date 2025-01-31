import axios, { InternalAxiosRequestConfig } from "axios";
import store from "@/store";

const baseAxiosInstanceConfig = {
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
};

const authenticatedAxiosInstance = axios.create(baseAxiosInstanceConfig);

const unauthenticatedAxiosInstance = axios.create(baseAxiosInstanceConfig);

const setAuthorizationHeader = (config: InternalAxiosRequestConfig) => {
  const token = store.getters.authToken;
  if (token && !config.headers?.Authorization) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

authenticatedAxiosInstance.interceptors.request.use(
  (config) => {
    return setAuthorizationHeader(config);
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { authenticatedAxiosInstance, unauthenticatedAxiosInstance };
