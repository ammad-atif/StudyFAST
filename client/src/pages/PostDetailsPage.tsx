import {
  ArrowUp,
  ArrowDown,
  Bot,
  Verified,
  MessageSquare,
  Share2,
  Bookmark,
} from "lucide-react";
import { CommentItem } from "../features/home/components/CommentItem";

export const PostDetailsPage = () => {
  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Voting Sidebar */}
        <aside className="flex flex-row md:flex-col items-center gap-1 bg-white p-2 rounded-xl shadow-sm h-fit border border-slate-100 sticky top-24">
          <button className="p-2 hover:bg-slate-50 rounded-lg group transition-all duration-200 active:scale-95">
            <ArrowUp
              className="text-slate-400 group-hover:text-blue-500 transition-colors"
              size={20}
            />
          </button>

          <span className="font-bold text-lg px-2">1.2k</span>

          <button className="p-2 hover:bg-slate-50 rounded-lg group transition-all duration-200 active:scale-95">
            <ArrowDown
              className="text-slate-400 group-hover:text-orange-500 transition-colors"
              size={20}
            />
          </button>
        </aside>

        {/* Main Article */}
        <article className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-8">

            {/* Subject */}
            <div className="text-primary text-2xl font-bold mb-4 underline underline-offset-4">
              Computer Science
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                <Bot size={14} /> AI Generated
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                Data Structures
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-black text-primary mb-6 leading-tight">
              Understanding Time Complexity in Merge Sort: A Visual Breakdown
            </h1>

            {/* Author */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad"
                  className="w-10 h-10 rounded-full bg-slate-100"
                  alt="Ahmad Hassan Avatar"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-sm font-bold text-primary">
                      Ahmad Hassan
                    </p>
                    <Verified
                      size={14}
                      className="text-blue-500 fill-blue-500"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Roll No: 22L-6653 • Posted 4 hours ago
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-1.5 text-xs font-bold text-white bg-primary px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-slate-800 active:scale-95 shadow-lg shadow-primary/10">
                Ask AI for more details
              </button>
            </div>

            {/* Content */}
            <div className="text-slate-700 leading-relaxed space-y-4 font-medium">
              <p>
                Merge Sort is a classic example of the Divide and Conquer
                strategy. To understand its time complexity of $O(n \log n)$, we
                need to look at how the problem is broken down and reconstructed.
              </p>

              {/* Code Block */}
              <div className="bg-[#1e293b] p-5 rounded-xl border border-slate-800 font-mono text-sm overflow-x-auto text-slate-300 shadow-inner">
                <pre>
                  <code>{`// Recursive structure
MergeSort(A, p, r):
  if p < r:
    q = floor((p+r)/2)
    MergeSort(A, p, q)
    MergeSort(A, q+1, r)
    Merge(A, p, q, r)`}</code>
                </pre>
              </div>

              <p>
                1. <strong>The "Divide" step:</strong> Each level of recursion
                splits the array into two halves, forming a tree of height
                $\log n$.
              </p>

              <p>
                2. <strong>The "Merge" step:</strong> Each level performs $n$
                work. Across $\log n$ levels → total complexity is $n \cdot \log n$.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-10 pt-6 flex items-center gap-8 border-t border-slate-100 flex-wrap">
              <button className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-all duration-200">
                <MessageSquare size={18} /> 24 Comments
              </button>

              <button className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-all duration-200">
                <Share2 size={18} /> Share
              </button>

              <button className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-all duration-200">
                <Bookmark size={18} /> Save
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-slate-50/50 border-t border-slate-200 p-6 md:p-8">
            <h3 className="text-lg font-black text-primary mb-6">
              Peer Discussion
            </h3>

            {/* Comment Input */}
            <div className="mb-10">
              <textarea
                className="w-full p-4 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none text-sm font-medium resize-none transition-all duration-200"
                placeholder="Add to the discussion..."
                rows={3}
              />
              <div className="flex justify-end mt-3">
                <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all duration-200 active:scale-95 shadow-lg shadow-primary/10">
                  Post Comment
                </button>
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-8">
              <CommentItem
                author="Sarah Khalid"
                time="2h ago"
                content="This is really helpful! Could you explain how it compares to QuickSort in the worst case?"
                likes={12}
                replies={[
                  {
                    author: "Ali Raza",
                    time: "1h ago",
                    content:
                      "QuickSort worst case is $O(n^2)$, whereas MergeSort is always $O(n log n)$ because it's guaranteed to split evenly.",
                    likes: 5,
                  },
                ]}
              />

              <CommentItem
                author="Zain Ul Abideen"
                time="30m ago"
                content="The visualization of the tree levels really clicked for me. Thanks for the breakdown!"
                likes={2}
              />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};