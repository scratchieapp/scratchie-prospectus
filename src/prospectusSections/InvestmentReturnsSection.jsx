import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { DollarSign, TrendingUp, Calendar, AlertCircle, ArrowRight } from 'lucide-react';

const InvestmentReturnsSection = ({ investmentReturnsData, initialInvestment = 50000 }) => {
  const [investmentAmount, setInvestmentAmount] = useState(initialInvestment);
  
  // Calculate returns based on input amount
  const calculateReturns = (amount) => {
    return investmentReturnsData.map(year => {
      const factor = amount / initialInvestment;
      return {
        ...year,
        conservativeReturn: Math.round(year.conservativeReturn * factor),
        realisticReturn: Math.round(year.realisticReturn * factor),
        optimisticReturn: Math.round(year.optimisticReturn * factor),
      };
    });
  };
  
  const adjustedReturns = calculateReturns(investmentAmount);
  
  // Calculate multiples for each scenario
  const getMultiple = (value) => {
    return (value / investmentAmount).toFixed(1) + 'x';
  };
  
  // Format currency for display
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0 
    }).format(value);
  };
  
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Investment Return Projections</h2>
        
        <div className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-start md:items-center mb-4 flex-col md:flex-row">
            <div className="flex items-center mr-0 md:mr-4 mb-4 md:mb-0">
              <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-blue-800">Investment Simulator</h3>
            </div>
            <div className="flex-grow w-full md:w-auto">
              <div className="flex items-center">
                <span className="mr-2 whitespace-nowrap">Investment Amount:</span>
                <input
                  type="range"
                  min="25000"
                  max="300000"
                  step="5000"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="ml-2 font-bold text-blue-800 whitespace-nowrap min-w-[100px]">
                  {formatCurrency(investmentAmount)}
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            This simulator shows potential returns on your investment over time based on our three projection scenarios.
            Adjust the slider to see how different investment amounts might perform.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Projected Investment Value</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={adjustedReturns}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip 
                  formatter={(value) => [`${formatCurrency(value)}`, '']}
                  labelFormatter={(label) => `Year: ${label}`}
                />
                <Legend />
                <Bar dataKey="conservativeReturn" name="Conservative" fill="#9CA3AF" />
                <Bar dataKey="realisticReturn" name="Realistic" fill="#3B82F6" />
                <Bar dataKey="optimisticReturn" name="Optimistic" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <Calendar className="h-5 w-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-bold text-gray-700">Year 1 (2025)</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Conservative:</span>
                <div className="text-right">
                  <div className="font-bold text-gray-800">{formatCurrency(adjustedReturns[0].conservativeReturn)}</div>
                  <div className="text-xs text-gray-500">{getMultiple(adjustedReturns[0].conservativeReturn)} return</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Realistic:</span>
                <div className="text-right">
                  <div className="font-bold text-blue-600">{formatCurrency(adjustedReturns[0].realisticReturn)}</div>
                  <div className="text-xs text-blue-500">{getMultiple(adjustedReturns[0].realisticReturn)} return</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Optimistic:</span>
                <div className="text-right">
                  <div className="font-bold text-green-600">{formatCurrency(adjustedReturns[0].optimisticReturn)}</div>
                  <div className="text-xs text-green-500">{getMultiple(adjustedReturns[0].optimisticReturn)} return</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <Calendar className="h-5 w-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-bold text-gray-700">Year 2 (2026)</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Conservative:</span>
                <div className="text-right">
                  <div className="font-bold text-gray-800">{formatCurrency(adjustedReturns[1].conservativeReturn)}</div>
                  <div className="text-xs text-gray-500">{getMultiple(adjustedReturns[1].conservativeReturn)} return</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Realistic:</span>
                <div className="text-right">
                  <div className="font-bold text-blue-600">{formatCurrency(adjustedReturns[1].realisticReturn)}</div>
                  <div className="text-xs text-blue-500">{getMultiple(adjustedReturns[1].realisticReturn)} return</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Optimistic:</span>
                <div className="text-right">
                  <div className="font-bold text-green-600">{formatCurrency(adjustedReturns[1].optimisticReturn)}</div>
                  <div className="text-xs text-green-500">{getMultiple(adjustedReturns[1].optimisticReturn)} return</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <Calendar className="h-5 w-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-bold text-gray-700">Year 3 (2027)</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Conservative:</span>
                <div className="text-right">
                  <div className="font-bold text-gray-800">{formatCurrency(adjustedReturns[2].conservativeReturn)}</div>
                  <div className="text-xs text-gray-500">{getMultiple(adjustedReturns[2].conservativeReturn)} return</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Realistic:</span>
                <div className="text-right">
                  <div className="font-bold text-blue-600">{formatCurrency(adjustedReturns[2].realisticReturn)}</div>
                  <div className="text-xs text-blue-500">{getMultiple(adjustedReturns[2].realisticReturn)} return</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Optimistic:</span>
                <div className="text-right">
                  <div className="font-bold text-green-600">{formatCurrency(adjustedReturns[2].optimisticReturn)}</div>
                  <div className="text-xs text-green-500">{getMultiple(adjustedReturns[2].optimisticReturn)} return</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8 text-left">
          <div className="flex items-center mb-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
            <h3 className="text-lg font-bold text-yellow-800">Important Considerations</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
              <span><strong>Illiquidity:</strong> Your investment will be illiquid until an exit event (acquisition, buyout, or IPO). This typically takes 5-7+ years for startups.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
              <span><strong>Dilution:</strong> These projections do not account for potential dilution from future funding rounds. Additional capital raises may reduce your ownership percentage.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
              <span><strong>Projections only:</strong> These figures represent potential outcomes based on our current growth forecasts and industry multiples. Actual returns could vary significantly.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
              <span><strong>No guarantees:</strong> Startup investments carry substantial risk. You should be prepared for the possibility of partial or complete loss of investment.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Valuation Methodology</h3>
          <p className="text-gray-600 mb-4">
            These projections are based on SaaS industry revenue multiples applied to our financial forecasts:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scenario</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue Multiple</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ownership at Exit</th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Conservative</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4-5x ARR</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.5-4.0%</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Moderate dilution from Series A</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Realistic</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6-8x ARR</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.0-3.5%</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Standard dilution from Series A & B</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Optimistic</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-12x ARR</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.0-2.5%</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Higher dilution from larger rounds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentReturnsSection;