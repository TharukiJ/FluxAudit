"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

type ActionItem = {
  id: string;
  title: string;
  impact: string;
};

export default function ActionPlan({ actions }: { actions: ActionItem[] }) {
  const [completed, setCompleted] = useState<string[]>([]);

  const toggleAction = (id: string) => {
    if (completed.includes(id)) {
      setCompleted(completed.filter((c) => c !== id));
    } else {
      setCompleted([...completed, id]);
    }
  };

  const isAllDone = actions.length > 0 && completed.length === actions.length;

  return (
    <div className="flex flex-col p-6 h-full">
      <div className="flex items-center justify-between mb-6 gap-4">
        <h3 className="text-lg font-medium text-white">Quick-Fix Action Plan</h3>
        <button 
          onClick={() => setCompleted(isAllDone ? [] : actions.map(a => a.id))}
          className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors border whitespace-nowrap ${
            isAllDone 
              ? "bg-[#B2A18F]/20 text-[#B2A18F] hover:bg-[#B2A18F]/30 border-[#B2A18F]/30 shadow-[0_0_10px_rgba(178,161,143,0.2)]"
              : "bg-[#0F1C38]/60 text-[#B2A18F] hover:bg-[#0F1C38]/80 hover:text-white border-[#0F1C38]"
          }`}
        >
          {isAllDone ? "Undo All" : "Fix All"}
        </button>
      </div>
      <div className="flex flex-col gap-3 flex-grow">
        {actions.map((action, i) => {
          const isDone = completed.includes(action.id);
          return (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.6 }}
              onClick={() => toggleAction(action.id)}
              className={`
                group cursor-pointer p-3 sm:p-4 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-3
                ${
                  isDone
                    ? "bg-[#B2A18F]/10 border-[#B2A18F]/30 shadow-[0_0_15px_rgba(178,161,143,0.1)]"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }
              `}
            >
              <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
                <div
                  className={`
                    mt-0.5 shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center transition-all duration-300
                    ${
                      isDone
                        ? "bg-[linear-gradient(to_bottom_right,#790604,#B2A18F)] border-[#B2A18F]/50 text-white shadow-[0_0_10px_rgba(178,161,143,0.4)]"
                        : "border-white/20 text-transparent group-hover:border-white/40"
                    }
                  `}
                >
                  <AnimatePresence>
                    {isDone && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check size={14} strokeWidth={3} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <span
                  className={`text-sm font-medium transition-colors break-words leading-snug ${
                    isDone ? "text-[#B2A18F]/70 line-through decoration-[#B2A18F]/40" : "text-white"
                  }`}
                >
                  {action.title}
                </span>
              </div>
              <span className={`shrink-0 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full border ${isDone ? 'bg-[#B2A18F]/10 text-[#B2A18F] border-[#B2A18F]/20' : 'bg-[#0F1C38]/60 text-[#B2A18F] border-[#0F1C38]'}`}>
                {action.impact} Impact
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
