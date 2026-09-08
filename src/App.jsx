import React from 'react'
import Sidebar from './shared/ui/components/Sidebar'
import Navbar from './features/dashboard/ui/components/Navbar'
import ProfileBanner from './components/ProfileBanner'
import MetricsOverview from './features/analytics/ui/components/MetricsOverview'
import HealthScoreCard from './features/analytics/ui/components/HealthScoreCard'
import IntelligenceOverview from './features/analytics/ui/components/IntelligenceOverview'
import RepositoryHighlights from './features/repositoryCollection/ui/components/RepositoryHighlights'
import TelemetryObservations from './features/repositoryCollection/ui/components/TelemetryObservations'
import RepositoriesTable from './features/repositoryCollection/ui/components/RepositoriesTable'

export const App = () => {
  return (
    <div className="min-h-screen bg-surface-main text-content-main flex flex-row selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Pure HTML Theme Switcher Input (Zero JavaScript/ReactJS logic needed) */}
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only"
        aria-label="Toggle Theme"
      />

      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <Navbar />

        {/* Dashboard Body */}
        <main className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* Profile Banner */}
          <ProfileBanner />

          {/* Quick Metrics Cards */}
          <MetricsOverview />

          {/* Intelligence Row: Health Score & Language/Activity Charts */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <HealthScoreCard />
            </div>
            <div className="lg:col-span-7 flex flex-col">
              <IntelligenceOverview />
            </div>
          </section>

          {/* Repository Insights (3 Featured Cards) */}
          <RepositoryHighlights />

          {/* AI Telemetry Observations */}
          <TelemetryObservations />

          {/* Repositories Table & Filters */}
          <RepositoriesTable />
        </main>
      </div>
    </div>
  )
}

export default App