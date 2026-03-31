import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Input } from "../global/Input";
import { Link } from "react-router-dom";
import { Card } from "../global/Card";
import { Button } from "./Button";
const signinSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid academic email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

type SigninFormData = z.infer<typeof signinSchema>;

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
      <Card
        title="Login to StudyFAST"
        description="Welcome back to our academic community"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Email Address"
          icon={<Mail className="w-4 h-4 text-slate-blue" />}
          type="email"
          placeholder="Enter your email address"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Password"
          icon={<Lock className="w-4 h-4 text-slate-blue" />}
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />

        {/* Forget Password */}
        <div className="text-xs font-bold text-primary hover:underline text-right">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        {/* Primary Action Button */}
        <Button disabled={isSubmitting} type="submit" variant="primary">
          {isSubmitting ? "Logging in..." : "Login"}
          {!isSubmitting && <ArrowRight size={18} />}
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-slate-200 flex-1" />
          <span className="text-xs text-slate-400 font-bold uppercase">or</span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        {/* Secondary Action Button */}
        <Link to="/register">
          <Button variant="secondary" type="button">
            Don't have an account? Register{" "}
          </Button>
        </Link>
      </form>
    </>
  );
};
