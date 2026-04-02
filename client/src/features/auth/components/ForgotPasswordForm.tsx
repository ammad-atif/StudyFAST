import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotSchema, type ForgotFormData } from "../schemas/forgotSchema";
import { Input } from "../../../components/Input";
import { Mail, ArrowLeft, Send } from "lucide-react";
import { Button } from "../../../components/Button";

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: ForgotFormData) => {
    const cleaned = {
      email: data.email.trim(),
    };
    console.log("Recovery email sent to:", cleaned.email);
  };

  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-[28px] font-extrabold text-primary mb-3 tracking-tight leading-tight">
          Forgot Password?
        </h1>
        <p className="text-slate-blue text-[15px] font-medium opacity-90 leading-relaxed">
          No worries! Enter your email and we'll send you instructions to reset
          your password.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Input
          label="Email Address"
          icon={<Mail className="w-4 h-4 text-slate-blue" />}
          type="email"
          placeholder="name@university.edu"
          error={errors.email?.message}
          autoComplete="email"
          autoFocus
          {...register("email")}
        />

        <Button
          disabled={isSubmitting}
          color="primary"
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send Reset Link"}
          {!isSubmitting && (
            <Send size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
          )}
        </Button>
      </form>

      {/* Back to Login */}
      <Link to="/login">
        <div className="mt-10 w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-blue hover:text-primary transition-all duration-200 group cursor-pointer">
          <ArrowLeft
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back to Login
        </div>
      </Link>
    </>
  );
};