"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader2 } from "lucide-react";

export default function ExportButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = async () => {
    const element = document.getElementById("dashboard-container");
    if (!element) return;

    setIsGenerating(true);

    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: "#050510",
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("FluxAudit-Digital-Health-Report.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Failed to generate PDF. Check console for details.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex justify-center w-full mt-12 mb-8">
      <motion.button
        onClick={handleGeneratePDF}
        disabled={isGenerating}
        whileHover={{ scale: isGenerating ? 1 : 1.05 }}
        whileTap={{ scale: isGenerating ? 1 : 0.95 }}
        className={`relative group rounded-full p-[2px] overflow-hidden ${isGenerating ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        {/* Animated Conic Gradient Border */}
        <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_3s_linear_infinite] opacity-70 group-hover:opacity-100 transition-opacity" />
        
        {/* Glow effect on hover */}
        <span className="absolute inset-0 bg-purple-500/50 blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Button Content */}
        <span className="relative flex items-center justify-center gap-2 px-8 py-4 bg-black rounded-full w-full h-full text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-3xl">
          {isGenerating ? (
             <><Loader2 size={18} className="text-purple-300 animate-spin" /> Generating PDF...</>
          ) : (
             <><Download size={18} className="text-purple-300" /> Generate Client Report</>
          )}
        </span>
      </motion.button>
    </div>
  );
}
