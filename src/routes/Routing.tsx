import { Route, Routes } from "react-router-dom";
import { path } from "./path";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Book from "../pages/Book";
import BookSearch from "../pages/BookSearch";
import Shelf from "../pages/Shelf";
const Routing = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.SIGNUP} element={<Signup />} />
      <Route path={path.BOOKSEARCH} element={<BookSearch />} />
      <Route path={path.BOOK} element={<Book />} />
      <Route path={path.SHELF} element={<Shelf />} />
    </Routes>
  );
};

export default Routing;
