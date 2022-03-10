import Button from "../components/common/Button";
import Input from "../components/common/Input";

const Login = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-green-400 w-full h-60 flex justify-center">
        <div className="w-1/2 max-w-[500px] min-w-[350px] h-[600px] bg-white rounded-lg translate-y-16 px-12 shadow-2xl">
          <div className="w-full h-full flex flex-col justify-center items-center gap-[15px]">
            <Input type="text" onChange={() => {}} placeholder="아이디" />
            <Input type="password" onChange={() => {}} placeholder="비밀번호" />
            <Button
              className="bg-green-400 text-white font-medium h-[50px] w-[200px]"
              onClick={() => {}}
            >
              로그인
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
