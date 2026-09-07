import React from 'react'
import { Search, Bell, Moon, Sun } from 'lucide-react'

export const Navbar = () => {
  return (
    <header className="h-16 px-8 border-b border-border-main bg-surface-main/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between gap-4 transition-colors duration-200">
      {/* Search Input Bar */}
      <div className="relative flex-1 max-w-lg">
        <Search className="w-4 h-4 text-content-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder="Search repositories, PRs, or metrics..."
          className="w-full bg-surface-card border border-border-main rounded-xl pl-10 pr-4 py-2 text-sm text-content-main placeholder:text-content-muted focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          readOnly
        />
      </div>

      {/* Right Actions & Utilities */}
      <div className="flex items-center gap-4">
        {/* Pure CSS Theme Toggle: toggles #theme-toggle without any JS logic */}
        <label
          htmlFor="theme-toggle"
          title="Toggle Light / Dark Mode"
          className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-surface-card border border-border-main text-content-secondary hover:text-content-main hover:border-border-light cursor-pointer transition-colors"
        >
          {/* Moon icon visible in light mode */}
          <Moon className="w-4 h-4 hidden [[data-theme=light]_&]:block [:root:has(#theme-toggle:checked)_&]:block" />
          {/* Sun icon visible in dark mode */}
          <Sun className="w-4 h-4 block [[data-theme=light]_&]:hidden [:root:has(#theme-toggle:checked)_&]:hidden text-amber-400" />
        </label>

        {/* Notifications Icon with dot */}
        <button
          type="button"
          className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-surface-card border border-border-main text-content-secondary hover:text-content-main hover:border-border-light transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 ring-2 ring-surface-card"></span>
        </button>

        {/* Profile Avatar */}
        <button
          type="button"
          className="rounded-full ring-2 ring-border-light hover:ring-brand-blue transition-all"
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
            alt="Siddharth Sharma Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  )
}

export default Navbar
