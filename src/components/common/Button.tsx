import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      className={
        className
          ? className +
            " text-sm leading-none cursor-pointer inline-block rounded-3xl py-2.5 px-4"
          : "text-sm leading-none cursor-pointer inline-block rounded-3xl py-2.5 px-4"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
