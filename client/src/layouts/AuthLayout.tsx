import { Outlet } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export const AuthLayout = () => {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-background-light">
      <section className="flex-1 flex flex-col items-center justify-center p-6">
        {/* The Logo and Brand Name:*/}
        <div className="mb-10 flex flex-col items-center gap-2">
          <div className="bg-primary text-white p-2 rounded-xl shadow-lg">
            <GraduationCap size={32} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-primary">
            StudyFAST
          </h1>
        </div>

        {/* The Card Shell:*/}
        <div className="w-full max-w-130 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12">
          <Outlet />
        </div>
      </section>
    </main>
  );
};
