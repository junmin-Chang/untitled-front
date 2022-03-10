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
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block align-top"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
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
