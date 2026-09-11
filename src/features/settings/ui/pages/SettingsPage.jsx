import React from "react";
import {
  Check,
  Moon,
  Sun,
  Laptop,
  RotateCw,
  AlertTriangle,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeUser } from "../../../repoAdd/state/profileSlice";

export const SettingsPage = () => {
 
  const {navigate, dispatch, user} = useSettings()
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
              Manage workspace theme preferences and your linked GitHub account
              identity.
            </p>
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
          </div>

          <div className="grid grid-cols-2 gap-3.5 items-center justify-center w-full">
            {/* Dark Mode Option Card */}
            <label
              htmlFor="theme-toggle"
              title="Switch to Dark Mode"
              className="bg-surface-card-inner rounded-xl p-4 flex flex-col justify-between h-28 cursor-pointer transition-all border
      border-blue-500/80 ring-1 ring-blue-500/50 shadow-sm
      [:root:has(#theme-toggle:checked)_&]:border-border-main
      [:root:has(#theme-toggle:checked)_&]:ring-0
      [:root:has(#theme-toggle:checked)_&]:hover:border-border-light"
            >
              <div className="flex items-center justify-between">
                <Moon className="w-5 h-5 text-blue-400 transition-colors [:root:has(#theme-toggle:checked)_&]:text-content-muted" />
                {/* Radio Indicator */}
                <div
                  className="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all
        border-blue-500 bg-blue-500/20
        [:root:has(#theme-toggle:checked)_&]:border-border-light
        [:root:has(#theme-toggle:checked)_&]:bg-transparent"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 transition-opacity [:root:has(#theme-toggle:checked)_&]:opacity-0" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-content-main">Dark</p>
                <p className="text-[11px] text-content-muted mt-0.5">
                  High-contrast dark mode
                </p>
              </div>
            </label>

            {/* Light Mode Option Card */}
            <label
              htmlFor="theme-toggle"
              title="Switch to Light Mode"
              className="bg-surface-card-inner rounded-xl p-4 flex flex-col justify-between h-28 cursor-pointer transition-all border
      border-border-main hover:border-border-light
      [:root:has(#theme-toggle:checked)_&]:border-blue-500/80
      [:root:has(#theme-toggle:checked)_&]:ring-1
      [:root:has(#theme-toggle:checked)_&]:ring-blue-500/50
      [:root:has(#theme-toggle:checked)_&]:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <Sun className="w-5 h-5 text-content-muted transition-colors [:root:has(#theme-toggle:checked)_&]:text-amber-400" />
                {/* Radio Indicator */}
                <div
                  className="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all
        border-border-light bg-transparent
        [:root:has(#theme-toggle:checked)_&]:border-blue-500
        [:root:has(#theme-toggle:checked)_&]:bg-blue-500/20"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 transition-opacity [:root:has(#theme-toggle:checked)_&]:opacity-100" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-content-main">Light</p>
                <p className="text-[11px] text-content-muted mt-0.5">
                  Clean, daytime contrast
                </p>
              </div>
            </label>
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
                  src={user?.avatar_url}
                  alt={user?.name}
                  className="w-11 h-11 rounded-xl object-cover ring-1 ring-border-light"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-blue-500 ring-2 ring-surface-card-inner" />
              </div>

              {/* Account Identity */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-content-main">
                    {user?.name}
                  </span>
                  <span className="text-xs text-content-muted">
                    @{user?.login}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Disconnect Option */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border-main">
            <div>
              <p className="text-xs font-semibold text-content-main">
                Disconnect Account
              </p>
              <p className="text-[11px] text-content-secondary mt-0.5 max-w-lg">
                Disconnecting will pause telemetry ingestion and sign out this
                GitHub profile from DevIntel.
              </p>
            </div>

            <button
              onClick={() => {
                dispatch(removeUser())
                return navigate("/")
              }}
              type="button"
              className="self-start sm:self-auto px-4 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-xl shadow-sm transition-colors active:scale-[0.98]"
            >
              Disconnect Account
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SettingsPage;
