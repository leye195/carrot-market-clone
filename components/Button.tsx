import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  type: "button" | "reset" | "submit";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ className, children, type, onClick, disabled }: Props) => {
  return (
    <button
      className={`bg-orange-400 text-white p-2 rounded-md hover:bg-orange-500 
  focus:ring-1 focus:ring-offset-2  focus:ring-orange-500 focus:outline-none disabled:bg-orange-200  ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
