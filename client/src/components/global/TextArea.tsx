import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, icon, error, ...props }, ref) => {
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

        <textarea
          ref={ref}
          className={`
        w-full p-4 rounded-xl text-sm border border-slate-300 transition-all text-primary placeholder:text-slate-400  focus:border-primary
        ${error ? "border-red-500 bg-red-50" : ""}
      `}
          {...props}
        />

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
