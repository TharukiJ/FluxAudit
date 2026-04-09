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
              ? "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/20"
              : "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-white border-blue-500/20"
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
                    ? "bg-emerald-500/10 border-emerald-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }
              `}
            >
              <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
                <div
                  className={`
                    mt-0.5 shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center transition-colors
                    ${
                      isDone
                        ? "bg-emerald-500 border-emerald-500 text-black"
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
                    isDone ? "text-emerald-400 line-through decoration-emerald-500/50" : "text-white"
                  }`}
                >
                  {action.title}
                </span>
              </div>
              <span className={`shrink-0 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${isDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                {action.impact} Impact
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
