import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "../schemas/signupSchema";
import { Input } from "../../../components/Input";
import { User, Mail, Lock, ShieldCheck, Building2 } from "lucide-react";

export const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit", // Better UX: validates when user leaves the field,
    reValidateMode: "onBlur", // Re-validate on change for immediate feedback after first submit
  });

  const onSubmit = async (data: SignupFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <main className="flex-1 flex items-center justify-center p-6 min-h-[calc(100vh-80px)]">
      {/* Form Card */}
      <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12">
        <div className="flex flex-col gap-2 mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">
            Create Account
          </h1>
          <p className="text-slate-blue text-base">
            Join our academic community today
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Full Name"
            icon={<User className="w-4 h-4 text-slate-blue" />}
            placeholder="Enter your full name"
            error={errors.fullName?.message}
            {...register("fullName")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="University Email"
              icon={<Building2 className="w-4 h-4 text-slate-blue" />}
              placeholder="name@university.edu"
              type="email"
              error={errors.universityEmail?.message}
              {...register("universityEmail")}
            />
            <Input
              label="Personal Email"
              icon={<Mail className="w-4 h-4 text-slate-blue" />}
              type="email"
              placeholder="name@example.com"
              error={errors.personalEmail?.message}
              {...register("personalEmail")}
            />
          </div>

          <Input
            label="Password"
            icon={<Lock className="w-4 h-4 text-slate-blue" />}
            type="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register("password")}
          />

          <Input
            label="Confirm Password"
            icon={<ShieldCheck className="w-4 h-4 text-slate-blue" />}
            type="password"
            placeholder="••••••••"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <div className="pt-4 flex flex-col gap-4">
            {/* Primary Action: Deep Navy */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#1e293b] transition-all shadow-md active:scale-[0.98] disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating Account..." : "Register Now"}
            </button>

            <div className="flex items-center gap-4 my-1">
              <div className="h-[1px] bg-slate-200 flex-1"></div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                or
              </span>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            {/* Secondary Action: Light Grayish background */}
            <button
              type="button"
              className="w-full bg-[#f1f5f9] text-primary font-bold py-4 rounded-xl hover:bg-[#e2e8f0] transition-all border border-transparent cursor-pointer "
            >
              Already have an account? Login
            </button>
          </div>
        </form>

        {/* <div className="mt-8 text-center">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            By joining, you agree to StudyFAST's{" "}
            <a href="#" className="underline hover:text-primary transition-colors">Terms of Service</a> and{" "}
            <a href="#" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
          </p>
        </div> */}
      </div>
    </main>
  );
};
