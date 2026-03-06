"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { ArrowLeft, Activity, Baby, HeartPulse, Accessibility, Home, UserCheck, ShieldCheck } from "lucide-react";
import services from "../../../../public/data/services.json";

// Icon map
const iconMap = {
  Baby: <Baby size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  Activity: <Activity size={24} />,
  Accessibility: <Accessibility size={24} />,
  Home: <Home size={24} />,
  UserCheck: <UserCheck size={24} />,
};

export default function ServiceDetails({ params }) {
  const unwrappedParams = use(params);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const id = parseInt(unwrappedParams.id, 10);
  const service = services.find((s) => s.id === id);

  if (!isMounted) return <div className="min-h-screen bg-white" />;

  if (!service)
    return (
      <div className="h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Service Not Found</h2>
        <Link href="/" className="px-6 py-2 bg-teal-600 text-white rounded-full">
          Back to Home
        </Link>
      </div>
    );

  return (
    <>
      <Head>
        <title>{service.title} | Care Services</title>
      </Head>

      <main className="min-h-screen bg-[#fcfdfe] pb-10">
        {/* Banner */}
        <div className="relative h-64 md:h-96 w-full bg-slate-200">
          {service.image && (
            <Image
              src={service.image.startsWith("/") ? service.image : `${service.image}`}
              alt={service.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
          <Link
            href="/#services"
            className="absolute top-6 left-4 md:left-10 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg text-sm font-bold hover:bg-teal-600 hover:text-white transition-all"
          >
            <ArrowLeft size={16} /> Back
          </Link>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 -mt-24 md:-mt-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Details */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="w-fit p-4 bg-teal-50 text-teal-600 rounded-2xl">
                    {iconMap[service.icon] || <Activity size={24} />}
                  </div>
                  <h1 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">{service.title}</h1>
                </div>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">{service.fullDescription || service.desc}</p>

                <h3 className="font-bold text-slate-900 mb-4 text-lg">Key Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features?.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                      <ShieldCheck size={20} className="text-teal-500 shrink-0" />
                      <span className="text-sm font-semibold">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Pricing Card */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6 border-b border-slate-200 pb-4">Order Summary</h3>

                  <div className="space-y-5 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Service Price</span>
                      <span className="text-2xl font-black text-teal-600">৳{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Availability</span>
                      <span className="text-sm font-bold bg-slate-100 px-3 py-1 rounded-lg">{service.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-medium">Service Level</span>
                      <span className="text-xs bg-teal-500/20 text-teal-600 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">{service.priority}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/booking/${service.id}`}
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg shadow-teal-500/20 text-center mt-4"
                >
                  Confirm Booking
                </Link>
                <p className="text-center text-slate-500 text-xs mt-4">No hidden charges. Secure payment process.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </>
  );
}