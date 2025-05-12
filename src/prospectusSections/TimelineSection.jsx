import React from 'react';
import { Briefcase, Users, TrendingUp, PieChart } from 'lucide-react';

const TimelineSection = ({ timelineData }) => (
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
                  <span className={`text-xs px-2 py-1 rounded-full ${item.event.includes('15,000') ? 'bg-yellow-200 text-yellow-900 font-bold border border-yellow-400' : 'bg-blue-100 text-blue-800'}`}>{item.milestone}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">{item.event}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ... (rest of the timeline section JSX) ... */}
    </div>
  </div>
);

export default TimelineSection; 