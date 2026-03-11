"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import SocialLogin from "@/components/Buttons/SocialLogin";
import Lottie from "lottie-react";
import loginAnimation from "@/../public/animations/login.json";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callback = searchParams.get("callbackUrl") || "/";
    console.log(callback)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      toast.error("Invalid email or password!");
      return;
    }

    if (result?.ok) {
      toast.success("Login successful!");
      console.log(callback)
      router.push(callback);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left — Animation */}
          <div className="hidden md:flex flex-col items-center justify-center bg-teal-50 p-10">
            <Lottie
              animationData={loginAnimation}
              loop={true}
              className="w-72 h-72"
            />
            <h2 className="text-xl font-black text-teal-700 mt-4 text-center">
              Trusted Care Services
            </h2>
            <p className="text-teal-600 text-sm text-center mt-2 font-medium">
              Manage your bookings with ease
            </p>
          </div>

          {/* Right — Form */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-black text-slate-900">
                Welcome <span className="text-teal-600">Back</span>
              </h1>
              <p className="text-slate-500 font-medium mt-2">
                Login to manage your care bookings
              </p>
            </div>

            {/* Mobile animation */}
            <div className="flex md:hidden justify-center mb-6">
              <Lottie
                animationData={loginAnimation}
                loop={true}
                className="w-32 h-32"
              />
            </div>

            <SocialLogin />

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-slate-200 flex-1" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                OR
              </span>
              <div className="h-px bg-slate-200 flex-1" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border-none rounded-xl px-12 py-4 focus:ring-2 focus:ring-teal-500/20 outline-none font-medium"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border-none rounded-xl px-12 py-4 focus:ring-2 focus:ring-teal-500/20 outline-none font-medium"
                    required
                  />
                </div>
              </div>

              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl font-black shadow-lg shadow-teal-100 transition-all flex items-center justify-center gap-2 group">
                Sign In
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            <p className="text-center mt-8 text-slate-500 font-medium">
              Don't have an account?{" "}
              <Link
                href={`/register?callbackUrl=${callback}`}
                className="text-teal-600 font-bold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}