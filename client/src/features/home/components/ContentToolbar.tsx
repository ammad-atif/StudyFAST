import { Search } from "lucide-react";
import { Input } from "../../../components/global/Input";
export function ContentToolbar() {
  return (
    <>
      <div className="mb-6">
        <div className="relative w-full">
          <Input
            placeholder="Search your notes..."
            placeholder_icon={<Search size={18} />}
          />
        </div>
      </div>

      {/* Relevance Filter */}
      <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 mb-6">
        {["Relevance", "Popular", "Newest"].map((filter, i) => (
          <button
            key={filter}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${i === 0 ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-50"}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </>
  );
}
