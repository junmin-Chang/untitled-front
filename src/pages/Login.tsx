import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthLayout from "../layouts/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcReadingEbook } from "react-icons/fc";
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
      window.location.reload();
    }
  }, [isLoggedIn, navigate]);
  return (
    <AuthLayout>
      <FcReadingEbook size={150} />
      <p className="text-4xl font-black">Bookers</p>
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
