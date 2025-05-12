import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { TrendingUp, Briefcase, Check, Clock, DollarSign, Users, Award, Building, Target, PieChart } from 'lucide-react';

const ScratchieProspectus = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const revenueData = [
    { name: '2025', Conservative: 990000, Realistic: 2211000, Optimistic: 6682500 },
    { name: '2026', Conservative: 3300000, Realistic: 7491000, Optimistic: 12606000 },
    { name: '2027', Conservative: 6270000, Realistic: 13926000, Optimistic: 21169500 },
  ];
  const userGrowthData = [
    { name: '2025', Conservative: 15000, Realistic: 33500, Optimistic: 101250 },
    { name: '2026', Conservative: 50000, Realistic: 113500, Optimistic: 191000 },
    { name: '2027', Conservative: 95000, Realistic: 211000, Optimistic: 320750 },
  ];
  const breakdownData2026 = [
    { name: 'Construction', Conservative: 25000, Realistic: 37500, Optimistic: 52500 },
    { name: "McDonald's", Conservative: 15000, Realistic: 36000, Optimistic: 60000 },
    { name: 'Other QSR', Conservative: 0, Realistic: 10000, Optimistic: 30000 },
    { name: 'Platforms', Conservative: 10000, Realistic: 30000, Optimistic: 48500 },
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
        </div>
        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Executive Summary</h2>
              <p className="text-gray-600 mb-4">
                Scratchie stands at an inflection point with multiple growth vectors and a clear path to profitability. Our immediate goal is to reach <span className="font-bold text-blue-700">15,000 paid subscriptions</span> within five months of launch.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-indigo-50 p-5 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <DollarSign size={32} className="text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Dual Revenue Streams</h3>
                  <p className="text-sm text-gray-600">$5/user/month subscription + 5% commission on rewards</p>
                </div>
                <div className="bg-green-50 p-5 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Validated by McDonald's</h3>
                  <p className="text-sm text-gray-600">Phase 2 rollout across 10 stores approved</p>
                </div>
                <div className="bg-yellow-50 p-5 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <Clock size={32} className="text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Break-Even: 5 Months</h3>
                  <p className="text-sm text-gray-600">Reaching 15,000 users covers all expenses</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Annual Revenue Projection</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenueData}
                    margin={{ top: 10, right: 30, left: 40, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                    <Tooltip formatter={(value) => [`$${(value / 1000000).toFixed(2)}M`, 'Revenue']} />
                    <Legend />
                    <Area type="monotone" dataKey="Conservative" stackId="1" stroke="#9CA3AF" fill="#E5E7EB" />
                    <Area type="monotone" dataKey="Realistic" stackId="2" stroke="#3B82F6" fill="#93C5FD" />
                    <Area type="monotone" dataKey="Optimistic" stackId="3" stroke="#10B981" fill="#A7F3D0" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-sm text-gray-500">Conservative 2027</p>
                  <p className="font-bold text-gray-700">$6.27M</p>
                </div>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-sm text-blue-500">Realistic 2027</p>
                  <p className="font-bold text-blue-700">$13.93M</p>
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm text-green-500">Optimistic 2027</p>
                  <p className="font-bold text-green-700">$21.17M</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">User Growth Projection</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={userGrowthData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
                      <Tooltip formatter={(value) => [`${(value).toLocaleString()} users`, '']} />
                      <Legend />
                      <Line type="monotone" dataKey="Conservative" stroke="#9CA3AF" strokeWidth={2} />
                      <Line type="monotone" dataKey="Realistic" stroke="#3B82F6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Optimistic" stroke="#10B981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2026 User Breakdown</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={breakdownData2026}
                      margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
                      <Tooltip formatter={(value) => [`${(value).toLocaleString()} users`, '']} />
                      <Legend />
                      <Bar dataKey="Conservative" fill="#E5E7EB" />
                      <Bar dataKey="Realistic" fill="#93C5FD" />
                      <Bar dataKey="Optimistic" fill="#A7F3D0" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'drivers' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Core Growth Drivers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Construction Industry</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Launch at FCON Brisbane (May 19) to 700+ industry leaders</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Medium sites (200-300 workers): $1,000-$1,500 monthly revenue each</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Large sites (500-600 workers): $2,500-$3,000 monthly revenue each</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>5% commission on rewards (avg. $10/user/month)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold">McDonald's & QSR</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>1,000 McDonald's stores across Australia</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>50-100 crew members per store</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Potential: 50,000-100,000 subscribers from McDonald's alone</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Donesafe integration unlocks other QSR chains like KFC</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Platform Integrations</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Geotab:</strong> 4.7 million vehicles worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Just 1% penetration = 47,000 additional subscribers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>SafetyCulture:</strong> Global platform with millions of users</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>API-first architecture enables seamless integration</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Freemium to Premium</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Free tier with basic rewards functionality</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Premium features: analytics, branding, integrations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Target conversion rate: 5-15% to paid subscriptions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>In-app prompts & demonstrated ROI metrics drive conversion</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Key Metrics & Advantages</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="text-blue-700 font-medium">Average Revenue Per User</h4>
                    <p className="text-2xl font-bold">$5 + $0.50</p>
                    <p className="text-sm text-gray-500">Subscription + rewards commission</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="text-blue-700 font-medium">AWS Cost Per User</h4>
                    <p className="text-2xl font-bold">$0.01-0.03</p>
                    <p className="text-sm text-gray-500">Per month (&lt; 1% of revenue)</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="text-blue-700 font-medium">Gross Margin</h4>
                    <p className="text-2xl font-bold">90%+</p>
                    <p className="text-sm text-gray-500">Typical for SaaS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'scenarios' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Scenarios (2025-2027)</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gray-100 p-4">
                    <h3 className="text-xl font-bold text-gray-700">Conservative</h3>
                    <p className="text-sm text-gray-500">Base case scenario</p>
                  </div>
                  <div className="p-5">
                    <h4 className="font-medium text-gray-800 mb-2">Year 1 (2025)</h4>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      <li>• Construction: 10,000 users</li>
                      <li>• McDonald's: 5,000 users</li>
                      <li>• <strong>Total users:</strong> 15,000</li>
                      <li>• <strong>Revenue:</strong> $990,000</li>
                    </ul>
                    
                    <h4 className="font-medium text-gray-800 mb-2">Year 2 (2026)</h4>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      <li>• Construction: 25,000 users</li>
                      <li>• McDonald's: 15,000 users</li>
                      <li>• Platform: 10,000 users</li>
                      <li>• <strong>Total users:</strong> 50,000</li>
                      <li>• <strong>Revenue:</strong> $3.3M</li>
                    </ul>
                    
                    <h4 className="font-medium text-gray-800 mb-2">Year 3 (2027)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Construction: 40,000 users</li>
                      <li>• QSR: 30,000 users</li>
                      <li>• Platform: 25,000 users</li>
                      <li>• <strong>Total users:</strong> 95,000</li>
                      <li>• <strong>Revenue:</strong> $6.27M</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-blue-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-4">
                    <h3 className="text-xl font-bold text-blue-700">Realistic</h3>
                    <p className="text-sm text-blue-500">Expected scenario</p>
                  </div>
                  <div className="p-5">
                    <h4 className="font-medium text-gray-800 mb-2">Year 1 (2025)</h4>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      <li>• Construction: 16,500 users</li>
                      <li>• McDonald's: 12,000 users</li>
                      <li>• Platform: 5,000 users</li>
                      <li>• <strong>Total users:</strong> 33,500</li>
                      <li>• <strong>Revenue:</strong> $2.21M</li>
                    </ul>
                    
                    <h4 className="font-medium text-gray-800 mb-2">Year 2 (2026)</h4>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      <li>• Construction: 37,500 users</li>
                      <li>• McDonald's: 36,000 users</li>
                      <li>• Other QSR: 10,000 users</li>
                      <li>• Platform: 30,000 users</li>
                      <li>• <strong>Total users:</strong> 113,500</li>
                      <li>• <strong>Revenue:</strong> $7.49M</li>
                    </ul>
                    
                    <h4 className="font-medium text-gray-800 mb-2">Year 3 (2027)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Construction: 57,000 users</li>
                      <li>• McDonald's: 54,000 users</li>
                      <li>• Other QSR: 25,000 users</li>
                      <li>• Platform: 75,000 users</li>
                      <li>• <strong>Total users:</strong> 211,000</li>
                      <li>• <strong>Revenue:</strong> $13.93M</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-green-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-4">
                    <h3 className="text-xl font-bold text-green-700">Optimistic</h3>
                    <p className="text-sm text-green-500">Best case scenario</p>
                  </div>
                  <div className="p-5">
                    <h4 className="font-medium text-gray-800 mb-2">Year 1 (2025)</h4>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      <li>• Construction: 26,250 users</li>
                      <li>• McDonald's: 60,000 users</li>
                      <li>• Platform: 15,000 users</li>
                      <li>• <strong>Total users:</strong> 101,250</li>
                      <li>• <strong>Revenue:</strong> $6.68M</li>
                    </ul>
                    
                    <h4 className="font-medium text-gray-800 mb-2">Year 2 (2026)</h4>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      <li>• Construction: 52,500 users</li>
                      <li>• McDonald's: 60,000 users</li>
                      <li>• Other QSR: 30,000 users</li>
                      <li>• Platform: 48,500 users</li>
                      <li>• <strong>Total users:</strong> 191,000</li>
                      <li>• <strong>Revenue:</strong> $12.61M</li>
                    </ul>
                    
                    <h4 className="font-medium text-gray-800 mb-2">Year 3 (2027)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Construction: 78,750 users</li>
                      <li>• QSR: 120,000 users</li>
                      <li>• Platform: 97,000 users</li>
                      <li>• International: 25,000 users</li>
                      <li>• <strong>Total users:</strong> 320,750</li>
                      <li>• <strong>Revenue:</strong> $21.17M</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Operating Margin Projection</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={marginData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `${value}%`} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Operating Margin']} />
                      <Legend />
                      <Line type="monotone" dataKey="Conservative" stroke="#9CA3AF" strokeWidth={2} />
                      <Line type="monotone" dataKey="Realistic" stroke="#3B82F6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Optimistic" stroke="#10B981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Cost Structure & Profitability</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Variable Costs</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• AWS hosting: $0.01-0.03 per user/month</li>
                      <li>• Payment processing: 2.5% of transaction volume</li>
                      <li>• Customer support: Scales efficiently with automation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Fixed Costs</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Technical team: $500K-$700K annually</li>
                      <li>• Marketing: $50K to $150K per year</li>
                      <li>• Sales: Commission-based structure</li>
                      <li>• Operations: Lean through automation</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-700 mb-2">Break-Even Analysis</h4>
                  <p className="text-sm text-gray-600">15,000 paid users covers all operating expenses. Expected to reach this milestone within five months of launch. Each user beyond 15,000 contributes significantly to profit due to high margins.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'timeline' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Strategic Milestones & Timeline</h2>
              
              <div className="relative">
                <div className="absolute left-8 inset-y-0 w-1 bg-blue-200"></div>
                
                <div className="space-y-6">
                  {timelineData.map((item, index) => (
                    <div key={index} className="relative flex items-start pl-16">
                      <div className="absolute left-6 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 -ml-3 mt-1.5">
                        <span className="h-2 w-2 rounded-full bg-white"></span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 w-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-semibold text-blue-600">{item.date}</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">{item.milestone}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{item.event}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Upcoming Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm border-l-4 border-yellow-500">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <Briefcase className="h-6 w-6 text-yellow-500" />
                      </div>
                      <div>
                        <p className="font-medium">FCON Brisbane</p>
                        <p className="text-sm text-gray-500">May 19, 2025</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2">Launch of Release 3 with subscription model to 700+ construction industry leaders</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm border-l-4 border-green-500">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <Users className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium">McDonald's Meeting</p>
                        <p className="text-sm text-gray-500">May 26, 2025</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2">Discussion about national rollout potential across 1,000 stores in Australia</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <TrendingUp className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">Break-Even Milestone</p>
                        <p className="text-sm text-gray-500">Q3 2025</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2">Target to reach 15,000 paid subscribers, covering all operating expenses</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <PieChart className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium">Platform Integration</p>
                        <p className="text-sm text-gray-500">Q4 2025</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2">Launch of SafetyCulture integration, opening access to millions of potential users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'investment' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Investment Opportunity</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">$300,000 Friends & Family Round</h3>
                    <p className="text-blue-700">Same terms as original $700K investment from The 8s</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md">
                      Minimum Investment: $25,000
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Why Invest Now?</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5 mr-4">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">McDonald's Validation</h4>
                        <p className="text-gray-600 mt-1">Phase 2 rollout across 10 stores with pathway to 1,000 stores nationally</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5 mr-4">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">Proven Product</h4>
                        <p className="text-gray-600 mt-1">Scratchie 2.0 is more scalable, secure, reliable, with innovative features like Convo Card</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5 mr-4">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">Clear Revenue Model</h4>
                        <p className="text-gray-600 mt-1">$5 per user/month subscription + 5% commission on rewards</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5 mr-4">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">Multiple Growth Vectors</h4>
                        <p className="text-gray-600 mt-1">Construction, QSR, platform integrations, and potential international expansion</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Use of Funds</h3>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-base font-medium text-gray-700">Product Development</h4>
                              <p className="text-sm text-gray-500">Further enhance platform based on feedback</p>
                            </div>
                            <span className="px-2 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700">35%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-base font-medium text-gray-700">Sales & Marketing</h4>
                              <p className="text-sm text-gray-500">Support FCON launch and McDonald's partnership</p>
                            </div>
                            <span className="px-2 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">30%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-base font-medium text-gray-700">Operations</h4>
                              <p className="text-sm text-gray-500">Maintain runway to reach 15,000 subscriptions</p>
                            </div>
                            <span className="px-2 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-700">25%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-base font-medium text-gray-700">Business Development</h4>
                              <p className="text-sm text-gray-500">Pursue SafetyCulture and Geotab opportunities</p>
                            </div>
                            <span className="px-2 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700">10%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Time-Sensitive Opportunity
                    </h4>
                    <p className="text-sm text-yellow-700 mt-1">This investment round will be allocated on a first-come, first-served basis. We need to secure this funding ASAP to maintain momentum ahead of our May 19th launch.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Risk Disclosure</h3>
                <p className="text-gray-600 mb-4">As with any startup investment, there are significant risks involved. While we believe this is the lowest-risk moment in Scratchie's history, potential investors should be aware:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-gray-400 mr-2">•</span>
                    <span>Investing in startups is high-risk – you could lose your entire investment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-gray-400 mr-2">•</span>
                    <span>Startup investments are typically illiquid until an exit event</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-gray-400 mr-2">•</span>
                    <span>Future fundraising rounds may dilute your ownership percentage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-gray-400 mr-2">•</span>
                    <span>Market adoption may take longer than anticipated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-gray-400 mr-2">•</span>
                    <span>We recommend only investing funds you can afford to lose</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Next Steps</h3>
                <p className="text-gray-600 max-w-3xl mx-auto mb-6">If you'd like to participate in this investment opportunity, please respond to our one-pager indicating your interest level and potential investment amount.</p>
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Express Interest Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScratchieProspectus;