import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  type: "button" | "reset" | "submit";
  className?: string;
  onClick?: () => void;
};

const Button = ({ className, children, type, onClick }: Props) => {
  return (
    <button
      className={`bg-orange-400 text-white p-2 rounded-md hover:bg-orange-500 
  focus:ring-1 focus:ring-offset-2  focus:ring-orange-500 focus:outline-none ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
