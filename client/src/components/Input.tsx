import React, { useState } from "react";
import { EyeIcon, EyeClosedIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === "password";
    const inputType = isPasswordField && showPassword ? "text" : type;

    return (
      <div className="flex flex-col gap-2 w-full group">
        {/* Label - Darker, Bold Typography */}
        <label className="text-primary text-[13px] font-bold flex items-center gap-2">
          {icon && <span className="opacity-90">{icon}</span>}
          {label}
        </label>

        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            className={`
              w-full h-12 px-4 rounded-xl text-sm transition-all duration-150 outline-none border-2
              
              /* NORMAL STATE (as seen in University/Personal Email fields) */
              bg-[#f8fafc] border-[#f1f5f9] text-primary placeholder:text-slate-400
              
              /* FOCUS STATE (as seen in Full Name field) */
              focus:bg-white focus:border-primary focus:ring-0
              
              /* ERROR STATE */
              ${error ? "border-red-500 bg-red-50/30" : ""}
              
              /* PASSWORD TOGGLE PADDING */
              ${isPasswordField ? "pr-12" : ""}
            `}
            {...props}
          />

          {/* Password Toggle Icon */}
          {isPasswordField && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeClosedIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>

        {error && (
          <span className="text-red-500 text-[11px] font-semibold ml-1">
            {error}
          </span>
        )}
      </div>
    );
  },
);
