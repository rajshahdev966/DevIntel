import React from "react";

const Skeleton = ({ className = "" }) => (
  <div
    className={`bg-[#162238] animate-pulse rounded ${className}`}
  />
);

const RepositoriesTableSkeleton = () => {
  return (
    <section className="space-y-4">
      {/* Filter + Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Skeleton className="w-full h-9 rounded-xl" />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2.5">
          <Skeleton className="w-12 h-3" />
          <Skeleton className="w-44 h-9 rounded-xl" />
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-surface-card border border-border-main rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            {/* Header */}
            <thead>
              <tr className="border-b border-border-main text-[11px] font-semibold bg-surface-card-subtle/50">
                {[
                  "Repository",
                  "Language",
                  "Stars",
                  "Forks",
                  "Last Updated",
                  "Clone Links",
                ].map((_, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={`py-3 px-5 ${
                      index !== 0 ? "text-center" : ""
                    }`}
                  >
                    <Skeleton
                      className={`h-3 ${
                        index === 0
                          ? "w-24"
                          : index === 1
                          ? "w-16 mx-auto"
                          : index === 2
                          ? "w-10 mx-auto"
                          : index === 3
                          ? "w-10 mx-auto"
                          : index === 4
                          ? "w-20 mx-auto"
                          : "w-20 mx-auto"
                      }`}
                    />
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody className="divide-y divide-border-main">
              {Array.from({ length: 30 }).map((_, index) => (
                <tr key={index}>
                  {/* Repository */}
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2.5">
                      <Skeleton className="w-4 h-4 rounded-md shrink-0" />
                      <Skeleton
                        className={`h-3 ${
                          index % 3 === 0
                            ? "w-36"
                            : index % 3 === 1
                            ? "w-48"
                            : "w-28"
                        }`}
                      />
                    </div>
                  </td>

                  {/* Language */}
                  <td className="py-3.5 px-5">
                    <Skeleton className="w-20 h-5 rounded-full mx-auto" />
                  </td>

                  {/* Stars */}
                  <td className="py-3.5 px-5">
                    <Skeleton className="w-8 h-3 mx-auto" />
                  </td>

                  {/* Forks */}
                  <td className="py-3.5 px-5">
                    <Skeleton className="w-8 h-3 mx-auto" />
                  </td>

                  {/* Last Updated */}
                  <td className="py-3.5 px-5">
                    <Skeleton className="w-20 h-3 mx-auto" />
                  </td>

                  {/* Clone */}
                  <td className="py-3.5 px-5">
                    <Skeleton className="w-12 h-5 rounded-full mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 p-3">
          <Skeleton className="w-14 h-7 rounded-lg" />
          <Skeleton className="w-7 h-7 rounded-lg" />
          <Skeleton className="w-14 h-7 rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default RepositoriesTableSkeleton;