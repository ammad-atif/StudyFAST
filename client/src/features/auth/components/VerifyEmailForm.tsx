import React, { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export const VerifyEmailForm = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Handle Input Logic
  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (isNaN(Number(value))) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Focus Next: If value is entered, move to next box
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    console.log("Verifying OTP:", finalOtp);
    // Submit to your API here
  };

  return (
    <>
      {/* Verification Card */}

      <div className="text-center mb-10">
        <h2 className="text-[26px] font-extrabold text-primary mb-3 tracking-tight">
          Verify Your Email
        </h2>
        <p className="text-slate-blue text-[15px] leading-relaxed">
          Enter the 6-digit confirmation code sent to your university email:{" "}
          <br />
          <span className="font-bold text-primary mt-1 inline-block italic">
            22L-6653@nu.edu.pk
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* OTP Input Grid */}
        <div className="flex justify-between gap-2">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => {
                inputRefs.current[index] = el!;
              }}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              placeholder="0"
              className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold border-b-2 border-slate-200 bg-transparent focus:border-primary transition-all duration-200 outline-none placeholder:text-slate-200"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/10 active:scale-[0.98] cursor-pointer"
        >
          Verify Account
        </button>
      </form>

      <div className="mt-10 flex flex-col items-center gap-5 text-sm">
        <p className="text-slate-blue font-medium">
          Didn't receive the code?{" "}
          <span className="font-bold text-primary hover:underline cursor-pointer">
            Resend in 28s
          </span>
        </p>
      </div>

      {/* Back to Login */}
      <div className="flex justify-center">
        <Link to="/login">
          <button className="mt-8 text-slate-blue font-bold hover:text-primary transition-all flex items-center gap-2 text-sm group cursor-pointer">
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Login
          </button>
        </Link>
      </div>
    </>
  );
};
