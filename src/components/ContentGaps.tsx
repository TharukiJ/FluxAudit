"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

type ContentGap = {
  title: string;
  description: string;
};

export default function ContentGaps({ gaps }: { gaps: ContentGap[] }) {
  return (
    <div className="flex flex-col p-6 h-full">
      <h3 className="text-lg font-medium text-white mb-6">Content Gaps</h3>
      <div className="flex flex-col gap-4 flex-grow justify-center">
        {gaps.map((gap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start gap-4"
          >
            <div className="p-2 rounded-full bg-[#790604]/30 text-[#790604] border border-[#790604]/20 mt-0.5 shadow-[0_0_10px_rgba(121,6,4,0.2)]">
              <AlertCircle size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">{gap.title}</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                {gap.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
