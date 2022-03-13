import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { getBooks } from "../features/book/bookSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return <div>Profile</div>;
};

export default Profile;
