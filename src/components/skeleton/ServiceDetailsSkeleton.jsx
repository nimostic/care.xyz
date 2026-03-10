// app/services/[id]/loading.js
export default function ServiceDetailsSkeleton() {
  const SkeletonBox = ({ className }) => (
    <div
      className={`rounded-lg ${className}`}
      style={{
        background: "linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%)",
        backgroundSize: "400% 100%",
        animation: "shimmer 1.8s infinite linear",
      }}
    />
  );

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <main className="min-h-screen bg-[#fcfdfe] pb-10">

        {/* Banner */}
        <div className="relative h-64 md:h-96 w-full">
          <SkeletonBox className="h-full w-full rounded-none" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 -mt-24 md:-mt-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100">

                {/* Icon + Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <SkeletonBox className="w-16 h-16 rounded-2xl shrink-0" />
                  <SkeletonBox className="h-10 w-72 rounded-xl" />
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  <SkeletonBox className="h-4 w-full rounded" />
                  <SkeletonBox className="h-4 w-full rounded" />
                  <SkeletonBox className="h-4 w-3/4 rounded" />
                </div>

                {/* Features heading */}
                <SkeletonBox className="h-5 w-32 rounded mb-4" />

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <SkeletonBox className="w-5 h-5 rounded-full shrink-0" />
                      <SkeletonBox className="h-3.5 w-full rounded" />
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Right — Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 sticky top-6">

                {/* Title */}
                <SkeletonBox className="h-6 w-40 rounded mb-6 pb-4" />
                <div className="border-b border-slate-200 mb-6" />

                {/* Rows */}
                <div className="space-y-5 mb-8">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <SkeletonBox className="h-4 w-28 rounded" />
                      <SkeletonBox className="h-6 w-20 rounded-lg" />
                    </div>
                  ))}
                </div>

                {/* Button */}
                <SkeletonBox className="h-14 w-full rounded-2xl mt-4" />

                {/* Note */}
                <SkeletonBox className="h-3 w-48 rounded mx-auto mt-4" />

              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}