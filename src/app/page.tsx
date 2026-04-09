"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import TrustScore from "@/components/TrustScore";
import CompetitorHeatmap from "@/components/CompetitorHeatmap";
import ContentGaps from "@/components/ContentGaps";
import ActionPlan from "@/components/ActionPlan";
import SocialProof from "@/components/SocialProof";
import OpportunityScore from "@/components/OpportunityScore";
import VisualSEO from "@/components/VisualSEO";
import PostMockup from "@/components/PostMockup";
import ExportButton from "@/components/ExportButton";
import { auditData as data } from "@/auditData";
import { Activity } from "lucide-react";

export default function Dashboard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState<{ id: number; x: number; y: number; size: number; color: string; velocity: number; duration: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Generate aesthetic glowing particles
    const colors = ["#0F1C38", "#790604", "#B2A18F", "#ffffff"];
    const generatedDots = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5, // 1.5px to 4.5px
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 0.5),
      duration: Math.random() * 4 + 2, // 2s to 6s pulsing
    }));
    setDots(generatedDots);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", stiffness: 100, damping: 20 
      }
    },
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-12 font-sans selection:bg-purple-500/30">
      <motion.div
        id="dashboard-container"
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Aesthetic Hero Header */}
        <motion.div variants={item} className="relative flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-12 gap-8 pt-4">
          
          {/* Interactive Glowing Particles */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl opacity-80">
            {dots.map((dot) => (
              <motion.div
                key={dot.id}
                animate={{
                  x: mousePosition.x * dot.velocity * 4,
                  y: mousePosition.y * dot.velocity * 4,
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.9, 0.2],
                }}
                transition={{
                  x: { type: "spring", damping: 30, stiffness: 50 },
                  y: { type: "spring", damping: 30, stiffness: 50 },
                  scale: { repeat: Infinity, duration: dot.duration, ease: "easeInOut" },
                  opacity: { repeat: Infinity, duration: dot.duration, ease: "easeInOut" },
                }}
                className="absolute rounded-full"
                style={{
                  left: `${dot.x}%`,
                  top: `${dot.y}%`,
                  width: dot.size,
                  height: dot.size,
                  backgroundColor: dot.color,
                  boxShadow: `0 0 ${dot.size * 4}px ${dot.color}`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-6 text-[#EEDCC1] bg-[#0F1C38]/70 border border-[#B2A18F]/60 px-4 py-1.5 rounded-full w-max shadow-[0_0_25px_rgba(178,161,143,0.4)] backdrop-blur-md">
              <Activity size={16} className="text-[#B2A18F]" />
              <span className="font-bold tracking-[0.2em] uppercase text-[10px]">FluxAudit Premium</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffffff,#B2A18F)] drop-shadow-[0_0_30px_rgba(178,161,143,0.2)] mb-4">
              Digital Health Report.
            </h1>
            
            <p className="text-gray-400 mt-2 text-lg font-light leading-relaxed max-w-xl">
              A comprehensive breakdown of your current online presence, competitor analysis, and clear next steps to dominate your market.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <span className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#B2A18F] backdrop-blur-md shadow-lg">
                <span className="text-gray-500 uppercase tracking-widest text-[10px]">Vibe</span> 
                {data.brandVibe}
              </span>
              <span className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-[#790604]/20 border border-[#790604]/30 text-white backdrop-blur-md shadow-[0_0_15px_rgba(121,6,4,0.3)]">
                <span className="text-[#790604] brightness-150 uppercase tracking-widest text-[10px]">Revenue Leak</span> 
                {data.revenueLeakEstimate}
              </span>
              <span className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-[#0F1C38]/80 border border-[#B2A18F]/30 text-white backdrop-blur-md shadow-[0_0_20px_rgba(15,28,56,0.6)]">
                <span className="text-[#B2A18F] uppercase tracking-widest text-[10px]">Quick Win</span> 
                {data.quickestWin}
              </span>
            </div>
          </div>
          
          <div className="md:text-right relative z-10 flex flex-col md:items-end">
            <p className="text-[10px] text-[#B2A18F] uppercase tracking-[0.3em] mb-2 font-bold opacity-80">Target Client Analysis</p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              {data.brandName}
            </h2>
            <div className="h-[2px] w-16 bg-[linear-gradient(to_right,transparent,#B2A18F)] mt-5"></div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
          
          {/* Top Left: Trust Score (span 1) */}
          <motion.div variants={item} className="glass-card md:col-span-1 lg:col-span-1 border border-blue-500/20 shadow-[0_0_30px_rgba(96,165,250,0.05)] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <TrustScore score={data.trustScore} />
          </motion.div>

          {/* Top Right: Competitor Heatmap (span 3) */}
          <motion.div variants={item} className="glass-card md:col-span-1 lg:col-span-3 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.05)] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CompetitorHeatmap data={data.competitorHeatmap} />
          </motion.div>

          {/* Middle Left: Content Gaps (span 2) */}
          <motion.div variants={item} className="glass-card md:col-span-1 lg:col-span-2 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ContentGaps gaps={data.contentGaps} />
          </motion.div>

          {/* Middle Right: Opportunity Score (span 2) */}
          <motion.div variants={item} className="glass-card md:col-span-1 lg:col-span-2 overflow-hidden relative group border-t-2 border-t-emerald-500/50">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <OpportunityScore data={data.opportunityScore} />
          </motion.div>

          {/* Row 3: Action Plan / Social Proof */}
          {/* Action Plan (span 2) */}
          <motion.div variants={item} className="glass-card md:col-span-1 lg:col-span-2 overflow-hidden relative group border-t-2 border-t-emerald-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ActionPlan actions={data.actionPlan} />
          </motion.div>

          {/* Social Proof (span 2) */}
          <motion.div variants={item} className="glass-card md:col-span-1 lg:col-span-2 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <SocialProof reviews={data.socialProof} />
          </motion.div>

          {/* Row 4: Visual SEO / Post Mockup */}
          {/* Visual SEO (span 1) */}
          <motion.div variants={item} className="glass-card md:col-span-1 lg:col-span-1 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <VisualSEO data={data.visualSEO} />
          </motion.div>

          {/* Post Mockup (span 3) */}
          <motion.div variants={item} className="glass-card md:col-span-1 lg:col-span-3 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.05)] relative group">
            <div className="absolute inset-0 rounded-[24px] overflow-hidden bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <PostMockup data={data.postMockup} />
          </motion.div>

        </div>

        {/* Generate Report Button */}
        <motion.div variants={item}>
          <ExportButton />
        </motion.div>

      </motion.div>
    </div>
  );
}
