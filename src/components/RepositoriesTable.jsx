import React from 'react'
import { Search, ChevronDown, FileCode } from 'lucide-react'

export const RepositoriesTable = () => {
  // Pure presentational data list - no React state or JS business logic
  const repos = [
    {
      name: 'core-engine',
      language: 'TypeScript',
      langClass:
        'bg-[var(--lang-ts-bg)] text-[var(--lang-ts-text)] border-[var(--lang-ts-border)]',
      stars: '8,210',
      forks: '1,140',
      updated: '2 hours ago',
      status: 'Healthy',
      statusClass:
        'bg-[var(--status-healthy-bg)] text-[var(--status-healthy-text)] border-[var(--status-healthy-border)]',
    },
    {
      name: 'sync-protocol',
      language: 'Rust',
      langClass:
        'bg-[var(--lang-rust-bg)] text-[var(--lang-rust-text)] border-[var(--lang-rust-border)]',
      stars: '4,520',
      forks: '620',
      updated: '14 mins ago',
      status: 'Healthy',
      statusClass:
        'bg-[var(--status-healthy-bg)] text-[var(--status-healthy-text)] border-[var(--status-healthy-border)]',
    },
    {
      name: 'distributed-cache',
      language: 'Go',
      langClass:
        'bg-[var(--lang-go-bg)] text-[var(--lang-go-text)] border-[var(--lang-go-border)]',
      stars: '1,890',
      forks: '310',
      updated: '3 days ago',
      status: 'Warning',
      statusClass:
        'bg-[var(--status-warning-bg)] text-[var(--status-warning-text)] border-[var(--status-warning-border)]',
    },
    {
      name: 'edge-router',
      language: 'TypeScript',
      langClass:
        'bg-[var(--lang-ts-bg)] text-[var(--lang-ts-text)] border-[var(--lang-ts-border)]',
      stars: '940',
      forks: '180',
      updated: '5 hours ago',
      status: 'Healthy',
      statusClass:
        'bg-[var(--status-healthy-bg)] text-[var(--status-healthy-text)] border-[var(--status-healthy-border)]',
    },
    {
      name: 'legacy-parser',
      language: 'Python',
      langClass:
        'bg-[var(--lang-py-bg)] text-[var(--lang-py-text)] border-[var(--lang-py-border)]',
      stars: '210',
      forks: '45',
      updated: '6 months ago',
      status: 'Stale',
      statusClass:
        'bg-[var(--status-stale-bg)] text-[var(--status-stale-text)] border-[var(--status-stale-border)]',
    },
  ]

  return (
    <section className="space-y-4">
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
                <th scope="col" className="py-3 px-5">Repository</th>
                <th scope="col" className="py-3 px-5">Language</th>
                <th scope="col" className="py-3 px-5">Stars</th>
                <th scope="col" className="py-3 px-5">Forks</th>
                <th scope="col" className="py-3 px-5">Last Updated</th>
                <th scope="col" className="py-3 px-5">Health Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main text-xs">
              {repos.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-surface-hover/60 transition-colors cursor-pointer group"
                >
                  {/* Repository Name */}
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2.5">
                      <FileCode className="w-4 h-4 text-content-muted group-hover:text-brand-blue transition-colors" />
                      <span className="font-semibold text-content-main group-hover:text-brand-blue transition-colors">
                        {row.name}
                      </span>
                    </div>
                  </td>

                  {/* Language */}
                  <td className="py-3.5 px-5">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${row.langClass}`}
                    >
                      {row.language}
                    </span>
                  </td>

                  {/* Stars */}
                  <td className="py-3.5 px-5 font-medium text-content-secondary">
                    {row.stars}
                  </td>

                  {/* Forks */}
                  <td className="py-3.5 px-5 font-medium text-content-secondary">
                    {row.forks}
                  </td>

                  {/* Last Updated */}
                  <td className="py-3.5 px-5 text-content-muted">
                    {row.updated}
                  </td>

                  {/* Health Status */}
                  <td className="py-3.5 px-5">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${row.statusClass}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Pagination Footer */}
        <div className="py-3.5 px-5 border-t border-border-main flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-content-muted">
            Showing <strong className="text-content-main font-semibold">1-5</strong> of{' '}
            <strong className="text-content-main font-semibold">42</strong> repositories
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="px-3 py-1.5 rounded-lg border border-border-main text-content-muted hover:text-content-main hover:bg-surface-hover transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              className="w-7 h-7 flex items-center justify-center rounded-lg bg-brand-blue text-white font-semibold shadow-sm"
            >
              1
            </button>
            <button
              type="button"
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-border-main text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors font-medium"
            >
              2
            </button>
            <button
              type="button"
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-border-main text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors font-medium"
            >
              3
            </button>
            <button
              type="button"
              className="px-3 py-1.5 rounded-lg border border-border-main text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RepositoriesTable
