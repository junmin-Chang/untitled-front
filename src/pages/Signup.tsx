import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import AuthLayout from "../layouts/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { register } from "../features/auth/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FcReadingEbook } from "react-icons/fc";
import { toast } from "react-toastify";
type Inputs = {
  userName: string;
  userId: string;
  password: string;
  passwordMatch: string;
};
const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const registerSchema = Yup.object().shape({
    userName: Yup.string()
      .required("닉네임을 입력해주세요")
      .min(3, "닉네임은 최소 3글자 입니다."),
    userId: Yup.string().required("아이디를 입력해주세요"),
    password: Yup.string()
      .required("비밀번호를 입력해주세요")
      .min(8, "비밀번호는 최소 8자리 입니다."),
    passwordMatch: Yup.string()
      .required("비밀번호를 재입력 해주세요.")
      .oneOf([Yup.ref("password")], "패스워드가 일치하지 않습니다."),
  });
  const validationOption = { resolver: yupResolver(registerSchema) };
  const {
    register: bind,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(validationOption);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(register(data))
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((message) =>
        toast.error(message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
      );
  };
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  if (isLoggedIn) return <Navigate to="/" />;
  return (
    <AuthLayout>
      <FcReadingEbook size={150} />
      <p className="text-4xl font-black">Bookers</p>
      <p className="text-2xl font-medium">회원가입</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full items-center"
      >
        <input
          className="border h-[50px] border-1 w-full pl-4 focus:outline-4 outline-green-300"
          type="text"
          placeholder="닉네임"
          {...bind("userName")}
        />
        {errors.userName && (
          <span className="text-red-600 font-lg">
            {errors.userName.message}
          </span>
        )}

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
          className="border h-[50px] border-1 w-full pl-4 focus:outline-4 outline-green-300"
          type="password"
          placeholder="비밀번호 재확인"
          {...bind("passwordMatch")}
        />
        {errors.passwordMatch && (
          <span className="text-red-600 font-lg">
            {errors.passwordMatch.message}
          </span>
        )}

        <input
          type="submit"
          value="회원가입"
          className="bg-green-400 text-white font-lg text-lg h-[50px] w-[200px] cursor-pointer"
        />
      </form>
    </AuthLayout>
  );
};

export default Signup;
