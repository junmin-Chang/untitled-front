import { Route, Routes } from "react-router-dom";
import { path } from "./path";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
const Routing = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.SIGNUP} element={<Signup />} />
    </Routes>
  );
};

export default Routing;
