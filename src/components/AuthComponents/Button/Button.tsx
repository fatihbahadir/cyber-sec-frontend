import React, { MouseEvent } from "react";

type ButtonParams = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void,
    loading: boolean,
    text: string
}
const Button = ({ onClick, loading, text } : ButtonParams) => {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        disabled={loading}
        className="w-full text-sm sm:text-base py-[6px] sm:py-2 text-black bg-fontColor rounded-[35px] hover:bg-white font-semiregular focus:outline-none transition-all disabled:opacity-50"      >
        {loading ? "Loading ..." : text}
      </button>
    </div>
  );
};

export default Button;