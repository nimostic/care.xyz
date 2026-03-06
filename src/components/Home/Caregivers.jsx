"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

export default function Caregivers() {
  const caregivers = [
    { name: "Sarah Ahmed", role: "Babysitter", rating: "4.9", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" },
    { name: "Rahim Uddin", role: "Elderly Care", rating: "4.8", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" },
    { name: "Fatema Noor", role: "Patient Care", rating: "4.7", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" },
  ];

  return (
    <section className="pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Featured <span className="text-teal-600">Caregivers</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Meet our top-rated, background-checked professionals ready to help your family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caregivers.map((caregiver, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 text-center border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 relative group"
            >
              {/* Profile Image with next/image */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-teal-50 shadow-inner">
                  <Image
                    src={caregiver.image}
                    alt={caregiver.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                  <BadgeCheck className="text-teal-600" size={20} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                {caregiver.name}
              </h3>

              <p className="text-sm font-medium text-slate-500 mb-4">
                {caregiver.role}
              </p>

              <div className="flex items-center justify-center gap-1 bg-teal-50 w-fit mx-auto px-3 py-1 rounded-full text-teal-700 font-bold text-sm">
                <Star size={14} className="fill-teal-700" />
                {caregiver.rating}
              </div>

              <button className="mt-8 w-full py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}