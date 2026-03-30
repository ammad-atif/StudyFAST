import React, { useState } from "react";
import { EyeIcon, EyeClosedIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === "password";
    const inputType = isPasswordField && showPassword ? "text" : type;

    return (
      <div className="flex flex-col gap-2 w-full">
        {/* Label */}
        {label && (
          <label className="text-primary text-[13px] font-bold flex items-center gap-2">
            {icon && <span className="opacity-90">{icon}</span>}
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            className={`
        w-full h-12 px-4 rounded-xl text-sm border-2 outline-none transition-all bg-[#f8fafc]  text-primary placeholder:text-slate-400 focus:bg-white focus:border-primary
        ${error ? "border-red-500 bg-red-50" : ""}
      `}
            {...props}
          />

          {/* Password Toggle */}
          {isPasswordField && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-0 bottom-0  text-slate-400 hover:text-slate-600 cursor-pointer  flex items-center"
            >
              {showPassword ? (
                <EyeClosedIcon size={20} />
              ) : (
                <EyeIcon size={20} />
              )}
            </button>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <span className="text-red-500 text-[11px] font-semibold ml-1">
            {error}
          </span>
        )}
      </div>
    );
  },
);
