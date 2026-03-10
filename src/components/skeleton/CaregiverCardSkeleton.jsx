// CaregiverCardSkeleton.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
  },
  transition: {
    duration: 1.8,
    repeat: Infinity,
    ease: "linear",
  },
};

const SkeletonBox = ({ className }) => (
  <motion.div
    className={`rounded-lg bg-slate-200 ${className}`}
    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
    style={{
      background: "linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%)",
      backgroundSize: "400% 100%",
    }}
  />
);

const CaregiverCardSkeleton = () => (
  <div className="bg-white rounded-4xl p-6 border border-slate-100 shadow-sm">
    {/* Image area */}
    <SkeletonBox className="w-full h-64 rounded-2xl mb-5" />

    <div className="space-y-3">
      {/* Name + rating row */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <SkeletonBox className="h-5 w-36 rounded-md" />
          <SkeletonBox className="h-3.5 w-24 rounded-md" />
        </div>
        <SkeletonBox className="h-7 w-14 rounded-lg" />
      </div>

      {/* Experience + location row */}
      <div className="flex items-center gap-4">
        <SkeletonBox className="h-3.5 w-20 rounded-md" />
        <SkeletonBox className="h-3.5 w-16 rounded-md" />
      </div>

      {/* Price + button row */}
      <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
        <div className="space-y-1.5">
          <SkeletonBox className="h-2.5 w-20 rounded" />
          <SkeletonBox className="h-6 w-16 rounded-md" />
        </div>
        <SkeletonBox className="h-10 w-28 rounded-xl" />
      </div>
    </div>
  </div>
);

export default CaregiverCardSkeleton;