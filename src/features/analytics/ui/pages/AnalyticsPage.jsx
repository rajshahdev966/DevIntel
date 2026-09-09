import React, { useContext, useEffect } from "react";
import MetricsOverview from "../components/MetricsOverview";
import HealthScoreCard from "../components/HealthScoreCard";
import IntelligenceOverview from "../components/IntelligenceOverview";
import { AnalysisContext } from "../../../../app/context/AnalysisContext";
import { useSelector } from "react-redux";

const AnalyticsPage = () => {
  const {repos} = useContext(AnalysisContext);
  const {user} = useSelector((store)=> store.profile);
  
  
  return (
    <div className="flex-1 flex flex-col min-w-0">
      <main className="flex-1 p-6 md:p-8 space-y-6 max-w-7xl w-full mx-auto">
        <MetricsOverview />

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
        </section>
      </main>
    </div>
  );
};

export default AnalyticsPage;
