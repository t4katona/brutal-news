import React from "react";
import { ButtonProps } from "../../types/Button.types";
import { Search } from "lucide-react";
import { MoveUpRight } from "lucide-react";

export const Button: React.FC<ButtonProps> = ({
  variant,
  text,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-fit flex justify-center items-center text-white border-2 rounded-none border-border text-center no-underline cursor-pointer hover:border-b-5 hover:border-r-5 transition-all duration-100 ease-in-out ${
        variant === "search"
          ? " bg-black hover:bg-primary-accent p-3 hover:p-[0.655rem] min-h-[40px]"
          : " bg-primary-accent p-1 gap-x-2"
      }`}
    >
      {variant === "search" && <Search color="white" size={16} />}
      {text && (
        <>
          {text} <MoveUpRight />
        </>
      )}
    </button>
  );
};
