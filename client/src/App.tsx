import "./App.css";
import { SigninForm } from "./components/auth/SigninForm";
import { SignupForm } from "./components/auth/SignupForm";
import { ResetPasswordForm } from "./components/auth/ResetPasswordForm";
import { ForgotPasswordForm } from "./components/auth/ForgotPasswordForm";
import { VerifyEmailForm } from "./components/auth/VerifyEmailForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { CreatePostPage } from "./pages/CreatePostPage";
import { LibraryPage } from "./pages/LibraryPage";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { HomePage } from "./pages/HomePage";
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
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostDetailsPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
