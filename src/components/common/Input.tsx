interface InputProps {
  onChange: () => void;
  className?: string;
  placeholder: string;
  type?: string;
}
const Input = ({ onChange, className, placeholder, type }: InputProps) => {
  const fixedClass = "border h-[50px] border-1 w-full pl-4";
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
