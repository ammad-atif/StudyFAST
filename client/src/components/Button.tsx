import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "danger";
}

export const Button = ({ color, ...props }: ButtonProps) => {
  return (
    <button
      className={
        color == "primary"
          ? "w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#1e293b] transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
          : color == "secondary"
            ? "w-full bg-[#f1f5f9] text-primary font-bold py-4 rounded-xl hover:bg-border-subtle transition-all border border-transparent active:scale-[0.98] cursor-pointer"
            : ""
      }
      {...props}
    >
      {props.children}
    </button>
  );
};
