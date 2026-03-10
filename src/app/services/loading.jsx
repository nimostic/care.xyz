import ServiceCardSkeleton from "@/components/skeleton/ServiceCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <ServiceCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;
