"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Baby,
  HeartPulse,
  Activity,
  Accessibility,
  Home,
  UserCheck,
} from "lucide-react";
const iconMap = { Baby, HeartPulse, Activity, Accessibility, Home, UserCheck };

export default function ServiceCard({ service, iconName, index }) {
  const SelectedIcon = iconMap[iconName] || Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-teal-100/50 transition-all duration-300"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-2xl shadow-sm text-teal-600">
          <SelectedIcon size={24} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {service.desc}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <div>
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-0.5">
              Price Starts
            </span>
            <span className="text-xl font-black text-slate-900">
              ৳{service.price}
            </span>
          </div>
          <Link
            href={`/services/${service._id}`}
            className="px-5 py-2.5 bg-teal-600 text-white text-xs font-bold rounded-xl hover:bg-slate-900 transition-all shadow-md shadow-teal-100 active:scale-95"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
