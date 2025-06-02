import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const baseStyles =
  "px-8 py-2 rounded-xl font-normal transition-all duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed text-center w-full max-w-xs";

const variants = {
  primary: "bg-black text-white hover:bg-gray-900",
  secondary: "bg-white text-black border border-black hover:bg-gray-100",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "secondary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
