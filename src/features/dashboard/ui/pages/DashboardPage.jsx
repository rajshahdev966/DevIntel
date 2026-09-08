import React from "react";
import ProfileBanner from "../../../../components/ProfileBanner";
import MetricsOverview from "../../../analytics/ui/components/MetricsOverview";
import HealthScoreCard from "../../../analytics/ui/components/HealthScoreCard";
import IntelligenceOverview from "../../../analytics/ui/components/IntelligenceOverview";
import RepositoryHighlights from "../../../repositoryCollection/ui/components/RepositoryHighlights";
import TelemetryObservations from "../../../repositoryCollection/ui/components/TelemetryObservations";
import RepositoriesTable from "../../../repositoryCollection/ui/components/RepositoriesTable";

const DashboardPage = () => {
  console.log("Iaa");
  
  return (
    <div className="flex-1 flex flex-col min-w-0">
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
  );
};

export default DashboardPage;
