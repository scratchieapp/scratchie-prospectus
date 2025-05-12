import React from 'react';
import { DollarSign, Check, Clock } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, LineChart, Line, BarChart, Bar } from 'recharts';

const OverviewSection = ({ revenueData, userGrowthData, breakdownData2026 }) => (
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
);

export default OverviewSection; 