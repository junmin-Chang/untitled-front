import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthLayout from "../layouts/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
type Inputs = {
  userId: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const loginSchema = Yup.object().shape({
    userId: Yup.string().required("아이디를 입력해주세요"),
    password: Yup.string().required("패스워드를 입력해주세요"),
  });
  const validationOption = { resolver: yupResolver(loginSchema) };
  const {
    register: bind,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(validationOption);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(login(data)).unwrap();
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  return (
    <AuthLayout>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-4xl font-black">Untitled</p>
      <p className="text-2xl font-medium">로그인</p>
      <form
        className="flex flex-col space-y-4 w-full items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border h-[50px] border-1 w-full pl-4 focus:outline-4 outline-green-300"
          type="text"
          placeholder="아이디"
          {...bind("userId")}
        />
        {errors.userId && (
          <span className="text-red-600 font-lg">{errors.userId.message}</span>
        )}
        <input
          className="border h-[50px] border-1 w-full pl-4 focus:outline-4 outline-green-300"
          type="password"
          placeholder="비밀번호"
          {...bind("password")}
        />
        {errors.password && (
          <span className="text-red-600 font-lg">
            {errors.password.message}
          </span>
        )}
        <input
          type="submit"
          value="로그인"
          className="bg-green-400 text-white font-lg text-lg h-[50px] w-[200px] cursor-pointer"
        />
      </form>
    </AuthLayout>
  );
};

export default Login;
