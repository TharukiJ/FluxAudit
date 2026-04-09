"use client";

import { motion } from "framer-motion";

export default function TrustScore({ score }: { score: number }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-6 h-full min-h-[250px]">
      <div className="relative flex items-center justify-center">
        <svg width="160" height="160" className="transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
          />
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            fill="transparent"
            stroke="url(#gradient)"
            strokeWidth="12"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {score}
          </motion.span>
          <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider">/ 100</span>
        </div>
      </div>
      <h3 className="mt-6 text-lg font-medium text-white">Trust Score</h3>
      <p className="text-sm text-gray-400 text-center mt-2 max-w-[200px]">
        Overall digital health based on recent activity, visual consistency, and engagement.
      </p>
    </div>
  );
}
