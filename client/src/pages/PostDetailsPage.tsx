import { useState } from "react";
import {
  ArrowUp,
  ArrowDown,
  // MessageSquare,
  // Share2,
  Bookmark,
  Verified,
  ChevronRight,
} from "lucide-react";
import { CommentDrawer } from "../components/post-details/CommentDrawer";

export const PostDetailsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="w-full max-w-5xl mx-auto px-6 py-12">
      {/* POST META */}
      <div className="space-y-3 mb-8">
        {/* Subject */}
        <div className="flex items-center gap-1">
          <span className="text-slate-600 text-sm">Subject:</span>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-primary font-bold">Computer Science</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700">
            xyz
          </span>
        </div>
      </div>

      {/* POST CONTENT */}
      <article>
        {/* Article Heading */}
        <h1 className="text-5xl font-black text-primary mb-8 tracking-tight leading-tight text-justify hyphens-auto">
          Understanding Time Complexity in Merge Sort: A Visual Breakdown
        </h1>

        {/* Interaction Bar */}
        <div className="flex flex-col gap-y-7 md:flex-row md:items-center md:justify-between py-5 border-b-2 border-slate-200 mb-12  ">
          {/* Voting, Comment, Share and Bookmark Button */}
          <div className="flex justify-between items-center gap-6 self-stretch">
            {/* Voting Button */}
            <div className="flex items-center bg-slate-50 rounded-full p-1 border border-slate-100">
              <button className="p-1.5 hover:bg-white rounded-full transition-all text-slate-400 hover:text-blue-500 cursor-pointer">
                <ArrowUp size={20} />
              </button>
              <span className="font-black text-sm px-3 text-primary">1.2k</span>
              <button className="p-1.5 hover:bg-white rounded-full transition-all active:scale-90 text-slate-400 hover:text-orange-500 cursor-pointer">
                <ArrowDown size={20} />
              </button>
            </div>

            {/* Bookmark Button */}
            <button className="p-2 text-slate-400 hover:text-primary transition-colors cursor-pointer">
              <Bookmark size={20} />
            </button>

            {/* <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-2 text-sm font-black text-slate-500 hover:text-primary transition-colors "
            >
              <MessageSquare size={18} />
              24 Comments
            </button> */}

            {/* <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <Share2 size={20} />
            </button> */}
          </div>

          {/* AI chat button */}
          <div className="flex items-center gap-2 self-center">
            <button className="py-2 px-4 bg-primary text-white rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl shadow-primary/20 cursor-pointer ">
              View AI Chat
            </button>
          </div>
        </div>

        {/* Article Description */}
        <p className="text-slate-700 leading-relaxed text-xl font-medium text-justify hyphens-auto">
          Merge Sort is a classic example of the Divide and Conquer strategy. To
          understand its time complexity of $O(n \log n)$, we need to look at
          how the problem is broken down and reconstructed.
        </p>
      </article>

      {/* Post Creator Footer */}
      <footer className="pt-12 border-t-2 border-slate-200 flex flex-wrap items-center md:justify-between justify-center  gap-6 mt-12">
        <div className="flex items-center gap-4">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad"
            className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
            alt="Author"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black text-primary">
                Ahmad Hassan
              </span>
              <Verified size={18} className="text-blue-500 fill-blue-500/10" />
            </div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">
              Roll No: 22L-6653 • 4 hours ago
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsDrawerOpen(true);
          }}
          className="px-7 py-4 bg-primary text-white rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl shadow-primary/20 cursor-pointer"
        >
          Join Post Discussion
        </button>
      </footer>

      {/* Comment Drawer */}
      <CommentDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </main>
  );
};
