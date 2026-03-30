import "./App.css";
import { AuthPage } from "./pages/AuthPage";
import { SigninForm } from "./components/auth/SigninForm";
import { SignupForm } from "./components/auth/SignupForm";
import { ResetPasswordForm } from "./components/auth/ResetPasswordForm";
import { ForgotPasswordForm } from "./components/auth/ForgotPasswordForm";
import { VerifyEmailForm } from "./components/auth/VerifyEmailForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const authRoutes = [
  { path: "/sign-in", element: <SigninForm /> },
  { path: "/sign-up", element: <SignupForm /> },
  { path: "/reset-pass", element: <ResetPasswordForm /> },
  { path: "/forgot-pass", element: <ForgotPasswordForm /> },
  { path: "/verify-email", element: <VerifyEmailForm /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {authRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<AuthPage>{route.element}</AuthPage>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
