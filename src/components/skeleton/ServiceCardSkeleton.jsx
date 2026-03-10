// ServiceCardSkeleton.jsx
"use client";

import { motion } from "framer-motion";

const SkeletonBox = ({ className }) => (
  <motion.div
    className={`rounded-lg ${className}`}
    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
    style={{
      background: "linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%)",
      backgroundSize: "400% 100%",
    }}
  />
);

export default function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
      {/* Image area */}
      <div className="relative h-56 w-full">
        <SkeletonBox className="h-full w-full rounded-none" />
        {/* Icon badge */}
        <div className="absolute top-4 left-4 bg-white/90 p-2.5 rounded-2xl shadow-sm">
          <SkeletonBox className="h-6 w-6 rounded-md" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <SkeletonBox className="h-5 w-3/4 rounded-md mb-2" />

        {/* Description lines */}
        <SkeletonBox className="h-3.5 w-full rounded mb-1.5" />
        <SkeletonBox className="h-3.5 w-2/3 rounded mb-6" />

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <div className="space-y-1.5">
            <SkeletonBox className="h-2.5 w-20 rounded" />
            <SkeletonBox className="h-6 w-16 rounded-md" />
          </div>
          <SkeletonBox className="h-9 w-20 rounded-xl" />
        </div>
      </div>
    </div>
  );
}