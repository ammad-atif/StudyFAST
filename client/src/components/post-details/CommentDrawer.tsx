import { X, Send } from "lucide-react";

type CommentDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const CommentDrawer = ({ isOpen, onClose }: CommentDrawerProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full md:max-w-[40%] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="text-xl font-black text-primary">Peer Discussion</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-50"
          >
            <X size={20} className="text-slate-400" />
          </button>
        </div>

        {/* Chat */}
        <div className="overflow-y-auto p-6 space-y-8">
          {/* Chat Input  */}
          <div className="space-y-3">
            <textarea
              className="w-full p-4 rounded-2xl border bg-slate-50 text-sm resize-none outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Add to the discussion..."
              rows={3}
            />
            <div className="flex justify-end">
              <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-black flex items-center gap-2 hover:opacity-90">
                Post <Send size={14} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}

          <div className="flex gap-4">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
              className="w-9 h-9 rounded-full"
              alt="User"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-black text-primary">
                  Sarah Khalid
                </span>
                <span className="text-xs text-slate-400 font-bold">2h ago</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                This is really helpful! Could you explain how it compares to
                QuickSort in the worst case?
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
