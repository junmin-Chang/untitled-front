import axios from "axios";
import authHeader from "./auth/auth-header";

export const axiosPublicInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});
export const axiosPrivateInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: authHeader() as { authorization: string },
});
