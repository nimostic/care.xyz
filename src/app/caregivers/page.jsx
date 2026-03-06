"use client";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import caregivers from "../../../public/data/caregivers.json";
import CaregiverCard from "@/components/card/CaregiverCard";

export default function CaregiversPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(caregivers.map((c) => c.speciality))];

  const filteredCaregivers = useMemo(() => {
    return caregivers.filter((person) => {
      const matchesSearch =
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.speciality.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || person.speciality === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <main className="min-h-screen bg-[#fcfdfe] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight"
          >
            Find Your <span className="text-teal-600">Caregiver</span>
          </motion.h1>
          <p className="text-slate-500 mt-2 text-base sm:text-lg">
            Search and connect with trusted caregivers.
          </p>
        </div>

        {/*  Search & Category */}
        <div className="max-w-md mx-auto mb-12 flex gap-2">
          <input
              type="text"
              placeholder="Type here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
            />
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Caregiver Grid */}
        <div className="relative">
          <AnimatePresence mode="popLayout">
            {filteredCaregivers.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredCaregivers.map((person) => (
                  <motion.div
                    key={person.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <CaregiverCard person={person} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  No results found
                </h3>
                <p className="text-slate-400 text-sm sm:text-base">
                  Try another search or category.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg font-bold shadow hover:bg-teal-700 transition"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
