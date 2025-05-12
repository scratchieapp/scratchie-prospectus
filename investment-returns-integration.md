# Integration Guide for the Investment Returns Section

This guide provides step-by-step instructions for integrating the new Investment Returns section into your Scratchie Prospectus app.

## Step 1: Add the Investment Returns Data

Import the investment returns data into your main `ScratchieProspectus.jsx` file:

```jsx
// Add this alongside your other data constants
const investmentReturnsData = [
  {
    year: "2025",
    // For a $50,000 investment
    conservativeReturn: 60000,     // 1.2x initial investment
    realisticReturn: 75000,        // 1.5x initial investment
    optimisticReturn: 125000,      // 2.5x initial investment
    conservativeMultiple: 1.2,
    realisticMultiple: 1.5,
    optimisticMultiple: 2.5
  },
  {
    year: "2026",
    conservativeReturn: 112500,    // 2.25x initial investment
    realisticReturn: 200000,       // 4.0x initial investment
    optimisticReturn: 337500,      // 6.75x initial investment
    conservativeMultiple: 2.25,
    realisticMultiple: 4.0,
    optimisticMultiple: 6.75
  },
  {
    year: "2027",
    conservativeReturn: 187500,    // 3.75x initial investment
    realisticReturn: 500000,       // 10.0x initial investment
    optimisticReturn: 950000,      // 19.0x initial investment
    conservativeMultiple: 3.75,
    realisticMultiple: 10.0,
    optimisticMultiple: 19.0
  }
];
```

## Step 2: Create the InvestmentReturnsSection Component

Create a new file called `InvestmentReturnsSection.jsx` in your components directory and paste the contents of the InvestmentReturnsSection.jsx artifact.

## Step 3: Update Navigation Tabs

Add a new tab for the Investment Returns section:

```jsx
{/* Navigation Tabs */}
<div className="flex flex-wrap justify-center mb-8 space-x-2">
  <button
    onClick={() => setActiveTab('overview')}
    className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'} mb-2`}
  >
    Overview
  </button>
  {/* Your other existing tabs */}
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
```

## Step 4: Add the Investment Returns Section to Conditional Rendering

Add the InvestmentReturnsSection component to your conditional rendering logic:

```jsx
{/* Content Sections */}
{activeTab === 'overview' && (
  <OverviewSection 
    revenueData={revenueData} 
    userGrowthData={userGrowthData}
    breakdownData2026={breakdownData2026}
  />
)}
{/* Your other existing sections */}
{activeTab === 'risks' && (
  <RisksSection risksData={risksData} />
)}
{activeTab === 'returns' && (
  <InvestmentReturnsSection 
    investmentReturnsData={investmentReturnsData} 
    initialInvestment={50000}
  />
)}
```

## Step 5: Import the InvestmentReturnsSection Component

Add the import for the InvestmentReturnsSection component at the top of your main file:

```jsx
import InvestmentReturnsSection from './InvestmentReturnsSection';
```

## Step 6: Import Required Icons

Make sure to import the additional Lucide icons needed for this component:

```jsx
import { 
  // Your existing icon imports
  DollarSign, TrendingUp, Calendar, AlertCircle, ArrowRight 
} from 'lucide-react';
```

## Customization Options

The Investment Returns Section includes these customizable features:

1. **Adjustable Investment Amount**: Users can use the slider to see how different investment amounts affect the potential returns.

2. **Return Multiples**: If you want to adjust the projected returns for each scenario, modify the values in `investmentReturnsData` array.

3. **Valuation Methodology**: You can update the methodology table to reflect your specific valuation approach if needed.

4. **Default Investment**: The component accepts an `initialInvestment` prop that defaults to $50,000. You can change this when you render the component if needed.

## Final Notes

1. **Realistic Expectations**: The returns shown (especially the optimistic scenario in Year 3) may seem very high. This is typical of early-stage startup projections but should be backed by logical multiples of revenue. You may want to adjust these numbers to match your actual financial projections.

2. **Disclaimer**: The component already includes important disclaimers about illiquidity, dilution, and risk. Be sure to maintain these for transparent communication with friends and family investors.

3. **Interactive Features**: The investment slider allows people to see outcomes for different investment amounts. This helps them understand their potential returns at different commitment levels.

Your Cursor IDE agent should be able to help you integrate this code into your existing application structure.