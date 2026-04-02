import { useState } from "react";
import { LibraryItem } from "../components/LibraryItem";
import {
  History,
  Heart,
  MessageSquare,
  Bookmark,
  ChevronDown,
} from "lucide-react";
import { Card } from "../components/global/Card";
export const LibraryPage = () => {
  const [filter, setFilter] = useState("All Posts");

  const filters = [
    { name: "All Posts", icon: null },
    { name: "Created", icon: <History size={14} /> },
    { name: "Liked", icon: <Heart size={14} /> },
    { name: "Commented", icon: <MessageSquare size={14} /> },
    { name: "Saved", icon: <Bookmark size={14} /> },
  ];

  return (
    <main className="w-full max-w-4xl mx-auto px-2 md:px-10 py-12">
      <div className="mb-10 text-center">
        {/* Header */}
        <Card
          title="Quick Overview Library"
          description="Your personalized collection of AI-generated content, organized and ready for review."
        />
        {/* {Filters} */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <div
              key={f.name}
              onClick={() => setFilter(f.name)}
              className={`px-5 py-2 rounded-full text-xs font-black flex items-center gap-2 border transition-all ${
                filter === f.name
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/60"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:cursor-pointer"
              }`}
            >
              {f.icon} {f.name}
            </div>
          ))}
        </div>
      </div>

      {/* Library Content Card */}
      <div className="border border-slate-200 rounded-2xl bg-white  shadow-sm">
        <LibraryItem
          title="Quantum Mechanics: Wave-Particle Duality"
          description="A deep dive into Schrödinger's equation and the double-slit experiment..."
          time="2h ago"
          status="Saved"
        />
        <LibraryItem
          title="Organic Chemistry Functional Groups"
          description="50 essential flashcards covering alcohols, ethers, and ketones..."
          time="Yesterday"
          status="Commented"
        />
        <LibraryItem
          title="Python Data Structures Masterclass"
          description="Complete guide to Lists, Dictionaries, Sets and Tuples..."
          time="1w ago"
          status="Liked"
        />
        <LibraryItem
          title="Python Data Structures Masterclass"
          description="Complete guide to Lists, Dictionaries, Sets and Tuples..."
          time="1w ago"
          status="Created"
        />
      </div>

      {/* Pagination / Show More */}
      <div className="mt-10">
        <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-black text-primary hover:underline transition-all cursor-pointer mx-auto">
          Show More <ChevronDown size={18} />
        </button>
      </div>
    </main>
  );
};
