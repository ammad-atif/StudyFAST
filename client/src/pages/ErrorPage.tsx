import { AlertCircle } from "lucide-react";

export const ErrorPage = () => {
  return (
    <main className="flex flex-col items-center justify-center p-10 bg-secondary text-primary min-h-screen">
      <div className="bg-white rounded-3xl p-12 md:p-20 shadow-xl border border-slate-100 w-full max-w-2xl flex flex-col items-center text-center space-y-10">
        {/* Icon */}
        <div className="w-24 h-24 flex items-center justify-center rounded-3xl bg-red-100 text-red-400 border animate-pulse">
          <AlertCircle size={48} strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-primary text-5xl md:text-7xl font-black leading-tight">
            Something <br /> went wrong.
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-md mx-auto">
            We couldn't find the page you were looking for. Please try again or
            return to the home feed.
          </p>
        </div>
      </div>
    </main>
  );
};
