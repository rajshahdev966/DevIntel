import React, { useEffect, useState } from "react";
import { Search, ChevronDown, FileCode } from "lucide-react";
import { getGithubRepos } from "../../api/repoApi";
import { useSelector } from "react-redux";
import { useRepoTable } from "../../hooks/useRepoTable";
import RepoDetailModal from "./RepoDetailModal";

export const RepositoriesTable = () => {
  const { repos, formatDate, copyGithubLink, navigate } = useRepoTable();

  const [selectedRepo, setselectedRepo] = useState(null);
  console.log("dv fbhjsbdhjf", selectedRepo);
  

  return (
    <section className="space-y-4">
      {/* Dialog with glassmorphism backdrop */}
      {selectedRepo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-all animate-in fade-in duration-200"
          onClick={() => setselectedRepo(null)}
        >
          <div 
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <RepoDetailModal 
              isOpen={Boolean(selectedRepo)} 
              onClose={() => setselectedRepo(null)} 
              selectedRepo={selectedRepo}
            />
          </div>
        </div>
      )}
      {/* Filter and Search Bar Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-content-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Filter repositories..."
            className="w-full bg-surface-card border border-border-main rounded-xl pl-10 pr-4 py-2 text-xs text-content-main placeholder:text-content-muted focus:outline-none focus:border-brand-blue transition-colors"
            readOnly
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Language Filter */}
          <button
            type="button"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-content-secondary bg-surface-card border border-border-main rounded-xl hover:border-border-light hover:text-content-main transition-colors"
          >
            <span>Language: All</span>
            <ChevronDown className="w-3.5 h-3.5 text-content-muted" />
          </button>

          {/* Status Filter */}
          <button
            type="button"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-content-secondary bg-surface-card border border-border-main rounded-xl hover:border-border-light hover:text-content-main transition-colors"
          >
            <span>Status: All</span>
            <ChevronDown className="w-3.5 h-3.5 text-content-muted" />
          </button>

          {/* Sort Filter */}
          <button
            type="button"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-content-secondary bg-surface-card border border-border-main rounded-xl hover:border-border-light hover:text-content-main transition-colors"
          >
            <span>Sort by: Stars</span>
            <ChevronDown className="w-3.5 h-3.5 text-content-muted" />
          </button>
        </div>
      </div>

      {/* Repositories Table Card */}
      <div className="bg-surface-card border border-border-main rounded-2xl overflow-hidden transition-colors duration-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-main text-[11px] font-semibold text-content-muted uppercase tracking-wider bg-surface-card-subtle/50">
                <th scope="col" className="py-3 px-5">
                  Repository
                </th>
                <th scope="col" className="py-3 px-5 text-center">
                  Language
                </th>
                <th scope="col" className="py-3 px-5 text-center">
                  Stars
                </th>
                <th scope="col" className="py-3 px-5 text-center">
                  Forks
                </th>
                <th scope="col" className="py-3 px-5 text-center">
                  Last Updated
                </th>
                <th scope="col" className="py-3 px-5 text-center">
                  Clone Links
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main text-xs">
              {repos?.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-surface-hover/60 transition-colors group"
                >
                  {/* Repository Name */}
                  <td className="py-3.5 px-5 cursor-pointer" onClick={()=> setselectedRepo(row.name)}>
                    <div className="flex items-center gap-2.5">
                      <FileCode className="w-4 h-4 text-content-muted group-hover:text-brand-blue transition-colors" />
                      <span className="font-semibold text-content-main group-hover:text-brand-blue transition-colors">
                        {row.name}
                      </span>
                    </div>
                  </td>

                  {/* Language */}
                  <td className="py-3.5 px-5 ">
                    <span
                      className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border w-full `}
                    >
                      {row.language ?? "-"}
                    </span>
                  </td>

                  {/* Stars */}
                  <td className="py-3.5 px-5 font-medium text-content-secondary text-center">
                    {row.stargazers_count}
                  </td>

                  {/* Forks */}
                  <td className="py-3.5 px-5 font-medium text-content-secondary text-center">
                    {row.forks_count}
                  </td>

                  {/* Last Updated */}
                  <td className="py-3.5 px-5 text-content-muted text-center">
                    {formatDate(row.updated_at)}
                  </td>

                  {/* Health Status */}
                  <td className="py-3.5 px-5 text-center">
                    <button
                      className={`cursor-pointer inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-semibold border justify-center`}
                      onClick={() => copyGithubLink(row.clone_url)}
                    >
                      Copy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Pagination Footer */}
       
        </div>
    </section>
  );
};

export default RepositoriesTable;
