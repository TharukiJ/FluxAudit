export const auditData = {
  brandName: "NanoTech SL",
  trustScore: 42,
  revenueLeakEstimate: "$2,800/mo",
  brandVibe: "Modern Tech",
  quickestWin: "Update Google Maps Location & Hours",
  auditFindings: {
    positives: [
      "Good variety of latest gadgets.",
      "Active on Facebook groups."
    ],
    negatives: [
      "Blurry photos taken inside the shop with bad lighting.",
      "Google Maps shows they are open on Sundays, but they are closed.",
      "No video unboxing or feature reviews.",
      "Caption language is too technical and boring."
    ]
  },
  competitorHeatmap: [
    {
      metric: "Trust Factor",
      targetBrand: "Low",
      competitorA: "High",
      competitorB: "High"
    },
    {
      metric: "Response Time",
      targetBrand: "Medium",
      competitorA: "Fast",
      competitorB: "Medium"
    },
    {
      metric: "Visual Quality",
      targetBrand: "Low",
      competitorA: "High",
      competitorB: "Medium"
    }
  ],
  contentGaps: [
    {
      title: "No Video Unboxings",
      description: "Missing massive reach from tech lifestyle TikTok/Reels audience."
    },
    {
      title: "Technical Captions",
      description: "Too boring for casual buyers looking for tech benefits, not just specs."
    },
    {
      title: "Google Maps Error",
      description: "Listing says open Sunday, causing angry closed-door customers."
    }
  ],
  actionPlan: [
    { id: "t1", title: "Claim Business Profile", impact: "High" },
    { id: "t2", title: "Hire a Content Creator for Unboxings", impact: "High" },
    { id: "t3", title: "Run a 'Review & Win' Contest", impact: "Medium" }
  ],
  socialProof: [
    {
      user: "@gadgetfreak",
      text: "Drove 40 mins on Sunday to buy a PS5 and they were closed despite Google saying open! 🤬",
      sentiment: "Neutral"
    },
    {
      user: "Nimal Perera",
      text: "Good prices but hard to know what they actually have in stock online.",
      sentiment: "Neutral"
    },
    {
      user: "@tech_guru",
      text: "Bought my iPhone here. Great service, wish they had an online catalog.",
      sentiment: "Positive"
    }
  ],
  opportunityScore: [
    { month: "Jan", current: 10000, projected: 10000 },
    { month: "Feb", current: 10500, projected: 14000 },
    { month: "Mar", current: 10200, projected: 19000 },
    { month: "Apr", current: 11000, projected: 25000 },
    { month: "May", current: 11200, projected: 31000 },
    { month: "Jun", current: 11500, projected: 40000 }
  ],
  visualSEO: [
    {
      item: "Keyword presence in Bio",
      status: "Fail"
    },
    {
      item: "Product unboxing visuals",
      status: "Fail"
    },
    {
      item: "Location tagging consistency",
      status: "Fail"
    }
  ],
  postMockup: {
    hook: {
      highlight: "NEW DROP",
      subtext: "UNBOX WITH US"
    },
    tooltips: [
      { title: "Trending Audio Hooks", description: "Boosts algorithmic video reach" },
      { title: "Dynamic Lighting", description: "Makes gadgets look premium" },
      { title: "Clear CTA", description: "Directs traffic to WhatsApp/Site" }
    ]
  }
};
