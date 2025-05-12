import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ScenariosSection = ({ marginData }) => (
  <div className="space-y-8">
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Scenarios (2025-2027)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Conservative Card */}
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="bg-gray-100 p-4">
            <h3 className="text-xl font-bold text-gray-700">Conservative</h3>
            <p className="text-sm text-gray-500">Base case scenario</p>
          </div>
          <div className="p-5">
            <h4 className="font-medium text-gray-800 mb-2">Year 1 (2025)</h4>
            <ul className="space-y-1 text-sm text-gray-600 mb-4">
              <li>• Construction: 10,000 users</li>
              <li>• QSR (incl. McDonald's): 1,000 users</li>
              <li>• <strong>Total users:</strong> 11,000</li>
              <li>• <strong>Revenue:</strong> $1.0M</li>
            </ul>
            <h4 className="font-medium text-gray-800 mb-2">Year 2 (2026)</h4>
            <ul className="space-y-1 text-sm text-gray-600 mb-4">
              <li>• Construction: 15,000 users</li>
              <li>• QSR (incl. McDonald's): 5,000 users</li>
              <li>• <strong>Total users:</strong> 20,000</li>
              <li>• <strong>Revenue:</strong> $2.0M</li>
            </ul>
            <h4 className="font-medium text-gray-800 mb-2">Year 3 (2027)</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Construction: 20,000 users</li>
              <li>• QSR (incl. McDonald's): 20,000 users</li>
              <li>• <strong>Total users:</strong> 40,000</li>
              <li>• <strong>Revenue:</strong> $4.0M</li>
            </ul>
          </div>
        </div>
        {/* Realistic Card */}
        <div className="border border-blue-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="bg-blue-100 p-4">
            <h3 className="text-xl font-bold text-blue-700">Realistic</h3>
            <p className="text-sm text-blue-500">Most likely scenario</p>
          </div>
          <div className="p-5">
            <h4 className="font-medium text-gray-800 mb-2">Year 1 (2025)</h4>
            <ul className="space-y-1 text-sm text-gray-600 mb-4">
              <li>• QSR (incl. McDonald's): 10,000 users</li>
              <li>• Construction: 10,000 users</li>
              <li>• <strong>Total users:</strong> 20,000</li>
              <li>• <strong>Revenue:</strong> $1.5M</li>
            </ul>
            <h4 className="font-medium text-gray-800 mb-2">Year 2 (2026)</h4>
            <ul className="space-y-1 text-sm text-gray-600 mb-4">
              <li>• QSR (incl. McDonald's): 20,000 users</li>
              <li>• Construction: 20,000 users</li>
              <li>• <strong>Total users:</strong> 40,000</li>
              <li>• <strong>Revenue:</strong> $3.0M</li>
            </ul>
            <h4 className="font-medium text-gray-800 mb-2">Year 3 (2027)</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• QSR (incl. McDonald's): 30,000 users</li>
              <li>• Construction: 30,000 users</li>
              <li>• <strong>Total users:</strong> 60,000</li>
              <li>• <strong>Revenue:</strong> $6.0M</li>
            </ul>
          </div>
        </div>
        {/* Optimistic Card */}
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
              <li>• Technical team: $500K (2025) → $1.0M (2026) → $1.5M (2027)</li>
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
);

export default ScenariosSection; 