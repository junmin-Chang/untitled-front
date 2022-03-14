import axios, { AxiosError } from "axios";
import jwtDecode from "jwt-decode";
import { refreshToken } from "../features/auth/authSlice";
import authHeader from "./auth/auth-header";

export const axiosPublicInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});
export const axiosPrivateInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: authHeader() as { authorization: string },
});

export const setUpInterceptor = (store: any) => {
  axiosPrivateInstance.interceptors.request.use(
    async (config) => {
      const user = store.getState().auth.user;
      if (user?.accessToken) {
        const decodedToken: { exp: number } = jwtDecode(user.accessToken);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          await store.dispatch(refreshToken());
          if (config.headers) {
            config.headers.authorization = `Bearer ${
              store.getState().auth.user.accessToken
            }`;
          }
        }
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
};
