import { Link, useLocation } from "react-router-dom";
import { BookOpen, Share2 } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/dashboard" },
    { name: "Bookmarks", path: "/dashboard/bookmarks" },
    { name: "Analytics", path: "/dashboard/analytics" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md ">
      <div className="max-w-360 mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          to="/dashboard"
          className="flex items-center gap-2 shrink-0 group"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <BookOpen size={18} />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-primary">
            StudyFAST
          </h2>
        </Link>

        <div className="flex items-center gap-8">
          {/* Main Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-5 transition-all relative ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-slate-500 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons & Profile */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95 cursor-pointer">
              <Share2 size={16} />
              <span>Share AI Chat</span>
            </button>

            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/10 transition-all">
              <img
                alt="User Profile"
                className="w-full h-full object-cover"
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
