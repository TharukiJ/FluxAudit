export const auditData = {
  brandName: "Local Roast Coffee",
  trustScore: 65,
  auditFindings: {
    positives: [
      "High-quality photography of coffee and pastries.",
      "Engaging tone of voice in captions.",
      "Clear branding colors and fonts used consistently."
    ],
    negatives: [
      "No Video Content (Reels/TikToks) in the last 6 months.",
      "Bio lacks a Call-to-Action (CTA) and clear location.",
      "Inactive Google Maps presence with wrong hours.",
      "Inconsistent post frequency (gaps of 2+ weeks between posts).",
      "Low reply rate to customer comments and questions."
    ]
  },
  competitorHeatmap: [
    {
      metric: "Posting Consistency",
      targetBrand: "Low",
      competitorA: "High (Daily)",
      competitorB: "Medium"
    },
    {
      metric: "Visual Quality",
      targetBrand: "High",
      competitorA: "Medium",
      competitorB: "High"
    },
    {
      metric: "Response Time",
      targetBrand: "Low (> 24h)",
      competitorA: "Fast (< 2h)",
      competitorB: "Med (< 12h)"
    }
  ],
  contentGaps: [
    {
      title: "No Video Content",
      description: "Missing out on organic reach from Instagram Reels and TikToks."
    },
    {
      title: "Bio Lacks a CTA",
      description: "No link for reservations, ordering ahead, or mailing list."
    },
    {
      title: "Inactive Google Maps",
      description: "Profile unclaimed or missing updated weekend hours."
    }
  ],
  actionPlan: [
    {
      id: "action-1",
      title: "Create a Linktree & Update Bio",
      impact: "High"
    },
    {
      id: "action-2",
      title: "Claim Google Business Profile & Update Hours",
      impact: "High"
    },
    {
      id: "action-3",
      title: "Record 3 Behind-the-Scenes Short-Form Videos",
      impact: "Medium"
    }
  ],
  socialProof: [
    {
      user: "@sarah_loves_coffee",
      text: "The pastries look amazing, but I drove there on a Sunday and they were closed! Google Maps said open. :(",
      sentiment: "Neutral"
    },
    {
      user: "@mike_the_foodie",
      text: "Best espresso in town, hands down. Just wish they posted their daily specials.",
      sentiment: "Positive"
    },
    {
      user: "@jessica_r",
      text: "Love the aesthetic of the cafe, but their online presence doesn't match the vibe.",
      sentiment: "Neutral"
    }
  ],
  opportunityScore: [
    { month: "Jan", current: 2000, projected: 2000 },
    { month: "Feb", current: 2100, projected: 2500 },
    { month: "Mar", current: 2050, projected: 3200 },
    { month: "Apr", current: 2200, projected: 4500 },
    { month: "May", current: 2300, projected: 6000 },
    { month: "Jun", current: 2400, projected: 8500 }
  ],
  visualSEO: [
    {
      item: "Keyword presence in Bio",
      status: "Fail"
    },
    {
      item: "Alt-text usage on images",
      status: "Fail"
    },
    {
      item: "Location tagging consistency",
      status: "Pass"
    }
  ]
};
