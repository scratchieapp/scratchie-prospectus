import React from 'react';
import { Building, Award, Target, Users, Check } from 'lucide-react';

const GrowthDriversSection = () => (
  <div className="space-y-8">
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Core Growth Drivers</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col items-start">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Construction Industry</h3>
          </div>
          <ul className="space-y-2 text-gray-600 w-full">
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Launch at FCON Brisbane (May 19) to 700+ industry leaders</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Medium sites (200-300 workers): $1,000-$1,500 monthly revenue each</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Large sites (500-600 workers): $2,500-$3,000 monthly revenue each</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>5% commission on rewards (avg. $10/user/month)</span></li>
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
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>1,000 McDonald's stores across Australia</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>50-100 crew members per store</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Potential: 50,000-100,000 subscribers from McDonald's alone</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Donesafe integration unlocks other QSR chains like KFC</span></li>
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
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span><strong>Geotab:</strong> 4.7 million vehicles worldwide</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Just 1% penetration = 47,000 additional subscribers</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span><strong>SafetyCulture:</strong> Global platform with millions of users</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>API-first architecture enables seamless integration</span></li>
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
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Free tier with basic rewards functionality</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Premium features: analytics, branding, integrations</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>Target conversion rate: 5-15% to paid subscriptions</span></li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /><span>In-app prompts & demonstrated ROI metrics drive conversion</span></li>
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
);

export default GrowthDriversSection; 