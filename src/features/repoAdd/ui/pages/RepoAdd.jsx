import React from 'react'
import {
  Check,
  CheckSquare,
  Square,
  MapPin,
  Code2,
  Users,
  ShieldCheck,
  KeyRound,
  ArrowRight,
  GitBranch
} from 'lucide-react'

export const RepoAdd = () => {
  return (
    <div className="min-h-screen w-full bg-surface-main flex items-center justify-center p-4 sm:p-6 transition-colors duration-200 selection:bg-blue-600 selection:text-white">
      <div className="max-w-xl w-full bg-surface-card border border-border-main rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl transition-colors duration-200">
        {/* Top Centered Brand Icon */}
        <div className="text-center">
          <div className="w-10 h-10 mx-auto rounded-xl bg-surface-card-inner border border-border-main flex items-center justify-center text-content-main shadow-sm mb-3">
            <GitBranch className="w-5 h-5 text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-content-main">
            Connect your GitHub profile
          </h1>
          <p className="text-xs text-content-secondary max-w-md mx-auto leading-relaxed mt-2">
            DevIntel computes developer health, velocity intelligence, and cross-repository telemetry by analyzing your GitHub commits, PRs, and reviews.
          </p>
        </div>

        {/* Input: GitHub Username */}
        <div>
          <label className="text-[10px] font-semibold text-content-muted uppercase tracking-wider block mb-2">
            GitHub Username or Enterprise ID
          </label>
          <div className="flex items-center justify-between bg-surface-card-inner border border-border-main rounded-xl px-4 py-2.5 focus-within:border-brand-blue transition-colors">
            <input
              type="text"
              value="@siddharth-dev"
              readOnly
              className="text-xs font-semibold text-content-main bg-transparent outline-none flex-1"
            />
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-md shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Verified</span>
            </span>
          </div>
        </div>

        {/* Profile Preview Box */}
        <div className="bg-surface-card-inner border border-border-main rounded-xl p-4 space-y-3.5">
          <div className="flex items-start gap-3.5">
            {/* Avatar with Verified Badge */}
            <div className="relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                alt="Siddharth Sharma"
                className="w-12 h-12 rounded-xl object-cover ring-1 ring-border-light"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center ring-2 ring-surface-card-inner shadow-sm">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </div>

            {/* Profile Identity & Info */}
            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-content-main">
                  Siddharth Sharma
                </span>
                <span className="text-xs text-content-muted">
                  @siddharth-dev
                </span>
              </div>
              <p className="text-xs text-content-secondary truncate">
                Staff Infrastructure &amp; Open Source Maintainer
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5 text-[11px] text-content-muted">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-content-muted" />
                  <span>San Francisco, CA</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-content-muted" />
                  <span>42 repos</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3 h-3 text-content-muted" />
                  <span>8.9k followers</span>
                </span>
              </div>
            </div>
          </div>

          {/* Sub-bar: Sync Active */}
          <div className="pt-3 border-t border-border-main flex items-center justify-between text-[11px]">
            <span className="inline-flex items-center gap-2 text-content-secondary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Profile telemetry sync active via GitHub REST API v4</span>
            </span>
            <span className="text-content-muted font-mono">Ping: 34ms</span>
          </div>
        </div>

        {/* Initial Telemetry Ingestion Scope */}
        <div>
          <span className="text-[10px] font-semibold text-content-muted uppercase tracking-wider block mb-2.5">
            Initial Telemetry Ingestion Scope
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Option 1: Public repositories (Checked) */}
            <div className="bg-surface-card-inner border border-border-main rounded-xl p-3 flex items-start gap-2.5 hover:border-border-light cursor-pointer transition-colors group">
              <CheckSquare className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-content-main">
                  Public repositories
                </p>
                <p className="text-[11px] text-content-muted mt-0.5 leading-tight">
                  Recommended. Ingest all public code traces.
                </p>
              </div>
            </div>

            {/* Option 2: OSS Contributions (Checked) */}
            <div className="bg-surface-card-inner border border-border-main rounded-xl p-3 flex items-start gap-2.5 hover:border-border-light cursor-pointer transition-colors group">
              <CheckSquare className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-content-main">
                  OSS Contributions
                </p>
                <p className="text-[11px] text-content-muted mt-0.5 leading-tight">
                  Include starred &amp; contributed OSS pull requests.
                </p>
              </div>
            </div>

            {/* Option 3: PR Turnaround Metrics (Checked) */}
            <div className="bg-surface-card-inner border border-border-main rounded-xl p-3 flex items-start gap-2.5 hover:border-border-light cursor-pointer transition-colors group">
              <CheckSquare className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-content-main">
                  PR Turnaround Metrics
                </p>
                <p className="text-[11px] text-content-muted mt-0.5 leading-tight">
                  Calculate mean time to approval &amp; review cycles.
                </p>
              </div>
            </div>

            {/* Option 4: Dependabot Alerts (Unchecked) */}
            <div className="bg-surface-card-inner border border-border-main rounded-xl p-3 flex items-start gap-2.5 hover:border-border-light cursor-pointer transition-colors group">
              <Square className="w-4 h-4 text-content-muted/60 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-content-main">
                  Dependabot Alerts
                </p>
                <p className="text-[11px] text-content-muted mt-0.5 leading-tight">
                  Sync upstream patch logs and vulnerability alerts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security / Compliance Notice */}
        <div className="bg-surface-card-inner border border-border-main rounded-xl p-3.5 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-content-secondary leading-relaxed">
            <strong className="text-content-main font-semibold">
              Zero Source Code Storage:
            </strong>{' '}
            DevIntel requires read-only metadata access (commits, issues, PRs). We never execute, read, or store proprietary source code. SOC2 Type II Certified.
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            className="text-xs font-medium text-content-muted hover:text-content-main transition-colors order-2 sm:order-1"
          >
            Skip and explore demo workspace
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
            <button
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-content-main bg-surface-card-subtle border border-border-main hover:bg-surface-hover hover:border-border-light transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5 text-content-muted" />
              <span>Connect OAuth / GHE</span>
            </button>

            <button
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm shadow-blue-500/20 active:scale-[0.98] transition-all"
            >
              <span>Continue to Repositories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepoAdd