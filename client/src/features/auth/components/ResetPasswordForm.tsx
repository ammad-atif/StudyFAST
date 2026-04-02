import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetSchema, type ResetFormData } from "../schemas/resetSchema";
import { Input } from "../../../components/Input";
import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "../../../components/Button";

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
    const cleanedPassword = data.password.trim();
    console.log("Password reset successfully:", cleanedPassword);
  };

  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-[28px] font-extrabold text-primary mb-3 tracking-tight leading-tight">
          Reset Password
        </h1>
        <p className="text-slate-blue text-[15px] font-medium opacity-90 leading-relaxed">
          Almost there! Choose a strong new password for your account.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="New Password"
          icon={<Lock className="w-4 h-4 text-slate-blue" />}
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          autoComplete="new-password"
          autoFocus
          {...register("password")}
        />

        <Input
          label="Confirm New Password"
          icon={<ShieldCheck className="w-4 h-4 text-slate-blue" />}
          type="password"
          placeholder="••••••••"
          error={errors.confirmPassword?.message}
          autoComplete="new-password"
          {...register("confirmPassword")}
        />

        <Button disabled={isSubmitting} type="submit" color="primary">
          {isSubmitting ? "Updating..." : "Update Password"}
          {!isSubmitting && (
            <CheckCircle2 className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
          )}
        </Button>
      </form>
    </>
  );
};