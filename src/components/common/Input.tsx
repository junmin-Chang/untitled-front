import { ChangeEvent } from "react";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder: string;
  type?: string;
}
const Input = ({ onChange, className, placeholder, type }: InputProps) => {
  const fixedClass =
    "border h-[50px] border-1 w-full pl-4 focus:outline-4 outline-green-300";
  return (
    <input
      type={type}
      className={className ? className + fixedClass : fixedClass}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
