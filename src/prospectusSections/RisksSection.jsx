import React from 'react';
import { AlertTriangle, Activity, TrendingDown, Users, User, Briefcase, Shield, Lock, Globe, FileText, DollarSign } from 'lucide-react';

const RisksSection = ({ risksData }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Risk Assessment</h2>
        
        <div className="mb-8 bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            <h3 className="text-xl font-bold text-red-800">Honest Risk Disclosure</h3>
          </div>
          <p className="text-gray-700 mb-2">
            We believe transparency is essential, especially with friends and family investors. 
            While we're excited about Scratchie's potential, we want to be clear-eyed about the challenges we face.
          </p>
          <p className="text-gray-700">
            Please review these risks carefully and only invest what you can afford to lose. 
            We're committed to navigating these challenges, but startup investing inherently carries substantial risk.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {risksData.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full mr-4 ${category.bgColor}`}>
                  <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.risks.map((risk, riskIndex) => (
                  <li key={riskIndex} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-red-500 mr-2 mt-0.5">•</div>
                    <div>
                      <p className="font-medium text-gray-800">{risk.title}</p>
                      <p className="text-sm text-gray-600">{risk.description}</p>
                      {risk.mitigation && (
                        <p className="text-sm text-green-600 mt-1">
                          <span className="font-medium">Mitigation: </span>{risk.mitigation}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-10 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Risk Impact Matrix</h3>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">Risk</th>
                  <th scope="col" className="px-6 py-3">Likelihood</th>
                  <th scope="col" className="px-6 py-3">Impact</th>
                  <th scope="col" className="px-6 py-3">Primary Mitigation Strategy</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  // Flatten and sort risks by likelihood * impact descending
                  const allRisks = risksData.flatMap(category =>
                    category.risks.filter(risk => risk.likelihood && risk.impact).map(risk => ({
                      ...risk,
                      score: risk.likelihood * risk.impact
                    }))
                  );
                  const sortedRisks = allRisks.sort((a, b) => b.score - a.score);
                  const topScores = sortedRisks.slice(0, 3).map(r => r.score);
                  return sortedRisks.map((risk, index) => (
                    <tr key={index} className={`bg-white border-b ${topScores.includes(risk.score) ? 'bg-yellow-100 font-bold' : ''}`}>
                      <td className="px-6 py-4 font-medium">{risk.title}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className={`w-16 h-2 rounded-full ${getLikelihoodColor(risk.likelihood)}`}></div>
                          <span className="ml-2">{risk.likelihood}/5</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className={`w-16 h-2 rounded-full ${getImpactColor(risk.impact)}`}></div>
                          <span className="ml-2">{risk.impact}/5</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{risk.mitigation}</td>
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Our Approach to Risk</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            While we can't eliminate all risks, we actively monitor and mitigate them through regular assessment, 
            diversified growth strategies, and maintaining open communication with investors. We report on key risk 
            indicators quarterly to ensure transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper functions for formatting
const getLikelihoodColor = (likelihood) => {
  if (likelihood <= 2) return 'bg-green-400';
  if (likelihood <= 3) return 'bg-yellow-400';
  return 'bg-red-400';
};

const getImpactColor = (impact) => {
  if (impact <= 2) return 'bg-green-400';
  if (impact <= 3) return 'bg-yellow-400';
  return 'bg-red-400';
};

export default RisksSection;