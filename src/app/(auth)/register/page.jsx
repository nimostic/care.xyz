"use client";

import Link from "next/link";
import { User, Mail, Lock, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
  const handleRegister = async (e) => {
    e.preventDefault();
    // এখানে আপনার API কল হবে (যেমন: fetch('/api/register', ...))
    console.log("Registration attempted");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900">Create <span className="text-teal-600">Account</span></h1>
          <p className="text-slate-500 font-medium mt-2">Join our care community today</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-slate-50 border-none rounded-xl px-12 py-4 focus:ring-2 focus:ring-teal-500/20 outline-none font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
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
                type="password" 
                placeholder="Min 8 characters"
                className="w-full bg-slate-50 border-none rounded-xl px-12 py-4 focus:ring-2 focus:ring-teal-500/20 outline-none font-medium"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 bg-teal-50/50 rounded-xl border border-teal-100 mb-4">
            <ShieldCheck size={16} className="text-teal-600 shrink-0" />
            <p className="text-[10px] text-slate-600 font-medium leading-tight">
              By clicking Register, you agree to our Terms and Privacy Policy.
            </p>
          </div>

          <button className="w-full bg-slate-900 hover:bg-teal-600 text-white py-4 rounded-2xl font-black transition-all shadow-lg">
            Register Now
          </button>
        </form>

        <p className="text-center mt-8 text-slate-500 font-medium">
          Already have an account? <Link href="/login" className="text-teal-600 font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </main>
  );
}