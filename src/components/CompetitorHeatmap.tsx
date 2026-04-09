"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

type HeatmapData = {
  metric: string;
  targetBrand: string;
  competitorA: string;
  competitorB: string;
};

// Map textual data to numerical values for the chart
const mapToValue = (val: string) => {
  if (val.includes("High") || val.includes("Fast")) return 3;
  if (val.includes("Medium") || val.includes("Med")) return 2;
  return 1;
};

export default function CompetitorHeatmap({ data }: { data: HeatmapData[] }) {
  const chartData = data.map((d) => ({
    metric: d.metric,
    "You": mapToValue(d.targetBrand),
    "Competitor A": mapToValue(d.competitorA),
    "Competitor B": mapToValue(d.competitorB),
    original: d
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const orig = payload[0].payload.original;
      return (
        <div className="glass-card p-4 !bg-black/80 !border-white/10 shadow-2xl">
          <p className="font-semibold text-white mb-2">{label}</p>
          <p className="text-blue-400 text-sm">You: <span className="text-white ml-2">{orig.targetBrand}</span></p>
          <p className="text-purple-400 text-sm">Competitor A: <span className="text-white ml-2">{orig.competitorA}</span></p>
          <p className="text-gray-400 text-sm">Competitor B: <span className="text-white ml-2">{orig.competitorB}</span></p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full min-h-[300px] w-full p-6 flex flex-col">
      <h3 className="text-lg font-medium text-white mb-6">Competitor Heatmap</h3>
      <div className="flex-grow w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="metric" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }} />
            <YAxis tick={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
            <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
            <Bar dataKey="You" fill="#60A5FA" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Competitor A" fill="#A855F7" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Competitor B" fill="#4B5563" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
