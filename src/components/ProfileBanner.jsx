import React from 'react'
import { Check, Link2, Share2, FileDown, RefreshCw } from 'lucide-react'

export const ProfileBanner = () => {
  return (
    <section className="bg-surface-card border border-border-main rounded-2xl p-6 transition-colors duration-200">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left: Avatar & Identity Details */}
        <div className="flex items-start sm:items-center gap-5">
          {/* Avatar Container with Verified Badge */}
          <div className="relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80"
              alt="Siddharth Sharma"
              className="w-20 h-20 rounded-2xl object-cover ring-1 ring-border-light shadow-sm"
            />
            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center ring-2 ring-surface-card shadow-sm">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>

          {/* Text Information */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-content-main tracking-tight">
                Siddharth Sharma
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-semibold text-content-muted bg-surface-card-subtle border border-border-main rounded-md">
                Staff Engineer
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-content-secondary font-medium">
              <span className="text-content-secondary">@siddharth-dev</span>
              <span className="text-content-muted">•</span>
              <a
                href="https://github.com/siddharth-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-content-secondary hover:text-brand-blue transition-colors"
              >
                <Link2 className="w-3.5 h-3.5" />
                <span>github.com/siddharth-dev</span>
              </a>
            </div>

            <p className="text-sm text-content-secondary max-w-2xl leading-relaxed pt-0.5">
              Senior Staff Infrastructure &amp; Open Source Maintainer. Building
              high-performance distributed systems.
            </p>
          </div>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto self-stretch sm:self-auto">
          {/* Share Report */}
          <button
            type="button"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-content-main bg-surface-card-subtle border border-border-main hover:bg-surface-hover hover:border-border-light transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-content-secondary" />
            <span>Share Report</span>
          </button>

          {/* Export PDF */}
          <button
            type="button"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-content-main bg-surface-card-subtle border border-border-main hover:bg-surface-hover hover:border-border-light transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-content-secondary" />
            <span>Export PDF</span>
          </button>

          {/* Sync GitHub */}
          <button
            type="button"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm shadow-blue-500/20 active:scale-[0.98] transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sync GitHub</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProfileBanner
