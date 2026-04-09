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

  return (
    <div className="flex flex-col p-6 h-full">
      <h3 className="text-lg font-medium text-white mb-6">Quick-Fix Action Plan</h3>
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
                group cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between
                ${
                  isDone
                    ? "bg-emerald-500/10 border-emerald-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`
                    w-6 h-6 rounded-full border flex items-center justify-center transition-colors
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
                  className={`text-sm font-medium transition-colors ${
                    isDone ? "text-emerald-400 line-through decoration-emerald-500/50" : "text-white"
                  }`}
                >
                  {action.title}
                </span>
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${isDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                {action.impact} Impact
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
