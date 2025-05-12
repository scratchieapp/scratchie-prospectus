import React from 'react';
import { Check, Clock } from 'lucide-react';

const InvestmentSection = () => (
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
);

export default InvestmentSection; 