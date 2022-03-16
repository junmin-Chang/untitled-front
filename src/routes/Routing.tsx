import { Route, Routes } from "react-router-dom";
import { path } from "./path";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Book from "../pages/BookInfo";
import BookSearch from "../pages/BookSearch";
import Shelf from "../pages/Shelf";
import Community from "../pages/Community";
import Write from "../pages/Write";
import CommunityInfo from "../pages/CommunityInfo";
const Routing = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.SIGNUP} element={<Signup />} />
      <Route path={path.BOOKSEARCH} element={<BookSearch />} />
      <Route path={path.BOOK} element={<Book />} />
      <Route path={`${path.SHELF}/:sortBy`} element={<Shelf />} />
      <Route path={path.COMMUNITY} element={<Community />} />
      <Route path={path.COMMUNITY_INFO} element={<CommunityInfo />} />
      <Route path={path.COMMUNITY_SEARCH_BOOK} element={<Community />} />
      <Route path={path.WRITE} element={<Write />} />
    </Routes>
  );
};

export default Routing;
