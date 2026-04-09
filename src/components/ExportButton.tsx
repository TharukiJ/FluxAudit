"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ExportButton() {
  return (
    <div className="flex justify-center w-full mt-12 mb-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group rounded-full p-[2px] overflow-hidden"
      >
        {/* Animated Conic Gradient Border */}
        <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_3s_linear_infinite] opacity-70 group-hover:opacity-100 transition-opacity" />
        
        {/* Glow effect on hover */}
        <span className="absolute inset-0 bg-purple-500/50 blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Button Content */}
        <span className="relative flex items-center justify-center gap-2 px-8 py-4 bg-black rounded-full w-full h-full text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-3xl">
          <Download size={18} className="text-purple-300" />
          Generate Client Report
        </span>
      </motion.button>
    </div>
  );
}
