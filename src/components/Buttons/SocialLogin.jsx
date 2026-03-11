"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
export default function SocialLogin() {
  const params = useSearchParams();

  const handleGoogleSignIn = async () => {
    try {
      // id: "google-login" দেওয়ার কারণ হলো loading toast আর error/success toast একই জায়গায় দেখাবে, duplicate হবে না। 
      toast.loading("Redirecting to Google...", { id: "google-login" }); 

      const result = await signIn("google", {
        callbackUrl: params.get("callbackUrl") || "/",
        prompt: "select_account",
      });

      if (result?.error) {
        toast.error("Google login failed. Try again!", { id: "google-login" });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: "google-login" });
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 py-4 rounded-2xl font-bold text-slate-700 transition-all border border-slate-200 mb-6"
    >
       <FcGoogle size={22} /> Login with Google
    </button>
  );
}