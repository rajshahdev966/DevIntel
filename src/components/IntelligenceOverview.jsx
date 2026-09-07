import React from 'react'
import LanguageIntelligenceCard from './LanguageIntelligenceCard'
import ActivityChartCard from './ActivityChartCard'

export const IntelligenceOverview = () => {
  return (
    <div className="bg-surface-card border border-border-main rounded-2xl p-6 flex flex-col justify-between transition-colors duration-200">
      <LanguageIntelligenceCard />
      <ActivityChartCard />
    </div>
  )
}

export default IntelligenceOverview
