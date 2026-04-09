"use client";

import { motion } from "framer-motion";
import { Search, CheckCircle2, XCircle } from "lucide-react";

type SEOItem = {
  item: string;
  status: string;
};

export default function VisualSEO({ data }: { data: SEOItem[] }) {
  return (
    <div className="flex flex-col p-6 h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-full bg-blue-500/10 text-blue-400">
          <Search size={20} />
        </div>
        <h3 className="text-lg font-medium text-white">Search Visibility</h3>
      </div>
      
      <div className="flex flex-col gap-4 flex-grow justify-center">
        {data.map((seo, i) => {
          const isPass = seo.status === "Pass";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 + 0.4 }}
              className={`
                flex items-center justify-between p-4 rounded-xl border transition-all duration-300
                ${isPass 
                  ? "bg-emerald-500/5 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]" 
                  : "bg-red-500/5 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.05)]"
                }
              `}
            >
              <span className={`text-sm font-medium flex-1 min-w-0 pr-3 break-words ${isPass ? 'text-white/90' : 'text-white/90'}`}>
                {seo.item}
              </span>
              <div className="flex items-center gap-2 flex-shrink-0">
                {isPass ? (
                  <>
                    <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">Pass</span>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                  </>
                ) : (
                  <>
                    <span className="text-xs uppercase tracking-wider font-bold text-red-400">Fail</span>
                    <XCircle size={18} className="text-red-400" />
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
