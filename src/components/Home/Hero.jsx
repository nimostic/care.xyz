"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Search,
  Star,
  Users,
  ShieldCheck,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import services from "../../../public/data/services.json";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-12 pb-20 lg:pt-24 lg:pb-32">
      {/* Background Decorative Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-75 h-75 md:w-150 md:h-150 bg-teal-100 blur-[120px] opacity-50 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-6">
              <ShieldCheck size={16} />
              <span>Verified & Trusted Caregivers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15]">
              Find Professional Care for
              <span className="block text-teal-600 mt-2">Your Loved Ones</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Care.xyz connects families with verified caregivers for
              babysitting, elderly care, and patient support—making caregiving
              safe and simple.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/services"
                className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold shadow-lg shadow-teal-200 hover:bg-teal-700 transition-all scale-100 active:scale-95"
              >
                Book a Caregiver
              </Link>
              <Link
                href="/caregivers"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm"
              >
                Browse Caregivers
              </Link>
            </div>

            {/* TRUST STATS */}
            <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-8 border-t border-slate-200 pt-8 max-w-lg mx-auto lg:mx-0">
              {/* Caregivers */}
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-4xl font-black text-slate-900">
                  <AnimatedCounter value={500} />+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
                  Caregivers
                </p>
              </div>

              {/* Vertical Divider (Hidden on mobile) */}
              <div className="hidden sm:block w-px h-12 bg-slate-200 self-center" />

              {/* Families */}
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-4xl font-black text-slate-900">
                  <AnimatedCounter value={2} />
                  K+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
                  Families
                </p>
              </div>

              {/* Vertical Divider (Hidden on mobile) */}
              <div className="hidden sm:block w-px h-12 bg-slate-200 self-center" />

              {/* Rating */}
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-4xl font-black text-slate-900 flex items-center justify-center lg:justify-start gap-1">
                  <AnimatedCounter value={4.8} decimals={1} />
                  <span className="text-amber-400 text-xl sm:text-2xl">★</span>
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
                  Rating
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL - Booking Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Soft backdrop blur for a "Glass" effect */}
            <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl shadow-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Quick Booking
              </h3>

              <div className="space-y-4">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <select
                    defaultValue=""
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>

                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Your location"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                  />
                </div>

                <button className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-100 hover:bg-teal-700 transition-all mt-2">
                  Find Available Care
                </button>

                <p className="text-center text-xs text-slate-400 font-medium">
                  Secure & verified caregivers only
                </p>
              </div>
            </div>

            {/* Decorative Floating Elements (Desktop only) */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-45">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Active Now</p>
                  <p className="text-[10px] text-slate-500">
                    12 Caregivers online
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
