import React from "react";

const Skeleton = ({ className = "" }) => (
  <div
    className={`bg-[#162238] animate-pulse rounded ${className}`}
  />
);

const RepoDetailSkeleton = () => {
  return (
    <div className="w-full bg-[#0a0e17] border border-[#1b253b] rounded-2xl p-5 md:p-7 text-slate-100 shadow-2xl space-y-6 font-sans antialiased">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#162032] pb-5">
        <div className="flex flex-wrap items-center gap-3">
          <Skeleton className="w-5 h-5 rounded-md" />

          <div className="flex items-center gap-2">
            <Skeleton className="w-20 h-5" />
            <div className="text-slate-700">/</div>
            <Skeleton className="w-32 h-5" />
          </div>

          <Skeleton className="w-16 h-5 rounded-full" />
        </div>

        <div className="flex items-center gap-2 self-end md:self-auto">
          <Skeleton className="w-32 h-8 rounded-lg" />
          <Skeleton className="w-24 h-8 rounded-lg" />
          <Skeleton className="w-8 h-8 rounded-lg" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#0e1524] border border-[#182338] rounded-xl p-4"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="w-12 h-3" />
              <Skeleton className="w-4 h-4 rounded-md" />
            </div>

            <Skeleton className="w-16 h-6 mt-3" />
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="w-36 h-3" />
            <Skeleton className="w-52 h-2.5 mt-2" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="w-7 h-3" />
            <Skeleton className="w-3 h-3 rounded-sm" />
            <Skeleton className="w-3 h-3 rounded-sm" />
            <Skeleton className="w-3 h-3 rounded-sm" />
            <Skeleton className="w-3 h-3 rounded-sm" />
            <Skeleton className="w-7 h-3" />
          </div>
        </div>

        {/* Fake heatmap */}
        <div className="flex gap-1 overflow-hidden pt-2">
          {Array.from({ length: 70 }).map((_, index) => (
            <div key={index} className="space-y-1 shrink-0">
              {Array.from({ length: 7 }).map((_, row) => (
                <Skeleton
                  key={row}
                  className={`w-2.5 h-2.5 rounded-sm ${
                    (index + row) % 5 === 0
                      ? "opacity-70"
                      : (index + row) % 3 === 0
                      ? "opacity-50"
                      : "opacity-30"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* Language */}
        <div className="lg:col-span-7 space-y-5">
          <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-5 space-y-5">
            <div className="flex items-center justify-between">
              <Skeleton className="w-44 h-3" />
              <Skeleton className="w-16 h-3" />
            </div>

            {/* Language bar */}
            <Skeleton className="w-full h-3 rounded-full" />

            {/* Language legend */}
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-2.5 h-2.5 rounded-full" />
                    <Skeleton className="w-20 h-3" />
                  </div>

                  <Skeleton className="w-12 h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contributors */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-[#0e1524] border border-[#182338] rounded-xl p-5 space-y-4">
            
            <div className="flex items-center justify-between">
              <Skeleton className="w-32 h-3" />
              <Skeleton className="w-24 h-3" />
            </div>

            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <Skeleton className="w-8 h-8 rounded-full" />

                  <div className="flex-1">
                    <Skeleton className="w-24 h-3" />
                    <Skeleton className="w-16 h-2.5 mt-2" />
                  </div>

                  <Skeleton className="w-10 h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#162032]">
        <Skeleton className="w-16 h-7 rounded-lg" />
        <Skeleton className="w-44 h-9 rounded-lg" />
      </div>
    </div>
  );
};

export default RepoDetailSkeleton;