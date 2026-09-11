import React from "react";
import MetricsOverview from "../components/MetricsOverview";


const AnalyticsPage = () => {  
  return (
    <div className="flex-1 flex flex-col min-w-0">
      <main className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl w-full mx-auto">
        <MetricsOverview />
      </main>
    </div>
  );
};

export default AnalyticsPage;
