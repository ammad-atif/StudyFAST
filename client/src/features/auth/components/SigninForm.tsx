import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, type SigninFormData } from "../schemas/signinSchema";
import { Input } from "../../../components/Input";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: SigninFormData) => {
    // Logic for API call
    console.log("Form Submitted:", data);
  };

  return (
    <>
      {/* Login Card */}

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
            <Link to="/forgot-password">
              <button
                type="button"
                className="text-[13px] font-bold text-primary mt-3 hover:opacity-70 transition-all cursor-pointer hover:underline underline-offset-4"
              >
                Forgot Password?
              </button>
            </Link>
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
            <div className="h-px bg-slate-100 flex-1" />
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-[0.15em]">
              or
            </span>
            <div className="h-px bg-slate-100 flex-1" />
          </div>

          {/* Secondary Action Button - Exact background from your screenshot */}
          <Link to="/register">
            <button
              type="button"
              className="w-full bg-[#f1f5f9] text-primary font-bold py-4 rounded-xl hover:bg-border-subtle transition-all border border-transparent active:scale-[0.98] cursor-pointer"
            >
              Don't have an account? Register
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};
