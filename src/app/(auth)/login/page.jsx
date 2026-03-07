"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { Mail, Lock, Chrome, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // NextAuth Credentials Login
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/my-booking", // লগইন সফল হলে এখানে যাবে
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900">Welcome <span className="text-teal-600">Back</span></h1>
          <p className="text-slate-500 font-medium mt-2">Login to manage your care bookings</p>
        </div>

        {/* Google Login Button */}
        <button 
          onClick={() => signIn("google", { callbackUrl: "/my-bookings" })}
          className="w-full flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 py-4 rounded-2xl font-bold text-slate-700 transition-all border border-slate-200 mb-6"
        >
          <Chrome size={20} className="text-teal-600" /> Login with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-slate-200 flex-1" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">OR</span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
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
            <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
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
            Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-center mt-8 text-slate-500 font-medium">
          Don't have an account? <Link href="/register" className="text-teal-600 font-bold hover:underline">Create Account</Link>
        </p>
      </div>
    </main>
  );
}