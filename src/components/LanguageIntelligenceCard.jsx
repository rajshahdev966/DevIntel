import React from 'react'

export const LanguageIntelligenceCard = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <h2 className="text-base font-semibold text-content-main">
          Language Intelligence
        </h2>
        <span className="text-xs text-content-muted font-medium">
          Based on total commit volume
        </span>
      </div>

      {/* Segmented Multi-Color Progress Bar */}
      <div className="h-3 w-full bg-surface-card-subtle rounded-full overflow-hidden flex gap-1 p-0.5 mb-4">
        <div
          className="h-full bg-blue-500 rounded-l-full"
          style={{ width: '46%' }}
          title="TypeScript: 46%"
        />
        <div
          className="h-full bg-orange-500"
          style={{ width: '28%' }}
          title="Rust: 28%"
        />
        <div
          className="h-full bg-cyan-400"
          style={{ width: '16%' }}
          title="Go: 16%"
        />
        <div
          className="h-full bg-yellow-400 rounded-r-full"
          style={{ width: '10%' }}
          title="Python: 8%"
        />
      </div>

      {/* Languages Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        {/* TypeScript */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
          <div className="truncate">
            <span className="font-semibold text-content-main">TypeScript</span>
            <div className="text-content-muted text-[11px]">46% (1.2M LOC)</div>
          </div>
        </div>

        {/* Rust */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />
          <div className="truncate">
            <span className="font-semibold text-content-main">Rust</span>
            <div className="text-content-muted text-[11px]">28% (640k LOC)</div>
          </div>
        </div>

        {/* Go */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
          <div className="truncate">
            <span className="font-semibold text-content-main">Go</span>
            <div className="text-content-muted text-[11px]">16% (450k LOC)</div>
          </div>
        </div>

        {/* Python */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shrink-0" />
          <div className="truncate">
            <span className="font-semibold text-content-main">Python</span>
            <div className="text-content-muted text-[11px]">8% (210k LOC)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageIntelligenceCard
