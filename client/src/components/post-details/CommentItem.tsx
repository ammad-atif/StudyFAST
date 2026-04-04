import { ThumbsUp } from "lucide-react";

interface CommentProps {
  author: string;
  time: string;
  content: string;
  likes: number;
  replies?: CommentProps[];
}

export const CommentItem = ({
  author,
  time,
  content,
  likes,
  replies,
}: CommentProps) => {
  return (
    <div className="flex gap-4">
      <img
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`}
        className="w-8 h-8 rounded-full bg-slate-100 shrink-0"
        alt="User"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-bold text-primary">{author}</span>
          <span className="text-[11px] font-medium text-slate-400">{time}</span>
        </div>
        <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">
          {content}
        </p>
        <div className="flex items-center gap-4">
          <button className="text-xs font-black text-slate-400 hover:text-primary transition-colors cursor-pointer">
            Reply
          </button>
          <div className="flex items-center gap-1.5 group cursor-pointer">
            <ThumbsUp
              size={14}
              className="text-slate-400 group-hover:text-primary transition-colors"
            />
            <span className="text-xs font-bold text-slate-400 group-hover:text-primary">
              {likes}
            </span>
          </div>
        </div>

        {/* Recursive Replies Rendering */}
        {replies && replies.length > 0 && (
          <div className="mt-5 pl-4 border-l-2 border-slate-100 space-y-6">
            {replies.map((reply, index) => (
              <CommentItem key={index} {...reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
