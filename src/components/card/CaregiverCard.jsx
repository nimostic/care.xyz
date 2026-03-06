"use client";
import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, MapPin, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

import { Clock } from "lucide-react";
const CaregiverCard = ({ person }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-4xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-5">
      <Image 
        src={person.image} 
        alt={person.name} 
        fill 
        className="object-cover"
      />
      {person.verified && (
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <ShieldCheck size={16} className="text-teal-600" />
          <span className="text-[10px] font-black uppercase text-slate-800 tracking-wider">Verified</span>
        </div>
      )}
    </div>

    <div className="space-y-3">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
          <p className="text-teal-600 text-sm font-medium">{person.speciality}</p>
        </div>
        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-amber-700">{person.rating}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-slate-500 text-xs font-medium">
        <div className="flex items-center gap-1">
          <Clock size={14} /> {person.experience}
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} /> Dhaka
        </div>
      </div>

      <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 block uppercase font-bold">Starting from</span>
          <span className="text-lg font-black text-slate-900">৳{person.price}</span>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-teal-600 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  </motion.div>
);

export default CaregiverCard