import { AxiosError } from "axios";
import { axiosPrivateInstance } from ".";
import { refreshToken } from "../features/auth/authSlice";

export const setUpInterceptor = (store: any) => {
  axiosPrivateInstance.interceptors.response.use(
    (response) => response,
    async (err: AxiosError) => {
      if (err.response?.status !== 401) {
        return Promise.reject(err);
      }
      axiosPrivateInstance.interceptors.response.eject(0);
      await store.dispatch(refreshToken());
      if (err.config.headers) {
        err.config.headers["authorization"] = `Bearer ${
          store.getState().auth.user.accessToken
        }`;
        return axiosPrivateInstance(err.response.config);
      } else {
        Promise.reject(err.message);
      }
    }
  );
};
