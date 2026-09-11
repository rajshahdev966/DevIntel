import React from 'react'
import {
  LayoutDashboard,
  Code2,
  BarChart3,
  Users2,
  Settings,
  ChevronsUpDown,
  Layers,
  Moon,
  Sun,
  Bell
} from 'lucide-react'
import { NavLink } from 'react-router'
import { useSelector } from 'react-redux'

export const Sidebar = () => {
  const {user} = useSelector((store)=> store.profile)
  return (
    <aside className="w-64 shrink-0 h-screen bg-surface-sidebar border-r border-border-main flex flex-col justify-between p-4 transition-colors duration-200">
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
          <NavLink to={"/main/dashboard"}
          end
            className={({isActive})=> isActive ? "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-brand-blue text-white shadow-sm font-semibold transition-transform active:scale-[0.98]" : "flex items-center gap-3 px-3 py-2.5 rounded-xl text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors"}
          >
            <LayoutDashboard className="w-4 h-4 " />
            <span>Dashboard</span>
          </NavLink>

          {/* Repositories */}
          <NavLink to={"/main/repos"}
            className={({isActive})=> isActive ? "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-brand-blue text-white shadow-sm font-semibold transition-transform active:scale-[0.98]" : "flex items-center gap-3 px-3 py-2.5 rounded-xl text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors"}
          >
            <Code2 className="w-4 h-4" />
            <span>Repositories</span>
          </NavLink>

          {/* Analytics */}
          <NavLink to={"/main/analytics"}
            className={({isActive})=> isActive ? "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-brand-blue text-white shadow-sm font-semibold transition-transform active:scale-[0.98]" : "flex items-center gap-3 px-3 py-2.5 rounded-xl text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors"}
          >
            <BarChart3 className="w-4 h-4 text-content-muted" />
            <span>Analytics</span>
          </NavLink>

          {/* Settings */}
          <NavLink to={"/main/settings"}
            className={({isActive})=> isActive ? "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-brand-blue text-white shadow-sm font-semibold transition-transform active:scale-[0.98]" : "flex items-center gap-3 px-3 py-2.5 rounded-xl text-content-secondary hover:text-content-main hover:bg-surface-hover transition-colors"}
          >
            <Settings className="w-4 h-4 text-content-muted" />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* Bottom User Card */}
      <div className="pt-4 border-t border-border-main">
         <div className="flex items-center gap-4">
        {/* Pure CSS Theme Toggle: toggles #theme-toggle without any JS logic */}
        {/* Profile Avatar */}
        <button
          type="button"
          className="rounded-full ring-2 ring-border-light hover:ring-brand-blue transition-all flex gap-3 items-center p-1 pr-2 w-full"
        >
          <img
            src={user?.avatar_url}
            alt="Siddharth Sharma Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className='text-wrap'>{user?.name}</span>
        </button>
        <label
          htmlFor="theme-toggle"
          title="Toggle Light / Dark Mode"
          className="relative flex items-center justify-center w-10 h-12 rounded-xl bg-surface-card border border-border-main text-content-secondary hover:text-content-main hover:border-border-light cursor-pointer transition-colors"
        >
          {/* Moon icon visible in light mode */}
          <Moon className="w-4 h-4 hidden in-data-[theme=light]:block [:root:has(#theme-toggle:checked)_&]:block" />
          {/* Sun icon visible in dark mode */}
          <Sun className="w-4 h-4 block in-data-[theme=light]:hidden [:root:has(#theme-toggle:checked)_&]:hidden text-amber-400" />
        </label>
      </div>
      </div>
      
    </aside>
  )
}

export default Sidebar
