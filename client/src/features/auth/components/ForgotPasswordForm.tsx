import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotSchema, type ForgotFormData } from "../schemas/forgotSchema";
import { Input } from "../../../components/Input";
import { Mail, ArrowLeft, Send } from "lucide-react";

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
    console.log("Recovery email sent to:", data.email);
  };

  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-[28px] font-extrabold text-primary mb-3 tracking-tight leading-tight">
          Forgot Password?
        </h1>
        <p className="text-slate-blue text-[15px] font-medium opacity-90 leading-relaxed">
          No worries! Enter your email and we'll send you instructions to reset
          your password.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Input
          label="Email Address"
          icon={<Mail className="w-4 h-4 text-slate-blue" />}
          type="email"
          placeholder="name@university.edu"
          error={errors.email?.message}
          {...register("email")}
        />

        <button
          disabled={isSubmitting}
          className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#1e293b] transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Reset Link"}
          {!isSubmitting && <Send size={18} />}
        </button>
      </form>

      <Link to="/login">
        <button className="mt-10 w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-blue hover:text-primary transition-colors group cursor-pointer">
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Login
        </button>
      </Link>
    </>
  );
};
