import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { Input } from "./Input";
import { Button } from "./Button";
import { Mail, ArrowLeft, Send } from "lucide-react";
import { Card } from "./Card";

const forgotSchema = z.object({
  email: z.string().email("Please enter a valid university email"),
});

type ForgotFormData = z.infer<typeof forgotSchema>;

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
      {/* {Card} */}

      <Card
        title="Forgot Password?"
        description="Enter your email and we'll send you instructions to reset your password."
      ></Card>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Input
          label="Email Address"
          icon={<Mail className="w-4 h-4 text-slate-blue" />}
          type="email"
          placeholder="name@university.edu"
          error={errors.email?.message}
          {...register("email")}
        />

        <Button disabled={isSubmitting} variant="primary" type="submit">
          {isSubmitting ? "Sending..." : "Send Reset Link"}
          {!isSubmitting && <Send size={18} />}
        </Button>
      </form>

      {/* Back to Login Link */}
      <Link to="/sign-in">
        <div className="mt-10 flex items-center justify-center gap-2 text-sm font-bold text-slate-blue hover:text-primary transition-colors group cursor-pointer">
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-3 transition-transform"
          />
          Back to Login
        </div>
      </Link>
    </>
  );
};
