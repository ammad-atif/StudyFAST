import { Input } from "../global/Input";
import React from "react";
export function ContentToolbar() {
  const filters: { name: string; active: boolean }[] = [
    { name: "Relevance", active: true },
    { name: "Popular", active: false },
    { name: "Newest", active: false },
  ];

  const [selectedFilter, setSelectedFilter] =
    React.useState<string>("relevance");

  const handleFilterClick = (filterName: string) => {
    setSelectedFilter(filterName);
  };

  return (
    <>
      <div className="mb-6">
        <div className="relative w-full">
          <Input placeholder="Search your notes..." />
        </div>
      </div>

      {/* Relevance Filter */}
      <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${selectedFilter === filter.name.toLowerCase() ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-50"}`}
            onClick={() => handleFilterClick(filter.name.toLowerCase())}
          >
            {filter.name}
          </button>
        ))}
      </div>
    </>
  );
}
