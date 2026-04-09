"use client";

import { motion } from "framer-motion";

type Review = {
  user: string;
  text: string;
  sentiment: string;
};

export default function SocialProof({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex flex-col p-6 h-full">
      <h3 className="text-lg font-medium text-white mb-6">Customer Sentiment (Social Proof)</h3>
      <div className="flex flex-row overflow-x-auto gap-4 pb-2 snap-x snap-mandatory hide-scrollbar flex-grow items-stretch">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className="glass-card min-w-[280px] sm:min-w-[320px] max-w-[320px] p-4 flex flex-col justify-between group hover:bg-white/5 transition-colors snap-center shrink-0"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <span className="text-sm font-semibold text-white/90 truncate">{review.user}</span>
                <span className="flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full bg-white/5 border border-white/10 w-fit shrink-0">
                  {review.sentiment === "Positive" ? "🟢" : "🟡"} 
                  <span className="text-white/70">{review.sentiment}</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
