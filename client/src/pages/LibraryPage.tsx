import { useState } from "react";
import { LibraryItem } from "../components/LibraryItem";
import {
  History,
  Heart,
  MessageSquare,
  Bookmark,
  ChevronDown,
} from "lucide-react";

export const LibraryPage = () => {
  const [filter, setFilter] = useState("All");

  const filters = [
    { name: "All Posts", icon: null },
    { name: "Created", icon: <History size={14} /> },
    { name: "Liked", icon: <Heart size={14} /> },
    { name: "Commented", icon: <MessageSquare size={14} /> },
    { name: "Saved", icon: <Bookmark size={14} /> },
  ];

  return (
    <main className="flex-1 flex flex-col max-w-[1200px] mx-auto w-full px-4 md:px-10 py-12">
      {/* Header & Filters */}
      <div className="flex flex-col gap-6 mb-10 items-center ">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-primary mb-2">
            Quick Overview Library
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {filters.map((f) => (
            <button
              key={f.name}
              onClick={() => setFilter(f.name)}
              className={`px-5 py-2 rounded-full text-xs font-black transition-all flex items-center gap-2 border ${
                filter === f.name
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {f.icon} {f.name}
            </button>
          ))}
        </div>
      </div>

      {/* Library Content Card */}
      <div className="flex flex-col border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm">
        <LibraryItem
          title="Quantum Mechanics: Wave-Particle Duality"
          description="A deep dive into Schrödinger's equation and the double-slit experiment..."
          type="AI Chat"
          votes={128}
          subject="Physics 101"
          time="2h ago"
          status="Saved"
        />
        <LibraryItem
          title="Organic Chemistry Functional Groups"
          description="50 essential flashcards covering alcohols, ethers, and ketones..."
          type="Deck"
          votes={84}
          subject="Chemistry"
          time="Yesterday"
          status="Liked"
        />
        <LibraryItem
          title="Python Data Structures Masterclass"
          description="Complete guide to Lists, Dictionaries, Sets and Tuples..."
          type="Guide"
          votes={342}
          subject="CS Master"
          time="1w ago"
          status="Liked"
        />
      </div>

      {/* Pagination / Show More */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 border border-slate-200 px-6 py-2.5 rounded-xl text-sm font-black text-primary hover:bg-slate-50 transition-all active:scale-95">
          Show More <ChevronDown size={18} />
        </button>
      </div>
    </main>
  );
};
