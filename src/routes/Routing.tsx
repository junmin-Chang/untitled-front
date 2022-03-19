import { Route, Routes } from "react-router-dom";
import { path } from "./path";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Home from "../pages/Home";
import Book from "../pages/Book/BookInfo";
import BookSearch from "../pages/Book/BookSearch";
import Shelf from "../pages/Shelf";
import Community from "../pages/Community/Community";
import Write from "../pages/Community/Write";
import CommunityInfo from "../pages/Community/CommunityInfo";
import MyPosts from "../pages/User/MyPosts";
import OtherUserPosts from "../pages/User/OtherUserPosts";
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
      <Route path={path.MY_POSTS} element={<MyPosts />} />
      <Route path={path.USER_POSTS} element={<OtherUserPosts />} />
    </Routes>
  );
};

export default Routing;
