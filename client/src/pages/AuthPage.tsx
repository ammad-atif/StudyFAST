import { Routes, Route, Navigate } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { SigninForm } from "../features/auth/components/SigninForm";
import { SignupForm } from "../features/auth/components/SignupForm";
import { VerifyEmailForm } from "../features/auth/components/VerifyEmailForm";
import { ForgotPasswordForm } from "../features/auth/components/ForgotPasswordForm";
import { ResetPasswordForm } from "../features/auth/components/ResetPasswordForm";

export const AuthPage = () => {
  return (
    <Routes>
      {/* All routes inside this group will automatically use the AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<SigninForm />} />
        <Route path="register" element={<SignupForm />} />
        <Route path="verify-email" element={<VerifyEmailForm />} />
        <Route path="forgot-password" element={<ForgotPasswordForm />} />
        <Route path="reset-password/:token" element={<ResetPasswordForm />} />

        {/* Redirect /auth to /auth/login */}
        <Route path="/" element={<Navigate to="login" replace />} />
      </Route>
    </Routes>
  );
};
