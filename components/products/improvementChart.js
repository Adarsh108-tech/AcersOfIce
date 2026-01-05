import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const efficiencyData = [
  { year: "2019", efficiency: 62 },
  { year: "2020", efficiency: 68 },
  { year: "2021", efficiency: 75 },
  { year: "2022", efficiency: 81 },
  { year: "2023", efficiency: 88 },
];

export default function EfficiencyChart() {
  return (
    <div className="h-40 rounded-xl bg-gradient-to-r from-blue-200/40 to-green-200/40 p-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={efficiencyData}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="year" tick={{ fill: "#334155", fontSize: 12 }} />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="efficiency"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
