import React from 'react'
import { Sparkles, Zap, AlertTriangle, Star, GitFork, AlertCircle, ArrowRight } from 'lucide-react'

export const RepositoryHighlights = () => {
  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-bold text-content-main tracking-tight">
          Repository Insights
        </h2>
        <span className="text-xs text-content-muted font-medium">
          Key telemetry across prioritized projects
        </span>
      </div>

      {/* 3 Featured Repository Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: core-engine */}
        <div className="bg-surface-card border border-border-main rounded-2xl p-5 flex flex-col justify-between hover:border-border-light transition-all">
          <div className="space-y-3">
            {/* Badges Header */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Most Popular</span>
              </span>
              <span className="text-xs font-medium text-content-muted">
                TypeScript
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-base font-bold text-content-main tracking-tight">
                core-engine
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed mt-1.5 line-clamp-2">
                High-performance reactive execution engine designed for
                distributed...
              </p>
            </div>
          </div>

          {/* Footer Metrics & Link */}
          <div className="pt-5 mt-5 border-t border-border-main flex items-center justify-between text-xs">
            <div className="flex items-center gap-3 text-content-muted font-medium">
              <span className="inline-flex items-center gap-1">
                <Star className="w-3.5 h-3.5" />
                <span>8.2k</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5" />
                <span>1.1k</span>
              </span>
            </div>
            <a
              href="#explore-core"
              className="inline-flex items-center gap-1 text-content-main font-semibold hover:text-brand-blue transition-colors group"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Card 2: sync-protocol */}
        <div className="bg-surface-card border border-border-main rounded-2xl p-5 flex flex-col justify-between hover:border-border-light transition-all">
          <div className="space-y-3">
            {/* Badges Header */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <Zap className="w-3.5 h-3.5" />
                <span>Most Active</span>
              </span>
              <span className="text-xs font-medium text-content-muted">Rust</span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-base font-bold text-content-main tracking-tight">
                sync-protocol
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed mt-1.5 line-clamp-2">
                Zero-copy state synchronization protocol optimized for low-latency
                edge...
              </p>
            </div>
          </div>

          {/* Footer Metrics & Link */}
          <div className="pt-5 mt-5 border-t border-border-main flex items-center justify-between text-xs">
            <div className="flex items-center text-content-muted font-medium">
              <span>142 commits/mo</span>
            </div>
            <a
              href="#explore-sync"
              className="inline-flex items-center gap-1 text-content-main font-semibold hover:text-brand-blue transition-colors group"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Card 3: legacy-parser */}
        <div className="bg-surface-card border border-border-main rounded-2xl p-5 flex flex-col justify-between hover:border-border-light transition-all">
          <div className="space-y-3">
            {/* Badges Header */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Needs Attention</span>
              </span>
              <span className="text-xs font-medium text-content-muted">Python</span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-base font-bold text-content-main tracking-tight">
                legacy-parser
              </h3>
              <p className="text-xs text-content-secondary leading-relaxed mt-1.5 line-clamp-2">
                Legacy log ingestion parser module. Inactive for over 6 months
                with pendin...
              </p>
            </div>
          </div>

          {/* Footer Metrics & Link */}
          <div className="pt-5 mt-5 border-t border-border-main flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-amber-400 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>2 CVEs pending</span>
            </div>
            <a
              href="#resolve-legacy"
              className="inline-flex items-center gap-1 text-content-main font-semibold hover:text-brand-blue transition-colors group"
            >
              <span>Resolve</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RepositoryHighlights
