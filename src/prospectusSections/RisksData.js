// This data should be integrated into your main ScratchieProspectus.jsx file
// Import the necessary icons at the top of your file
import { 
    AlertTriangle, Activity, TrendingDown, Users, User, 
    Briefcase, Shield, Lock, Globe, FileText, DollarSign 
  } from 'lucide-react';
  
  // Add this to your component's data structures
  const risksData = [
    {
      title: "Product & Market Risks",
      bgColor: "bg-blue-100",
      icon: Activity,
      iconColor: "text-blue-600",
      risks: [
        {
          title: "Product Functionality Issues",
          description: "Technical problems could impact user experience and adoption.",
          mitigation: "Rigorous QA process and fast iteration cycles based on user feedback.",
          likelihood: 2,
          impact: 4
        },
        {
          title: "Product-Market Fit Challenges",
          description: "The product may not address customer needs as effectively as projected.",
          mitigation: "Continuous validation through McDonald's and construction partners.",
          likelihood: 3,
          impact: 5
        },
        {
          title: "Competitive Landscape Changes",
          description: "New entrants or existing safety platforms could pivot into our space.",
          mitigation: "Maintain speed advantage and prioritize unique features like Convo Card.",
          likelihood: 3,
          impact: 3
        },
        {
          title: "Technology Platform Dependencies",
          description: "Changes to platforms we integrate with could affect functionality.",
          mitigation: "API-first architecture allows for flexible integration alternatives.",
          likelihood: 2,
          impact: 3
        }
      ]
    },
    {
      title: "Business & Financial Risks",
      bgColor: "bg-green-100",
      icon: DollarSign,
      iconColor: "text-green-600",
      risks: [
        {
          title: "Slower Enterprise Sales Cycles",
          description: "Enterprise deals may take longer to close than anticipated.",
          mitigation: "Diversified pipeline with businesses of varying sizes and sectors.",
          likelihood: 4,
          impact: 3
        },
        {
          title: "Lower Freemium Conversion Rates",
          description: "Users may not convert from free to paid at projected rates.",
          mitigation: "Tiered pricing strategy and clear premium value propositions.",
          likelihood: 3,
          impact: 4
        },
        {
          title: "Cash Flow Management",
          description: "Growth expenses could outpace revenue faster than anticipated.",
          mitigation: "Lean operations and milestone-based spending approach.",
          likelihood: 3,
          impact: 4
        },
        {
          title: "Follow-on Funding Challenges",
          description: "Future rounds may be difficult to raise or dilutive to early investors.",
          mitigation: "Multiple paths to profitability and conservative burn rate management.",
          likelihood: 3,
          impact: 4
        }
      ]
    },
    {
      title: "Operational Risks",
      bgColor: "bg-yellow-100",
      icon: Briefcase,
      iconColor: "text-yellow-600",
      risks: [
        {
          title: "Key Personnel Dependency",
          description: "Reliance on James and Garry could create single points of failure.",
          mitigation: "Cross-training team members and improved documentation with Release 3.",
          likelihood: 2,
          impact: 5
        },
        {
          title: "Scaling Challenges",
          description: "Operational issues could emerge as we grow rapidly.",
          mitigation: "Cloud infrastructure designed for scalability and automated workflows.",
          likelihood: 3,
          impact: 3
        },
        {
          title: "Customer Onboarding Complexity",
          description: "Enterprise customers may require more support than anticipated.",
          mitigation: "Standardized onboarding processes and self-service documentation.",
          likelihood: 3,
          impact: 2
        },
        {
          title: "Supply Chain Dependencies",
          description: "Reliance on third-party reward suppliers could create fulfillment issues.",
          mitigation: "Multiple supplier relationships and buffer inventory for popular rewards.",
          likelihood: 2,
          impact: 2
        }
      ]
    },
    {
      title: "External & Market Risks",
      bgColor: "bg-purple-100",
      icon: Globe,
      iconColor: "text-purple-600",
      risks: [
        {
          title: "Economic Downturn",
          description: "Market conditions could reduce customer budgets for safety incentives.",
          mitigation: "Positioning as ROI-positive cost reduction (fewer incidents = lower costs).",
          likelihood: 3,
          impact: 3
        },
        {
          title: "Regulatory Changes",
          description: "New workplace safety or data privacy regulations could require product changes.",
          mitigation: "Regular compliance reviews and agile development for quick adaptation.",
          likelihood: 2,
          impact: 4
        },
        {
          title: "International Expansion Complications",
          description: "Cultural, legal, or operational challenges when scaling beyond Australia.",
          mitigation: "Phased approach starting with similar markets (NZ, UK, US).",
          likelihood: 3,
          impact: 2
        },
        {
          title: "Data Security & Privacy Concerns",
          description: "Breaches or compliance issues could damage reputation and trust.",
          mitigation: "SOC 2 compliance roadmap and regular security audits.",
          likelihood: 2,
          impact: 5
        }
      ]
    }
  ];
  
  // Then export it for use in your main file
  export default risksData;