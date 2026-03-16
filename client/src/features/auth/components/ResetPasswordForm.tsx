import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetSchema, type ResetFormData } from "../schemas/resetSchema";
import { Input } from "../../../components/Input";
import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

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
      <div className="text-center mb-10">
        <h1 className="text-[28px] font-extrabold text-primary mb-3 tracking-tight leading-tight">
          Reset Password
        </h1>
        <p className="text-slate-blue text-[15px] font-medium opacity-90">
          Almost there! Choose a strong new password for your account.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <button
          disabled={isSubmitting}
          className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-[#1e293b] transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Updating..." : "Update Password"}
          {!isSubmitting && <CheckCircle2 size={18} />}
        </button>
      </form>
    </>
  );
};
