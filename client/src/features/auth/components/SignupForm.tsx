import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "../schemas/signupSchema";
import { Input } from "../../../components/Input";
import { User, Mail, Lock, ShieldCheck, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: SignupFormData) => {
    // This will integrate with your Auth Service/Redux later
    console.log("Form Data:", data);
  };

  return (
    <>
      {/* Signup Card */}

      <div className="flex flex-col gap-2 mb-10 text-center">
        <h1 className="text-[32px] font-extrabold tracking-tight text-primary leading-tight">
          Create Account
        </h1>
        <p className="text-slate-blue text-[15px] font-medium opacity-90">
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
            placeholder="name@example.com"
            type="email"
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
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#1e293b] transition-all shadow-md active:scale-[0.98] disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating Account..." : "Register Now"}
          </button>

          <div className="flex items-center gap-4 my-1">
            <div className="h-px bg-slate-100 flex-1"></div>
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-[0.15em]">
              or
            </span>
            <div className="h-px bg-slate-100 flex-1"></div>
          </div>
          <Link to="/login">
            <button
              type="button"
              className="w-full bg-[#f1f5f9] text-primary font-bold py-4 rounded-xl hover:bg-border-subtle transition-all border border-transparent cursor-pointer active:scale-[0.98] "
            >
              Already have an account? Login
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};
