// app/loading.js
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#fcfdfe] flex items-center justify-center">
      <div className="text-center">

        {/* Spinner */}
        <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-teal-100 shadow-sm">
          <Loader2 size={36} className="text-teal-600 animate-spin" />
        </div>

        <h2 className="text-xl font-black text-slate-900 mb-2">Loading...</h2>
        <p className="text-slate-400 text-sm font-medium">Please wait a moment</p>

      </div>
    </main>
  );
}