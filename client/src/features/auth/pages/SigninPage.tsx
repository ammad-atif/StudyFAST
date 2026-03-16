import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, type SigninFormData } from "../schemas/signinSchema";
import { Input } from "../../../components/Input";
import { Mail, Lock, GraduationCap, ArrowRight } from "lucide-react";

export const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: SigninFormData) => {
    // Logic for API call
    console.log("Form Submitted:", data);
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      <section className="flex-1 flex flex-col items-center justify-center p-6 z-10">
        {/* Logo Section - Consistent with OTP Page */}
        <div className="mb-10 flex flex-col items-center gap-2">
          <div className="bg-primary text-white p-2 rounded-xl shadow-lg">
            <GraduationCap size={32} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-primary">
            StudyFAST
          </h1>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-[32px] font-extrabold text-primary mb-2 tracking-tight leading-tight ">
              Login to StudyFAST
            </h1>
            <p className="text-slate-blue text-[15px] font-medium opacity-90">
              Welcome back to our academic community
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Email Address"
              icon={<Mail className="w-4 h-4 text-slate-blue" />}
              type="email"
              placeholder="Enter your email address"
              error={errors.email?.message}
              {...register("email")}
            />

            <div>
              <Input
                label="Password"
                icon={<Lock className="w-4 h-4 text-slate-blue" />}
                type="password"
                placeholder="••••••••"
                error={errors.password?.message}
                {...register("password")}
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-[13px] font-bold text-primary mt-3 hover:opacity-70 transition-all cursor-pointer hover:underline underline-offset-4"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-4">
              {/* Primary Action Button */}
              <button
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#1e293b] transition-all shadow-md active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                type="submit"
              >
                {isSubmitting ? "Logging in..." : "Login"}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] bg-slate-100 flex-1" />
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-[0.15em]">
                  or
                </span>
                <div className="h-[1px] bg-slate-100 flex-1" />
              </div>

              {/* Secondary Action Button - Exact background from your screenshot */}
              <button
                type="button"
                className="w-full bg-[#f1f5f9] text-primary font-bold py-4 rounded-xl hover:bg-[#e2e8f0] transition-all border border-transparent active:scale-[0.98] cursor-pointer"
              >
                Don't have an account? Register
              </button>
            </div>
          </form>

          {/* Legal Section */}
          {/* <div className="mt-10 text-center">
            <p className="text-[12px] text-slate-400 font-medium leading-relaxed px-6">
              By continuing, you agree to StudyFAST's{" "}
              <a
                href="#"
                className="text-primary/80 underline decoration-slate-200 underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-primary/80 underline decoration-slate-200 underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div> */}
        </div>
      </section>

      {/* Dotted Background Pattern Decoration - Exact match to OTP Page */}
      <div
        className="fixed inset-0 -z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#0f1729 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </main>
  );
};
