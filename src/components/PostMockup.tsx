"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, Sparkles, AlertTriangle } from "lucide-react";

export default function PostMockup() {
  return (
    <div className="flex flex-col p-6 h-full">
      <h3 className="text-lg font-medium text-white mb-6">Current vs. Recommended</h3>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center flex-grow">
        
        {/* Boring Post */}
        <div className="flex flex-col items-center group">
          <div className="relative w-[140px] h-[280px] rounded-[24px] border-[6px] border-gray-800 bg-gray-900 overflow-hidden shadow-xl opacity-70 group-hover:opacity-100 transition-opacity">
            {/* Fake post header */}
            <div className="flex items-center gap-2 p-2 px-3 border-b border-gray-800">
              <div className="w-5 h-5 rounded-full bg-gray-700"></div>
              <div className="w-12 h-2 rounded bg-gray-700"></div>
            </div>
            {/* Fake blurry image */}
            <div className="w-full h-[140px] bg-gray-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <ImageIcon className="text-gray-600 z-10" size={32} />
            </div>
            {/* Fake caption */}
            <div className="p-3">
              <div className="w-full h-2 rounded bg-gray-800 mb-1.5"></div>
              <div className="w-2/3 h-2 rounded bg-gray-800"></div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-red-400">
            <AlertTriangle size={14} />
            <span className="text-xs font-semibold uppercase tracking-wider">Current Post</span>
          </div>
          <span className="text-gray-500 text-[10px] mt-1 text-center">Plain image, no hook, blurry</span>
        </div>

        {/* Arrow / Divider */}
        <div className="hidden md:flex text-gray-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>

        {/* High Quality Post */}
        <motion.div 
          initial={{ y: 5 }}
          animate={{ y: -5 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <div className="relative w-[150px] h-[300px] rounded-[24px] border-[6px] border-purple-500/30 bg-black overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            {/* Fake post header */}
            <div className="flex items-center gap-2 p-2 px-3 absolute top-0 w-full z-10 bg-gradient-to-b from-black/80 to-transparent">
              <div className="w-5 h-5 rounded-full bg-purple-500/80 border border-purple-400"></div>
              <div className="w-12 h-2 rounded bg-white"></div>
            </div>
            {/* Fake High Quality Video/Image */}
            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center relative">
                <Sparkles className="text-purple-300 mb-2" size={32} />
                <div className="px-4 text-center z-10 w-full mt-8">
                  <div className="text-white font-bold text-sm tracking-tight leading-tight uppercase drop-shadow-md">
                    "3 Secrets to<br/>Perfect Coffee"
                  </div>
                </div>
                {/* Fake CTA overlay */}
                <div className="absolute bottom-4 left-0 w-full px-4 text-center">
                    <div className="py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold border border-white/30">
                        Watch Full Video
                    </div>
                </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1.5 text-purple-400">
            <Sparkles size={14} />
            <span className="text-xs font-semibold uppercase tracking-wider">Recommended</span>
          </div>
          <span className="text-gray-400 text-[10px] mt-1 text-center">Text hook, high-quality, clear CTA</span>
        </motion.div>

      </div>
    </div>
  );
}
