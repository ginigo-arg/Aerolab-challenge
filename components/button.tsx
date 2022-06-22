import React from "react";

interface Button {
  text: string;
  onClick: () => void;
  className: string;
  value: number;
}

const Button = ({ text, onClick, className }): JSX.Element => (
  <>
    <button
      onClick={onClick}
      className={`${className} rounded-md bg-gray-300 focus:bg-gradient-to-r from-sky-500 to-indigo-500 text-gray-500 focus:text-white font-semibold`}
    >
      {text}
    </button>
  </>
);

export default Button;
