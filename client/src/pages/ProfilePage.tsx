import {
  CheckCircle,
  Save,
  Verified,
  X,
  User,
  Mail,
  Phone,
  LayoutDashboard,
} from "lucide-react";
import { useState } from "react";
import { ProfileField } from "../components/profile/ProfileField";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
  const [verified] = useState<boolean>(true);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 bg-background-light">
      {/* Profile Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        {/* Avatar Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          {/* {image} */}
          <div className="relative ">
            <div className="h-28 w-28 rounded-full border-4 border-white overflow-hidden bg-slate-50 shadow-xl">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad"
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            {verified && (
              <div className="absolute bottom-1 right-1 bg-emerald-500 text-white rounded-full p-1.5 border-4 border-white">
                {<CheckCircle size={12} strokeWidth={4} />}
              </div>
            )}
          </div>
          {/* text content */}
          <div className="mt-4">
            <h2 className="text-2xl font-black text-primary tracking-tight">
              Ahmad Hassan
            </h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1 opacity-70">
              22L-6653@nu.edu.pk
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-5">
          {/* {Details} */}
          <div className="space-y-4">
            <ProfileField
              label="Full Name"
              value="Ahmad Hassan"
              icon={<User size={16} />}
            />
            <ProfileField
              label="Email Address"
              value="ahmad.hassan@example.com"
              icon={<Mail size={16} />}
            />
            <ProfileField
              label="Phone Number"
              value="+92 300 1234567"
              icon={<Phone size={16} />}
            />
          </div>

          {/* {Verification Badge} */}

          {verified ? (
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Verified
                  size={22}
                  className="text-emerald-500 fill-emerald-500/10"
                />
                <span className="text-sm font-bold text-emerald-800">
                  You are a Verified Student
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-[9px] font-black bg-emerald-500 text-white tracking-widest">
                VERIFIED
              </span>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-red-50/50 border border-red-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <X size={22} className="text-red-500 fill-red-500/10" />
                <span className="text-sm font-bold text-red-800">
                  You are not a Verified Student
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-[9px] font-black bg-red-500 text-white tracking-widest">
                NOT VERIFIED
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-6 space-y-3 hidden">
            <button className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/10 hover:bg-[#1e293b] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              <Save size={18} />
              Save Changes
            </button>
            <Link
              to="/dashboard"
              className="w-full py-4 bg-secondary text-primary font-black rounded-2xl transition-all hover:bg-border-subtle flex items-center justify-center gap-2"
            >
              <LayoutDashboard size={18} />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
