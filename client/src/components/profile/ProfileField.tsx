import React from "react";
import { Edit3 } from "lucide-react";

interface ProfileFieldProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export const ProfileField = ({ label, value, icon }: ProfileFieldProps) => {
  return (
    <div className="w-full group">
      {/* Label */}
      <label className="text-primary text-[13px] font-bold flex items-center gap-2 mb-2">
        {icon && <span className="opacity-90">{icon}</span>}
        {label}
      </label>

      {/* Field Container */}
      <div className="w-full p-4 rounded-xl text-sm border border-slate-300 bg-slate-50/50 text-primary flex items-center justify-between group-hover:border-primary/50 group-hover:bg-white cursor-pointer transition-all">
        {/* Value Text */}
        <span className="font-medium tracking-tight">{value}</span>

        {/* Edit Icon */}
        <button
          type="button"
          className="text-slate-400 hover:text-primary transition-colors hidden"
        >
          <Edit3 size={18} />
        </button>
      </div>
    </div>
  );
};
