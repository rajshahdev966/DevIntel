import React from 'react'

export const ActivityChartCard = () => {
  // 12 weeks mock data for purely presentational stacked bars
  const weeks = [
    { label: 'W1', commitH: 26, prH: 18 },
    { label: 'W2', commitH: 30, prH: 16 },
    { label: 'W3', commitH: 32, prH: 20 },
    { label: 'W4', commitH: 28, prH: 18 },
    { label: 'W5', commitH: 34, prH: 15 },
    { label: 'W6', commitH: 30, prH: 22 },
    { label: 'W7', commitH: 32, prH: 16 },
    { label: 'W8', commitH: 28, prH: 18 },
    { label: 'W9', commitH: 35, prH: 20 },
    { label: 'W10', commitH: 32, prH: 18 },
    { label: 'W11', commitH: 34, prH: 20 },
    { label: 'W12', commitH: 38, prH: 24 },
  ]

  return (
    <div className="pt-6 border-t border-border-main">
      {/* Header with Legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <h3 className="text-sm font-semibold text-content-main">
          Activity Intelligence (Last 12 Weeks)
        </h3>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-300 [[data-theme=light]_&]:bg-blue-600 [:root:has(#theme-toggle:checked)_&]:bg-blue-600" />
            <span className="text-content-secondary font-medium">Commits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-500 [[data-theme=light]_&]:bg-slate-400 [:root:has(#theme-toggle:checked)_&]:bg-slate-400" />
            <span className="text-content-secondary font-medium">PRs</span>
          </div>
        </div>
      </div>

      {/* 12-Week Stacked Bar Chart */}
      <div className="grid grid-cols-12 gap-2 sm:gap-3 items-end h-24 pt-2">
        {weeks.map((w, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1.5 group">
            {/* Stacked Bars Container */}
            <div className="w-full flex flex-col justify-end items-center gap-1 h-18">
              {/* Commits Bar (Top) */}
              <div
                style={{ height: `${w.commitH}px` }}
                className="w-full rounded-t-sm bg-blue-300/80 [[data-theme=light]_&]:bg-blue-500 [:root:has(#theme-toggle:checked)_&]:bg-blue-500 group-hover:brightness-110 transition-all"
                title={`${w.label} Commits`}
              />
              {/* PRs Bar (Bottom) */}
              <div
                style={{ height: `${w.prH}px` }}
                className="w-full rounded-b-sm bg-slate-600 [[data-theme=light]_&]:bg-slate-300 [:root:has(#theme-toggle:checked)_&]:bg-slate-300 group-hover:brightness-110 transition-all"
                title={`${w.label} PRs`}
              />
            </div>
            {/* Week Label */}
            <span className="text-[10px] text-content-muted font-medium">
              {w.label}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Metrics */}
      <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-content-muted pt-2">
        <span>Peak velocity: Week 12 (142 contributions)</span>
        <span>Average: 93 / week</span>
      </div>
    </div>
  )
}

export default ActivityChartCard
