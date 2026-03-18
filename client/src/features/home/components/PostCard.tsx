import {
  AArrowUp,
  AArrowDown,
  Bookmark,
  Share,
  MessageSquare,
} from "lucide-react";

interface PostCardProps {
  title: string;
  excerpt: string;
  subject: string;
  time: string;
  votes: string;
  comments: number;
  tags: { name: string; color: string }[];
}

export const PostCard = ({
  title,
  excerpt,
  subject,
  time,
  votes,
  comments,
  tags,
}: PostCardProps) => {
  return (
    <article className="bg-white  border border-slate-200  rounded-xl overflow-hidden hover:border-slate-300 transition-colors flex">
      {/* Voting Sidebar */}
      <div className="w-12 bg-slate-50  flex flex-col items-center py-4 gap-2">
        <button className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
          <AArrowUp size={20} strokeWidth={3} />
        </button>
        <span className="text-sm font-bold text-slate-700 ">{votes}</span>
        <button className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer">
          <AArrowDown size={20} strokeWidth={3} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-primary">{subject}</span>
            <span>•</span>
            <span>{time}</span>
          </div>
          <button className="text-slate-400 hover:text-primary cursor-pointer">
            <Bookmark size={18} />
          </button>
        </div>

        <h3 className="text-xl font-bold mb-2 leading-tight hover:text-slate-700 cursor-pointer transition-colors ">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <div
                key={tag.name}
                className="flex items-center gap-1 bg-slate-100  px-3 py-1 rounded-full text-[11px] font-bold text-slate-600 border border-slate-200"
              >
                <span className={`w-2 h-2 rounded-full ${tag.color}`}></span>
                {tag.name}
              </div>
            ))}
          </div>
          <button className="bg-primary text-white text-xs font-bold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
            View Chat
          </button>
        </div>

        {/* Footer Actions */}
        <div className="mt-4 pt-4 border-t border-slate-100  flex items-center gap-6">
          <button className="flex items-center gap-1 text-slate-400 text-xs hover:text-primary p-1 rounded transition-colors cursor-pointer">
            <MessageSquare size={14} />
            <span>{comments} comments</span>
          </button>
          <button className="flex items-center gap-1 text-slate-400 text-xs hover:text-primary p-1 rounded transition-colors cursor-pointer">
            <Share size={14} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </article>
  );
};
