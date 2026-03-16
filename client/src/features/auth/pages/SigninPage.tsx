import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, type SigninFormData } from "../schemas/signinSchema";
import { Input } from "../../../components/Input";
import { Mail, Lock } from "lucide-react";

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (data: SigninFormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <main className="bg-background-light min-h-screen flex flex-col font-sans">
      <section className="flex-1 flex items-center justify-center p-4">
        {/* Card Container */}
        <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Login to StudyFAST
            </h1>
            <p className="text-gray-500 text-sm">
              Welcome back to our academic community
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Email Address"
              icon={<Mail className="w-4 h-4 text-slate-blue" />}
              type="email"
              placeholder="Enter your email address"
              error={errors.email?.message}
              {...register("email")}
            />

            <div>
              <Input
                label="Password"
                icon={<Lock className="w-4 h-4 text-slate-blue" />}
                type="password"
                placeholder="••••••••"
                error={errors.password?.message}
                {...register("password")}
              />
              <button
                type="button"
                className="text-sm font-bold text-gray-900 mt-3 hover:text-gray-700 transition-colors cursor-pointer hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-4">
              <button
                disabled={isSubmitting}
                className="w-full bg-[#111827] text-white font-bold py-4 rounded-xl hover:bg-black transition-all active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed"
                type="submit"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] bg-gray-200 flex-1" />
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  or
                </span>
                <div className="h-[1px] bg-gray-200 flex-1" />
              </div>

              <button
                type="button"
                className="w-full bg-[#F3F4F6] text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98] cursor-pointer"
              >
                Don't have an account? Register
              </button>
            </div>
          </form>

          {/* Legal Links from Screenshot */}
          {/* <div className="mt-10 text-center">
            <p className="text-[11px] text-gray-400 leading-relaxed px-6">
              By continuing, you agree to StudyFAST's{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export { SigninPage };
