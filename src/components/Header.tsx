import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/auth/authSlice";
import Button from "./common/Button";
import { FcReadingEbook } from "react-icons/fc";

const Header = () => {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <header className="bg-white">
      <div className="flex px-5 py-4 border-b border-1 border-black[0.1] itmes-center justify-between">
        <Link to="/">
          <div className="flex flex-row">
            <FcReadingEbook size={30} />
            <h1 className="font-black text-xl leading-none inline-block align-top my-1.5 ml-2.5">
              Bookers
            </h1>
          </div>
        </Link>
        <div>
          {isLoggedIn ? (
            <div className="space-x-2.5">
              <span className="welcome">
                어서오세요,{" "}
                <b className="text-green-700">{user.user.userName} 님</b>!
              </span>
              <Link to="/profile">
                <Button
                  onClick={() => {}}
                  className="bg-green-200 text-black font-medium"
                >
                  서재
                </Button>
              </Link>
              <Link to="/book">
                <Button
                  onClick={() => {}}
                  className="bg-green-300 text-black font-medium"
                >
                  책 찾기
                </Button>
              </Link>
              <Button
                onClick={() => dispatch(logout())}
                className="bg-green-500 text-white font-medium"
              >
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="space-x-2.5">
              <Link to="/login">
                <Button
                  onClick={() => {}}
                  className="bg-green-500 text-white font-medium"
                >
                  로그인
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  onClick={() => {}}
                  className="text-black border font-medium"
                >
                  회원가입
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
