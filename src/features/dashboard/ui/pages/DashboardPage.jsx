import React from "react";
import ProfileBanner from "../../../repoAdd/ui/components/ProfileBanner";
import MetricsOverview from "../../../analytics/ui/components/MetricsOverview";
import RepositoriesTable from "../../../repositoryCollection/ui/components/RepositoriesTable";

const DashboardPage = () => {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Dashboard Body */}
      <main className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl w-full mx-auto">
        {/* Profile Banner */}
        <ProfileBanner />

        {/* Quick Metrics Cards */}
        <MetricsOverview />

        {/* Repositories Table & Filters */}
        <RepositoriesTable />
      </main>
    </div>
  );
};

export default DashboardPage;
