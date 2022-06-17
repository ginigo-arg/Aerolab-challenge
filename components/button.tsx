import React from "react";

interface Button {
  text: string;
  onClick: () => void;
  className: string;
  svg?: "";
}

const Button = ({ text, onClick, className, svg }): JSX.Element => (
  <>
    <button
      onClick={onClick}
      className={`${className} rounded-md bg-gray-300 focus:bg-gradient-to-r from-sky-500 to-indigo-500 text-gray-500 focus:text-white font-semibold`}
    >
      {svg}
      {text}
    </button>
  </>
);

export default Button;
