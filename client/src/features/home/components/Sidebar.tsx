import { Link } from "react-router-dom";
import {
  Code,
  Variable,
  BrainCircuit,
  Database,
  Terminal,
  HardDrive,
  ChevronDown,
} from "lucide-react";

export const Sidebar = () => {
  const subjects = [
    { name: "Computer Science", icon: <Code size={20} />, active: true },
    { name: "Mathematics", icon: <Variable size={20} /> },
    { name: "Artificial Intelligence", icon: <BrainCircuit size={20} /> },
    { name: "Data Science", icon: <Database size={20} /> },
    { name: "Operating Systems", icon: <Terminal size={20} /> },
    { name: "Database Systems", icon: <HardDrive size={20} /> },
  ];

  const tags = [
    "#Python",
    "#MachineLearning",
    "#ReactJS",
    "#DeepLearning",
    "#Cybersecurity",
    "#CloudComputing",
    "#Algorithms",
    "#DataStructures",
    "#NLP",
    "#ComputerVision",
    "#BigData",
    "#DevOps",
    "#AI Ethics",
    "#ReinforcementLearning",
    "#GraphQL",
  ];

  return (
    <div className="sticky top-24 space-y-8 overflow-y-auto h-[calc(100vh-6rem)] ">
      {/* Subjects Section */}
      <div>
        <div className="flex items-center justify-between mb-3 px-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Subjects
          </h3>
          <ChevronDown size={14} className="text-slate-400 cursor-pointer" />
        </div>
        <div className="space-y-1 pr-2">
          {subjects.map((sub) => (
            <Link
              key={sub.name}
              to="#"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                sub.active
                  ? "bg-primary/10 text-primary font-bold"
                  : "text-slate-600 hover:bg-slate-100 font-medium"
              }`}
            >
              <span className={sub.active ? "text-primary" : "text-slate-400"}>
                {sub.icon}
              </span>
              <span>{sub.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2 px-2   pr-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold cursor-pointer hover:bg-primary hover:text-white transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
