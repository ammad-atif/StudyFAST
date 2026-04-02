import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, type SigninFormData } from "../schemas/signinSchema";
import { Input } from "../../../components/Input";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";

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
    const cleanedEmail = data.email.trim();
    console.log("Form Submitted:", cleanedEmail, data.password);
  };

  return (
    <>
      {/* Login Header */}
      <div className="text-center mb-10">
        <h1 className="text-[32px] font-extrabold text-primary mb-2 tracking-tight leading-tight">
          Login to StudyFAST
        </h1>
        <p className="text-slate-blue text-[15px] font-medium opacity-90 leading-relaxed">
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
          autoComplete="email"
          autoFocus
          {...register("email")}
        />

        <div>
          <Input
            label="Password"
            icon={<Lock className="w-4 h-4 text-slate-blue" />}
            type="password"
            placeholder="••••••••"
            error={errors.password?.message}
            autoComplete="current-password"
            {...register("password")}
          />
          <div className="flex justify-end">
            <Link to="/forgot-password">
              <button
                type="button"
                className="text-[13px] font-bold text-primary mt-3 hover:opacity-80 transition-all cursor-pointer hover:underline underline-offset-4"
              >
                Forgot Password?
              </button>
            </Link>
          </div>
        </div>

        <div className="pt-2 flex flex-col gap-4">
          {/* Primary Action Button */}
          <Button disabled={isSubmitting} color="primary" type="submit">
            {isSubmitting ? "Logging in..." : "Login"}
            {!isSubmitting && (
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
            )}
          </Button>

          {/* OR Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-px bg-slate-100 flex-1" />
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-[0.15em]">
              or
            </span>
            <div className="h-px bg-slate-100 flex-1" />
          </div>

          {/* Secondary Action Button */}
          <Link to="/register">
            <Button color="secondary">
              Don't have an account? Register
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
};