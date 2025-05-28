import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
    {...props}
    className={`px-4 py-2 rounded-md text-white bg-black hover:bg-orange-500 transition-colors duration-300 ${className}`}
  >
    {children}
  </button>
  );
};

export default Button;
