import React from 'react'
import { TrendingUp, ArrowRight } from 'lucide-react'

export const HealthScoreCard = () => {
  return (
    <div className="bg-surface-card border border-border-main rounded-2xl p-6 flex flex-col justify-between transition-colors duration-200">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <h2 className="text-base font-semibold text-content-main">
            Developer Health Score
          </h2>
          <span className="px-2.5 py-0.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-md">
            Grade A+
          </span>
        </div>

        {/* Big Score Display */}
        <div className="flex items-baseline gap-3 mb-6">
          <div className="flex items-baseline gap-1.5">
            <span className="text-5xl font-black tracking-tight text-content-main">
              94
            </span>
            <span className="text-sm font-medium text-content-muted">
              / 100
            </span>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <TrendingUp className="w-3 h-3" />
            <span>+3 pts</span>
          </span>
        </div>

        {/* Detailed Metrics Progress Bars */}
        <div className="space-y-4">
          {/* Activity */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-content-secondary">Activity</span>
              <span className="text-content-main font-semibold">96%</span>
            </div>
            <div className="h-2 w-full bg-surface-card-subtle rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-blue rounded-full transition-all duration-500"
                style={{ width: '96%' }}
              />
            </div>
          </div>

          {/* Maintenance */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-content-secondary">Maintenance</span>
              <span className="text-content-main font-semibold">92%</span>
            </div>
            <div className="h-2 w-full bg-surface-card-subtle rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-blue rounded-full transition-all duration-500"
                style={{ width: '92%' }}
              />
            </div>
          </div>

          {/* Documentation */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-content-secondary">Documentation</span>
              <span className="text-content-main font-semibold">96%</span>
            </div>
            <div className="h-2 w-full bg-surface-card-subtle rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-blue rounded-full transition-all duration-500"
                style={{ width: '96%' }}
              />
            </div>
          </div>

          {/* Community */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-content-secondary">Community</span>
              <span className="text-content-main font-semibold">93%</span>
            </div>
            <div className="h-2 w-full bg-surface-card-subtle rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-blue rounded-full transition-all duration-500"
                style={{ width: '93%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 mt-6 border-t border-border-main flex items-center justify-between text-xs">
        <span className="text-content-muted">Last audit: 2 hours ago</span>
        <a
          href="#rubric"
          className="inline-flex items-center gap-1 font-semibold text-content-main hover:text-brand-blue transition-colors group"
        >
          <span>View full rubric</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  )
}

export default HealthScoreCard
