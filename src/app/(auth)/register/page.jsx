"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Lock, ShieldCheck, CreditCard, Phone } from "lucide-react";
import { postUser } from "@/actions/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import Lottie from "lottie-react";
import registerAnimation from "@/../public/animations/register.json";

const registerSchema = z
  .object({
    nid: z
      .string()
      .regex(
        /^[0-9]{10}$|^[0-9]{13}$|^[0-9]{17}$/,
        "NID must be 10, 13 or 17 digits",
      ),
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    contact: z
      .string()
      .regex(/^(?:\+88)?01[3-9]\d{8}$/, "Invalid Bangladeshi phone number"),
    password: z
      .string()
      .min(6, "Min 6 characters")
      .regex(/[A-Z]/, "Must contain uppercase letter")
      .regex(/[a-z]/, "Must contain lowercase letter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Field = ({
  label,
  name,
  type = "text",
  placeholder,
  Icon,
  register,
  errors,
}) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
    <div className="relative">
      <Icon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="w-full bg-slate-50 border-none rounded-xl px-12 py-4 focus:ring-2 focus:ring-teal-500/20 outline-none font-medium"
      />
    </div>
    {errors[name] && (
      <p className="text-xs text-rose-500 font-medium ml-1">
        {errors[name].message}
      </p>
    )}
  </div>
);

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await postUser(data);
      if (result?.success) {
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });
        toast.success("Registration successful!");
        router.push(callbackUrl);
      } else {
        toast.error(result?.message || "Something went wrong!");
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — Animation */}
          <div className="hidden md:flex flex-col items-center justify-center bg-teal-50 p-10">
            <Lottie
              animationData={registerAnimation}
              loop={true}
              className="w-72 h-72"
            />
            <h2 className="text-xl font-black text-teal-700 mt-4 text-center">
              Join Our Care Community
            </h2>
            <p className="text-teal-600 text-sm text-center mt-2 font-medium">
              Trusted by 2000+ families in Bangladesh
            </p>
          </div>

          {/* Right — Form */}
          <div className="p-8 md:p-12 overflow-y-auto max-h-screen">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-slate-900">
                Create <span className="text-teal-600">Account</span>
              </h1>
              <p className="text-slate-500 font-medium mt-2">
                Join our care community today.
              </p>
            </div>

            {/* Mobile animation */}
            <div className="flex md:hidden justify-center mb-6">
              <Lottie
                animationData={registerAnimation}
                loop={true}
                className="w-28 h-28"
              />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Field
                label="NID Number"
                name="nid"
                type="number"
                placeholder="10, 13 or 17 digit NID"
                Icon={CreditCard}
                register={register}
                errors={errors}
              />
              <Field
                label="Full Name"
                name="name"
                placeholder="John Doe"
                Icon={User}
                register={register}
                errors={errors}
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="name@example.com"
                Icon={Mail}
                register={register}
                errors={errors}
              />
              <Field
                label="Contact Number"
                name="contact"
                type="tel"
                placeholder="01XXXXXXXXX"
                Icon={Phone}
                register={register}
                errors={errors}
              />
              <Field
                label="Password"
                name="password"
                type="password"
                placeholder="Min 6 characters"
                Icon={Lock}
                register={register}
                errors={errors}
              />
              <Field
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                Icon={Lock}
                register={register}
                errors={errors}
              />

              <div className="flex items-center gap-2 p-4 bg-teal-50/50 rounded-xl border border-teal-100">
                <ShieldCheck size={16} className="text-teal-600 shrink-0" />
                <p className="text-[10px] text-slate-600 font-medium leading-tight">
                  By clicking Register, you agree to our Terms and Privacy
                  Policy.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-teal-600 text-white py-4 rounded-2xl font-black transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Registering..." : "Register Now"}
              </button>
            </form>

            <p className="text-center mt-6 text-slate-500 font-medium">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-teal-600 font-bold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
