"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

type ScoreData = {
  month: string;
  current: number;
  projected: number;
};

export default function OpportunityScore({ data }: { data: ScoreData[] }) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-4 !bg-black/90 !border-white/10 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
          <p className="font-semibold text-white mb-2">{label}</p>
          <p className="text-gray-400 text-sm">
            Current Path: <span className="text-white ml-1">${payload[0].value.toLocaleString()}</span>
          </p>
          <p className="text-emerald-400 font-medium text-sm mt-1">
            Expected Growth: <span className="text-white ml-1">${payload[1].value.toLocaleString()}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full min-h-[300px] w-full p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-white">Opportunity Score</h3>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
          High Potential
        </span>
      </div>
      <div className="flex-grow w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} dy={10} />
            <YAxis 
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} 
              axisLine={false} 
              tickLine={false}
              tickFormatter={(value) => {
                if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
                if (value >= 1000) return `$${(value / 1000).toFixed(1)}k`;
                return `$${value}`;
              }}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '5 5' }} />
            <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
            <Line 
              type="monotone" 
              name="Current Path"
              dataKey="current" 
              stroke="#4B5563" 
              strokeWidth={3} 
              dot={false}
            />
            <Line 
              type="monotone" 
              name="Projected (Fixing Gaps)"
              dataKey="projected" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4, stroke: '#000' }}
              activeDot={{ r: 6, fill: '#10B981', stroke: '#fff' }}
              filter="url(#glow)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
