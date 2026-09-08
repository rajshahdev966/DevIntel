import React from 'react'
import {
  Check,
  Moon,
  Sun,
  Laptop,
  RotateCw,
  AlertTriangle
} from 'lucide-react'

export const SettingsPage = () => {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      <main className="flex-1 p-6 md:p-8 space-y-6 max-w-5xl w-full mx-auto">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-main">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-content-main">
              Settings
            </h1>
            <p className="text-sm text-content-secondary mt-1">
              Manage workspace theme preferences and your linked GitHub account identity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-content-main bg-surface-card-subtle border border-border-main hover:bg-surface-hover hover:border-border-light transition-colors"
            >
              Discard
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm shadow-blue-500/20 active:scale-[0.98] transition-all"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

        {/* Section 1: Appearance */}
        <section className="bg-surface-card border border-border-main rounded-2xl p-6 space-y-6 transition-colors duration-200">
          <div>
            <h2 className="text-base font-semibold text-content-main">
              Appearance
            </h2>
            <p className="text-xs text-content-secondary mt-0.5">
              Customize how the DevIntel workspace looks on your device.
            </p>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-content-muted tracking-wider uppercase block mb-3">
              Interface Theme
            </span>

            {/* 3 Theme Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Option 1: System Default */}
              <div className="bg-surface-card-inner border border-border-main rounded-xl p-4 flex flex-col justify-between h-28 hover:border-border-light cursor-pointer transition-colors group">
                <div className="flex items-center justify-between">
                  <Laptop className="w-5 h-5 text-content-muted group-hover:text-content-main transition-colors" />
                  <div className="w-4 h-4 rounded-full border border-border-light bg-transparent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-content-main">
                    System default
                  </p>
                  <p className="text-[11px] text-content-muted mt-0.5">
                    Sync with OS theme
                  </p>
                </div>
              </div>

              {/* Option 2: Dark (Active in Screenshot) */}
              <div className="bg-surface-card-inner border-2 border-blue-500/60 rounded-xl p-4 flex flex-col justify-between h-28 cursor-pointer shadow-sm relative">
                <div className="flex items-center justify-between">
                  <Moon className="w-5 h-5 text-blue-400" />
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-blue-500/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-content-main">
                    Dark
                  </p>
                  <p className="text-[11px] text-content-muted mt-0.5">
                    High-contrast dark mode
                  </p>
                </div>
              </div>

              {/* Option 3: Light */}
              <div className="bg-surface-card-inner border border-border-main rounded-xl p-4 flex flex-col justify-between h-28 hover:border-border-light cursor-pointer transition-colors group">
                <div className="flex items-center justify-between">
                  <Sun className="w-5 h-5 text-content-muted group-hover:text-amber-400 transition-colors" />
                  <div className="w-4 h-4 rounded-full border border-border-light bg-transparent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-content-main">
                    Light
                  </p>
                  <p className="text-[11px] text-content-muted mt-0.5">
                    Clean, daytime contrast
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Display Toggles */}
          <div className="space-y-4 pt-4 border-t border-border-main">
            {/* Toggle 1: High Contrast Elements */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-content-main">
                  High Contrast Elements
                </p>
                <p className="text-[11px] text-content-secondary mt-0.5">
                  Enhance borders and text clarity across telemetry views.
                </p>
              </div>

              {/* Switch Active */}
              <button
                type="button"
                className="w-10 h-5 bg-blue-600 rounded-full p-0.5 flex items-center justify-end shadow-inner cursor-pointer"
                aria-label="Toggle High Contrast Elements"
              >
                <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
              </button>
            </div>

            {/* Toggle 2: Dense Code & Table View */}
            <div className="flex items-center justify-between gap-4 pt-3 border-t border-border-main/50">
              <div>
                <p className="text-xs font-semibold text-content-main">
                  Dense Code &amp; Table View
                </p>
                <p className="text-[11px] text-content-secondary mt-0.5">
                  Reduces padding for logs, diffs, and metric lists.
                </p>
              </div>

              {/* Switch Inactive */}
              <button
                type="button"
                className="w-10 h-5 bg-slate-700/60 border border-border-main rounded-full p-0.5 flex items-center justify-start cursor-pointer"
                aria-label="Toggle Dense Code & Table View"
              >
                <div className="w-4 h-4 rounded-full bg-slate-400 shadow-sm" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: GitHub Account */}
        <section className="bg-surface-card border border-border-main rounded-2xl p-6 space-y-5 transition-colors duration-200">
          <div>
            <h2 className="text-base font-semibold text-content-main">
              GitHub Account
            </h2>
            <p className="text-xs text-content-secondary mt-0.5">
              Manage your connected GitHub identity and telemetry sync.
            </p>
          </div>

          {/* Connected User Card */}
          <div className="bg-surface-card-inner border border-border-main rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              {/* Avatar with Status Dot */}
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                  alt="Siddharth Sharma"
                  className="w-11 h-11 rounded-xl object-cover ring-1 ring-border-light"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-blue-500 ring-2 ring-surface-card-inner" />
              </div>

              {/* Account Identity */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-content-main">
                    Siddharth Sharma
                  </span>
                  <span className="text-xs text-content-muted">
                    @siddharth-dev
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Connected &amp; Verified</span>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-content-muted">
                  <RotateCw className="w-3.5 h-3.5 text-content-muted" />
                  <span>Active sync: acme-systems-core</span>
                </div>
              </div>
            </div>

            {/* Re-authenticate Action */}
            <button
              type="button"
              className="self-start sm:self-auto px-4 py-2 text-xs font-semibold text-content-main bg-surface-card-subtle border border-border-main rounded-xl hover:bg-surface-hover hover:border-border-light transition-colors"
            >
              Re-authenticate
            </button>
          </div>

          {/* Disconnect Option */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border-main">
            <div>
              <p className="text-xs font-semibold text-content-main">
                Disconnect Account
              </p>
              <p className="text-[11px] text-content-secondary mt-0.5 max-w-lg">
                Disconnecting will pause telemetry ingestion and sign out this GitHub profile from DevIntel.
              </p>
            </div>

            <button
              type="button"
              className="self-start sm:self-auto px-4 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-xl shadow-sm transition-colors active:scale-[0.98]"
            >
              Disconnect Account
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SettingsPage