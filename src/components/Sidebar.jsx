import React from 'react'
import {
  LayoutDashboard,
  Code2,
  BarChart3,
  Users2,
  Settings,
  ChevronsUpDown,
  Layers
} from 'lucide-react'

export const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 min-h-screen bg-surface-sidebar border-r border-border-main flex flex-col justify-between p-4 transition-colors duration-200">
      {/* Top Section */}
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-2 py-1">
          <img src="/brand/devintel_logo.png" alt="hello" className='h-15 w-15 rounded-lg' />
          <span className="text-lg font-bold tracking-tight text-content-main">
            DevIntel
          </span>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1 text-sm font-medium">
          {/* Active Item */}
          <a
            href="#dashboard"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-brand-blue text-white shadow-sm font-semibold transition-transform active:scale-[0.98]"
          >
            <LayoutDashboard className="w-4 h-4 text-white" />
            <span>Dashboard</span>
          </a>

          {/* Repositories */}
          <a
            href="#repositories"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors"
          >
            <Code2 className="w-4 h-4 text-content-muted" />
            <span>Repositories</span>
          </a>

          {/* Analytics */}
          <a
            href="#analytics"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors"
          >
            <BarChart3 className="w-4 h-4 text-content-muted" />
            <span>Analytics</span>
          </a>

          {/* Settings */}
          <a
            href="#settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors"
          >
            <Settings className="w-4 h-4 text-content-muted" />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* Bottom User Card */}
      <div className="pt-4 border-t border-border-main">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-surface-hover transition-colors cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Alex Mercer"
            className="w-9 h-9 rounded-full object-cover ring-1 ring-border-light"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-content-main truncate">
              Alex Mercer
            </p>
            <p className="text-xs text-content-muted truncate">
              alex@acme.dev
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
