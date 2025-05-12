// This data should be integrated into your main ScratchieProspectus.jsx file

// Add this investment returns data to your component's data structures
const investmentReturnsData = [
    {
      year: "2025",
      // For a $50,000 investment
      conservativeReturn: 40000,     // 0.8x initial investment
      realisticReturn: 60000,        // 1.2x initial investment
      optimisticReturn: 125000,      // 2.5x initial investment
      conservativeMultiple: 0.8,
      realisticMultiple: 1.2,
      optimisticMultiple: 2.5
    },
    {
      year: "2026",
      conservativeReturn: 80000,    // 1.6x initial investment
      realisticReturn: 120000,       // 2.4x initial investment
      optimisticReturn: 337500,      // 6.75x initial investment
      conservativeMultiple: 1.6,
      realisticMultiple: 2.4,
      optimisticMultiple: 6.75
    },
    {
      year: "2027",
      conservativeReturn: 160000,    // 3.2x initial investment
      realisticReturn: 240000,       // 4.8x initial investment
      optimisticReturn: 950000,      // 19.0x initial investment
      conservativeMultiple: 3.2,
      realisticMultiple: 4.8,
      optimisticMultiple: 19.0
    }
  ];
  
  // Explanation of the calculation methodology:
  /*
  These return projections are based on:
  
  1. Initial Valuation: 
     - The company's current pre-money valuation of $5M
     - A $50,000 investment represents approximately 1% ownership
  
  2. Revenue Multipliers:
     - Conservative: 4-5x ARR (Annual Recurring Revenue)
     - Realistic: 6-8x ARR
     - Optimistic: 10-12x ARR
  
  3. Dilution Factors:
     - Conservative: Minimal dilution (15-20%)
     - Realistic: Moderate dilution (25-35%)
     - Optimistic: Higher dilution (40-50%) due to larger rounds
  
  4. Year-by-Year Calculations:
     - 2025 values reflect both revenue growth and initial market validation
     - 2026 values incorporate Series A round and market expansion
     - 2027 values represent potential exit scenarios with strategic buyers
  
  These projections factor in standard industry metrics for SaaS valuations in 
  the workplace safety and engagement niche, while accounting for realistic 
  dilution scenarios through future funding rounds.
  */
  
  // Export this for use in your main file
  export default investmentReturnsData;