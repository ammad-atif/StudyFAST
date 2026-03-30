import { GraduationCap } from "lucide-react";

interface AuthPageProps {
  children: React.ReactNode;
}

export const AuthPage = ({ children }: AuthPageProps) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-background-light">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2">
        <div className="bg-primary text-white p-2 rounded-xl shadow-2xl">
          <GraduationCap size={32} />
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-primary">
          StudyFAST
        </h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        {children}
      </div>
    </main>
  );
};
