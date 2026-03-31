import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../global/Input";
import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Card } from "../global/Card";
import { Button } from "./Button";

const resetSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetFormData = z.infer<typeof resetSchema>;

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetFormData>({
    resolver: zodResolver(resetSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: ResetFormData) => {
    console.log("Password reset successfully" + data.password);
  };

  return (
    <>
      {/* Reset Password Card */}
      <Card
        title="Reset Your Password"
        description="Enter your new password below to regain access to your account."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Input
          label="New Password"
          icon={<Lock className="w-4 h-4 text-slate-blue" />}
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />

        <Input
          label="Confirm New Password"
          icon={<ShieldCheck className="w-4 h-4 text-slate-blue" />}
          type="password"
          placeholder="••••••••"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        {/* Primary Action Button */}
        <Button disabled={isSubmitting} type="submit" variant="primary">
          {isSubmitting ? "Updating..." : "Update Password"}
          {!isSubmitting && <CheckCircle2 size={18} />}
        </Button>
      </form>
    </>
  );
};
