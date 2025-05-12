import React, { useState } from 'react';
import OverviewSection from './prospectusSections/OverviewSection';
import GrowthDriversSection from './prospectusSections/GrowthDriversSection';
import ScenariosSection from './prospectusSections/ScenariosSection';
import TimelineSection from './prospectusSections/TimelineSection';
import InvestmentSection from './prospectusSections/InvestmentSection';
import RisksSection from './prospectusSections/RisksSection';
import InvestmentReturnsSection from './prospectusSections/InvestmentReturnsSection';
import risksData from './prospectusSections/RisksData';
import investmentReturnsData from './prospectusSections/InvestmentReturnsData';
import { AlertTriangle, Activity, TrendingDown, Users, User, Briefcase, Shield, Lock, Globe, FileText, DollarSign, TrendingUp, Calendar, AlertCircle, ArrowRight } from 'lucide-react';

const ScratchieProspectus = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const revenueData = [
    { name: '2025', Conservative: 1000000, Realistic: 1500000, Optimistic: 6682500 },
    { name: '2026', Conservative: 2000000, Realistic: 3000000, Optimistic: 12606000 },
    { name: '2027', Conservative: 4000000, Realistic: 6000000, Optimistic: 21169500 },
  ];
  const userGrowthData = [
    { name: '2025', Conservative: 11000, Realistic: 20000, Optimistic: 101250 },
    { name: '2026', Conservative: 20000, Realistic: 40000, Optimistic: 191000 },
    { name: '2027', Conservative: 40000, Realistic: 60000, Optimistic: 320750 },
  ];
  const breakdownData2026 = [
    { name: 'Construction', Conservative: 15000, Realistic: 20000, Optimistic: 52500 },
    { name: "QSR (incl. McDonald's)", Conservative: 5000, Realistic: 20000, Optimistic: 60000 },
    { name: 'Platforms', Conservative: 0, Realistic: 10000, Optimistic: 48500 },
  ];
  const marginData = [
    { name: '2025', Conservative: 5, Realistic: 10, Optimistic: 20 },
    { name: '2026', Conservative: 15, Realistic: 25, Optimistic: 35 },
    { name: '2027', Conservative: 25, Realistic: 35, Optimistic: 40 },
  ];
  const timelineData = [
    { phase: "Launch", date: "May 19, 2025", event: "Launch Release 3 at FCON Brisbane", milestone: "Commercial Product Launch" },
    { phase: "McDonald's", date: "May 26, 2025", event: "McDonald's national rollout meeting", milestone: "Enterprise Partnership" },
    { phase: "Integration", date: "Q2 2025", event: "Complete Donesafe integration", milestone: "Platform Strategy" },
    { phase: "Break-Even", date: "Q3 2025", event: "Reach 15,000 paid subscribers", milestone: "Financial Milestone" },
    { phase: "Scale", date: "Q4 2025", event: "Launch SafetyCulture integration", milestone: "Growth Accelerator" },
    { phase: "Expand", date: "Q2 2026", event: "Additional QSR partnerships", milestone: "Market Expansion" },
    { phase: "Upgrade", date: "Q3 2026", event: "Release Scratchie 4.0", milestone: "Product Evolution" },
    { phase: "Global", date: "Q1-Q2 2027", event: "International rollout begins", milestone: "Geographic Expansion" },
    { phase: "Exit", date: "Q3-Q4 2027", event: "Potential strategic opportunities", milestone: "Investor Returns" },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 py-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-blue-900 mb-3">Scratchie Growth Prospectus</h1>
          <p className="text-lg text-blue-700">Financial Scenarios & Opportunities (2025-2027)</p>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-gray-600">A visual overview of Scratchie's growth trajectory, revenue potential, and market opportunities over the next three years.</p>
          </div>
        </div>
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} mb-2`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('drivers')}
            className={`px-4 py-2 rounded-md ${activeTab === 'drivers' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} mb-2`}
          >
            Growth Drivers
          </button>
          <button
            onClick={() => setActiveTab('scenarios')}
            className={`px-4 py-2 rounded-md ${activeTab === 'scenarios' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} mb-2`}
          >
            Financial Scenarios
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 rounded-md ${activeTab === 'timeline' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} mb-2`}
          >
            Timeline
          </button>
          <button
            onClick={() => setActiveTab('investment')}
            className={`px-4 py-2 rounded-md ${activeTab === 'investment' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} mb-2`}
          >
            Investment Case
          </button>
          <button
            onClick={() => setActiveTab('risks')}
            className={`px-4 py-2 rounded-md ${activeTab === 'risks' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} mb-2`}
          >
            Risks
          </button>
          <button
            onClick={() => setActiveTab('returns')}
            className={`px-4 py-2 rounded-md ${activeTab === 'returns' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} mb-2`}
          >
            Returns
          </button>
        </div>
        {/* Content Sections */}
        {activeTab === 'overview' && (
          <OverviewSection
            revenueData={revenueData}
            userGrowthData={userGrowthData}
            breakdownData2026={breakdownData2026}
          />
        )}
        {activeTab === 'drivers' && <GrowthDriversSection />}
        {activeTab === 'scenarios' && <ScenariosSection marginData={marginData} />}
        {activeTab === 'timeline' && <TimelineSection timelineData={timelineData} />}
        {activeTab === 'investment' && <InvestmentSection />}
        {activeTab === 'risks' && <RisksSection risksData={risksData} />}
        {activeTab === 'returns' && <InvestmentReturnsSection investmentReturnsData={investmentReturnsData} initialInvestment={50000} />}
      </div>
    </div>
  );
};

export default ScratchieProspectus;