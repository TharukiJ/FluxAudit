"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Sparkles, AlertTriangle, ArrowRight } from "lucide-react";

export default function PostMockup() {
  const [isHoveringRecommended, setIsHoveringRecommended] = useState(false);

  return (
    <div className="flex flex-col p-6 h-full min-h-[450px]">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-medium text-white">Flux-Comparison</h3>
        <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">Visual Strategy</span>
      </div>

      {/* Dual-Phone Frame Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-20 flex-grow bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-12">
        
        {/* The "Current" Phone (The Negative) */}
        <motion.div 
          className={`relative flex flex-col items-center transition-all duration-500 ease-in-out ${
            isHoveringRecommended ? "blur-sm opacity-40 scale-95" : "opacity-80 grayscale-[50%]"
          }`}
        >
          {/* Label */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-max text-red-500/80 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            [ STATUS: INEFFICIENT ]
          </div>

          <div className="relative w-[140px] sm:w-[160px] h-[280px] sm:h-[320px] rounded-[28px] border-[8px] border-gray-800 bg-gray-900 overflow-hidden shadow-2xl">
            {/* Warning Icon Overlays */}
            <div className="absolute top-1/4 left-1/4 z-20 animate-pulse text-red-500/70">
              <AlertTriangle size={24} />
            </div>
            <div className="absolute bottom-1/3 right-1/4 z-20 animate-pulse text-red-500/70 delay-300">
              <AlertTriangle size={20} />
            </div>

            {/* Fake post header */}
            <div className="flex items-center gap-2 p-3 border-b border-gray-800">
              <div className="w-6 h-6 rounded-full bg-gray-700"></div>
              <div className="flex flex-col gap-1">
                <div className="w-12 h-2 rounded bg-gray-700"></div>
              </div>
            </div>
            
            {/* Fake blurry image */}
            <div className="w-full h-[140px] sm:h-[160px] bg-gray-800 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
                <ImageIcon className="text-gray-600 z-10" size={32} />
                <span className="text-gray-600 font-mono text-[8px] mt-2 z-10">Poor Lighting</span>
            </div>
            
            {/* Fake caption */}
            <div className="p-4 space-y-2">
              <div className="w-full h-2 rounded bg-gray-800"></div>
              <div className="w-3/4 h-2 rounded bg-gray-800"></div>
              <div className="w-1/2 h-2 rounded bg-gray-800"></div>
            </div>
          </div>
        </motion.div>


        {/* The "Recommended" Phone (The Positive) */}
        <motion.div 
          onMouseEnter={() => setIsHoveringRecommended(true)}
          onMouseLeave={() => setIsHoveringRecommended(false)}
          className="relative flex flex-col items-center cursor-pointer z-10 -translate-y-4 sm:-translate-y-6"
          whileHover={{ y: -30 }} // Ascends even higher on hover
          animate={{ y: -20 }} // Sits slightly higher natively
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Label */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-max text-emerald-400 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase animate-pulse shadow-emerald-400/50 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
            [ STATUS: OPTIMIZED ]
          </div>

          <div className="relative w-[150px] sm:w-[170px] h-[300px] sm:h-[340px] rounded-[28px] border-[8px] border-gray-900 bg-black overflow-visible shadow-[0_0_50px_rgba(34,211,238,0.3)] transition-shadow duration-300 hover:shadow-[0_0_80px_rgba(34,211,238,0.6)]">
            
            {/* Annotations (Tooltips) */}
            {isHoveringRecommended && (
              <>
                {/* Tooltip 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  className="absolute top-[20%] -right-[110%] sm:-right-[130%] min-w-[140px] sm:min-w-[160px] p-2.5 sm:p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg z-30"
                >
                  <div className="text-[11px] sm:text-xs font-bold text-white mb-1.5 leading-tight">Hook-driven Headline</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-300 leading-snug">Increases watch time by 40%</div>
                  <div className="absolute top-1/2 right-[100%] w-4 sm:w-6 h-[1px] bg-white/30"></div>
                </motion.div>
                
                {/* Tooltip 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                  className="absolute top-[50%] -right-[110%] sm:-right-[130%] min-w-[140px] sm:min-w-[160px] p-2.5 sm:p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg z-30"
                >
                  <div className="text-[11px] sm:text-xs font-bold text-white mb-1.5 leading-tight">High-Contrast Visual</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-300 leading-snug">Stops the scroll instantly</div>
                  <div className="absolute top-1/2 right-[100%] w-4 sm:w-6 h-[1px] bg-white/30"></div>
                </motion.div>

                {/* Tooltip 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                  className="absolute top-[80%] -right-[110%] sm:-right-[130%] min-w-[140px] sm:min-w-[160px] p-2.5 sm:p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg z-30"
                >
                  <div className="text-[11px] sm:text-xs font-bold text-white mb-1.5 leading-tight">Brand-Aligned Colors</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-300 leading-snug">Builds visual recognition</div>
                  <div className="absolute top-1/2 right-[100%] w-4 sm:w-6 h-[1px] bg-white/30"></div>
                </motion.div>
              </>
            )}

            {/* Fake post header */}
            <div className="flex items-center gap-2 p-3 absolute top-0 w-full z-10 bg-gradient-to-b from-black/90 to-transparent pt-4">
              <div className="w-6 h-6 rounded-full bg-cyan-400 p-[1px]">
                  <div className="w-full h-full bg-blue-900 rounded-full border border-black flex items-center justify-center">
                    <Sparkles size={10} className="text-cyan-300" />
                  </div>
              </div>
              <div className="w-16 h-2 rounded bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
            </div>

            {/* Fake High Quality Content */}
            <div className="w-full h-full rounded-[20px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black overflow-hidden relative">
              <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay mix-blend-color-dodge"></div>
              
              <div className="flex flex-col items-center justify-center h-full px-4 relative z-10 w-full">
                {/* The Hook overlay */}
                <div className="text-white font-mono font-black text-center text-[12px] sm:text-sm tracking-tighter leading-snug uppercase mb-16 drop-shadow-[0_5px_5px_rgba(0,0,0,1)] flex flex-col items-center">
                  <span className="bg-cyan-500 text-black px-2 py-0.5 mb-1 rounded-sm">3 SECRETS</span>
                  <span>TO PERFECT COFFEE</span>
                </div>
              </div>

              {/* Shimmer CTA Button */}
              <div className="absolute bottom-6 left-0 w-full px-4 text-center z-20">
                <div className="relative overflow-hidden py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] sm:text-xs font-bold border border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  Watch Full Video
                  {/* Shimmer Effect overlay */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
