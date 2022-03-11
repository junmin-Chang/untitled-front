import { axiosPublicInstance, axiosPrivateInstance } from "../index";

const register = (userName: string, userId: string, password: string) => {
  return axiosPublicInstance.post("/auth/register", {
    userName,
    userId,
    password,
  });
};

const login = (userId: string, password: string) => {
  return axiosPublicInstance
    .post("/auth/login", {
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

const refresh = async (refreshToken: string) => {
  const res = await axiosPublicInstance.post("/auth/refresh", {
    token: refreshToken,
  });
  localStorage.setItem("user", JSON.stringify(res.data));
  return res.data;
};

const getProfile = async () => {
  const res = await axiosPrivateInstance.get("/auth/profile");

  return res.data;
};

const authService = {
  register,
  login,
  logout,
  refresh,
  getProfile,
};

export default authService;
