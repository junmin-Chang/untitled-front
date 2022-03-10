const AuthLayout: React.FC = ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="bg-green-400 w-full h-60 flex justify-center">
        <div className="w-1/2 max-w-[500px] min-w-[350px] h-[600px] bg-white rounded-lg translate-y-16 px-12 shadow-2xl">
          <div className="w-full h-full flex flex-col justify-center items-center gap-[15px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
