import React from "react";
import MetricsOverview from "../components/MetricsOverview";
import HealthScoreCard from "../components/HealthScoreCard";
import IntelligenceOverview from "../components/IntelligenceOverview";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      <main className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl w-full mx-auto">
        <MetricsOverview />

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <HealthScoreCard />
          </div>
          <div className="lg:col-span-7 flex flex-col h-full">
            <IntelligenceOverview />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AnalyticsPage;
