import {
  FileText,
  Layers,
  BookOpen,
  ArrowUp,
  MoreVertical,
  Bookmark,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

interface LibraryItemProps {
  title: string;
  description: string;
  type: "AI Chat" | "Deck" | "Guide";
  votes: number;
  subject: string;
  time: string;
  status: "Saved" | "Liked" | "Commented";
}

export const LibraryItem = ({
  title,
  description,
  type,
  votes,
  subject,
  time,
  status,
}: LibraryItemProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const getIcon = () => {
    if (type === "Deck") return <Layers size={18} />;
    if (type === "Guide") return <BookOpen size={18} />;
    return <FileText size={18} />;
  };

  const getStatusConfig = () => {
    switch (status) {
      case "Saved":
        return {
          icon: <Bookmark size={14} fill="currentColor" />,
          color: "bg-rose-50 text-rose-600 border-rose-100",
        };
      case "Liked":
        return {
          icon: <Heart size={14} fill="currentColor" />,
          color: "bg-red-50 text-red-600 border-red-100",
        };
      case "Commented":
        return {
          icon: <MessageCircle size={14} fill="currentColor" />,
          color: "bg-blue-50 text-blue-600 border-blue-100",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className="group flex items-center p-4 hover:bg-slate-50 transition-all gap-4 border-b border-slate-100 last:border-0 cursor-pointer relative">
      {/* Type Icon */}
      <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
        {getIcon()}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-sm font-black text-primary truncate group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <span className="bg-primary/5 text-primary text-[9px] font-black px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider">
              {type === "AI Chat" && <Sparkles size={10} />} {type}
            </span>
          </div>
          <p className="text-slate-500 text-xs truncate font-medium">
            {description}
          </p>
        </div>

        {/* Stats & Meta */}
        <div className="flex items-center gap-4 shrink-0 sm:ml-auto">
          <div className="flex items-center gap-1 px-2 py-1 bg-slate-50 rounded text-[11px] font-black text-slate-600">
            <ArrowUp size={14} className="text-slate-400" />
            <span>{votes}</span>
          </div>
          <span className="hidden lg:block text-[10px] text-slate-400 font-black uppercase w-16 text-right">
            {time}
          </span>
        </div>
      </div>

      {/* Status Badge */}
      <div
        className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-xl shrink-0 ${config.color}`}
      >
        {config.icon}
        <span className="text-[10px] font-black uppercase tracking-wide">
          {status}
        </span>
      </div>

      {/* Actions Dropdown */}
      <div className="relative ml-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
          className="p-1 text-slate-400 hover:text-primary transition-colors outline-none"
        >
          <MoreVertical size={20} />
        </button>
        {showMenu && (
          <div className="absolute right-0 top-full mt-2 w-24 bg-white border border-slate-100 rounded-xl shadow-xl z-30 py-1 overflow-hidden">
            <button className="w-full text-left px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
              Edit
            </button>
            <button className="w-full text-left px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
