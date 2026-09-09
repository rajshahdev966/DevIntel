import React, { useContext } from "react";
import ProfileBanner from "../../../../components/ProfileBanner";
import MetricsOverview from "../../../analytics/ui/components/MetricsOverview";
import HealthScoreCard from "../../../analytics/ui/components/HealthScoreCard";
import IntelligenceOverview from "../../../analytics/ui/components/IntelligenceOverview";
import RepositoryHighlights from "../../../repositoryCollection/ui/components/RepositoryHighlights";
import TelemetryObservations from "../../../repositoryCollection/ui/components/TelemetryObservations";
import RepositoriesTable from "../../../repositoryCollection/ui/components/RepositoriesTable";
import { AnalysisContext } from "../../../../app/context/AnalysisContext";

const DashboardPage = () => {
  

  return (
    <div className="flex-1 flex flex-col min-w-0">

      {/* Dashboard Body */}
      <main className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl w-full mx-auto">
        {/* Profile Banner */}
        <ProfileBanner />

        {/* Quick Metrics Cards */}
        <MetricsOverview />

        {/* Repository Insights (3 Featured Cards) */}
        <RepositoryHighlights />

        {/* Repositories Table & Filters */}
        <RepositoriesTable />
      </main>
    </div>
  );
};

export default DashboardPage;
