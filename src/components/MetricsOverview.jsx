import React from 'react'
import { Code2, Star, GitFork, Users, Clock } from 'lucide-react'

export const MetricsOverview = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {/* 1. Repositories */}
      <div className="bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">Repositories</span>
          <Code2 className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            42
          </span>
          <span className="px-2 py-0.5 text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full whitespace-nowrap">
            +2 this mo
          </span>
        </div>
      </div>

      {/* 2. Total Stars */}
      <div className="bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">Total Stars</span>
          <Star className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            14.8k
          </span>
          <span className="px-2 py-0.5 text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full whitespace-nowrap">
            +12%
          </span>
        </div>
      </div>

      {/* 3. Forks */}
      <div className="bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">Forks</span>
          <GitFork className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            2.4k
          </span>
          <span className="px-2 py-0.5 text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full whitespace-nowrap">
            +6%
          </span>
        </div>
      </div>

      {/* 4. Followers */}
      <div className="bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">Followers</span>
          <Users className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            8.9k
          </span>
          <span className="px-2 py-0.5 text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full whitespace-nowrap">
            +340
          </span>
        </div>
      </div>

      {/* 5. Account Age */}
      <div className="col-span-2 md:col-span-1 bg-surface-card border border-border-main rounded-2xl p-4 flex flex-col justify-between hover:border-border-light transition-colors">
        <div className="flex items-center justify-between text-content-secondary mb-3">
          <span className="text-xs font-medium">Account Age</span>
          <Clock className="w-4 h-4 text-content-muted" />
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-2xl font-bold tracking-tight text-content-main">
            7 Years
          </span>
          <span className="text-xs font-medium text-content-muted whitespace-nowrap">
            Since 2017
          </span>
        </div>
      </div>
    </section>
  )
}

export default MetricsOverview
