import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getProfile } from "../features/auth/authSlice";

const Home = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile()).unwrap();
    }
  }, []);
  return <div>HOME</div>;
};

export default Home;
