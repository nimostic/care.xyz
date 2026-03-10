// app/not-found.js
import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fcfdfe] flex items-center justify-center px-6">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="w-24 h-24 bg-teal-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm border border-teal-100">
          <SearchX size={44} className="text-teal-600" />
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-black text-slate-900 leading-none mb-2">
          4<span className="text-teal-600">0</span>4
        </h1>

        {/* Text */}
        <h2 className="text-2xl font-bold text-slate-800 mt-4 mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-500 text-base leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-teal-600 hover:bg-slate-900 text-white font-bold rounded-xl transition-all shadow-md shadow-teal-100 active:scale-95"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-200 transition-all active:scale-95"
          >
            View Services
          </Link>
        </div>

      </div>
    </main>
  );
}