import { ArrowRight } from "lucide-react";
import React from "react";

const Button = ({ name, onClick, py, px, font }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2 text-white font-${font} ${px} ${py} rounded-md text-base transition-all duration-300 shadow-sm shadow-[#0B409C] bg-[#0B409C] hover:bg-[#032e78] hover:shadow-emerald-300 group`}
      >
        {name}
        <ArrowRight
          size={16}
          className="text-white group-hover:-rotate-45 transition-all duration-300 ease-out"
        />
      </button>
    </>
  );
};

export default Button;
