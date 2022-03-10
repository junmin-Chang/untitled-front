import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";

const Header = () => {
  const [user, setUser] = useState(false);
  return (
    <header className="bg-white">
      <div className="flex px-5 py-4 border-b border-1 border-black[0.1] itmes-center justify-between">
        <Link to="/">
          <div>
            <svg
              className="inline-block align-top"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                  fill="#FFF"
                />
                <path
                  d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                  fill="#555AB9"
                />
                <path
                  d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                  fill="#91BAF8"
                />
              </g>
            </svg>
            <h1 className="font-black text-xl leading-none inline-block align-top my-1.5 ml-2.5">
              Untitled
            </h1>
          </div>
        </Link>
        <div>
          {user ? (
            <div className="space-x-2.5">
              <span className="welcome">
                어서오세요, <b className="text-green-700">준민 님</b>!
              </span>
              <Button
                onClick={() => setUser(false)}
                className="bg-green-500 text-white font-medium"
              >
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="space-x-2.5">
              <Link to="/login">
                <Button
                  onClick={() => setUser(true)}
                  className="bg-green-500 text-white font-medium"
                >
                  로그인
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  onClick={() => setUser(false)}
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
