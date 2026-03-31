import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../global/Input";
import { User, Mail, Lock, ShieldCheck, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../global/Card";
import { Button } from "./Button";
const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters"),
    universityEmail: z
      .string()
      .min(1, "University email is required")
      .email("Invalid university email")
      .endsWith(".edu", "Must be a .edu email"),
    personalEmail: z
      .string()
      .min(1, "Personal email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    },
  );

type SignupFormData = z.infer<typeof signupSchema>;

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
      <Card
        title="Create Account"
        description="Join our academic community today"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

        {/* Primary Action Button */}
        <Button disabled={isSubmitting} type="submit" variant="primary">
          {isSubmitting ? "Creating Account..." : "Register Now"}
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-slate-200 flex-1" />
          <span className="text-xs text-slate-400 font-bold uppercase">or</span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        {/* Secondary Action Button */}
        <Link to="/login">
          <Button variant="secondary" type="button">
            Already have an account? Login
          </Button>
        </Link>
      </form>
    </>
  );
};
