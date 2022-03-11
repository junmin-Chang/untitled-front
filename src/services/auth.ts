import axios from "axios";

const API_URL = "http://localhost:8000/api/auth";

const register = (userName: string, userId: string, password: string) => {
  return axios.post(API_URL + "/register", {
    userName,
    userId,
    password,
  });
};

const login = (userId: string, password: string) => {
  return axios
    .post(API_URL + "/login", {
      userId,
      password,
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
