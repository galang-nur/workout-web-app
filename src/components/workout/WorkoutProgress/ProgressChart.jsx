import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

export const ProgressChart = ({ filteredData }) => {
  if (!filteredData || filteredData.length === 0) return null;

  // ✅ Prepare clean, unique, and readable data
  const data = filteredData
    .slice()
    .reverse()
    .map((s, index) => {
      const minutes = s.duration / 60;
      const mins = Math.floor(minutes);
      const secs = Math.round((minutes - mins) * 60);

      return {
        id: `${s.id}-${index}`, // unique key (fixes tooltip hover issue)
        label: new Date(s.date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        }),
        durationMinutes: parseFloat(minutes.toFixed(2)),
        readableTime: `${mins}m ${secs}s`,
      };
    });

  // 🧮 Calculate average workout duration
  const avgDuration =
    data.reduce((acc, cur) => acc + cur.durationMinutes, 0) / data.length;

  return (
    <div className="bg-white border border-neutral-200 rounded-3xl shadow-sm p-6 mb-10">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">
        Exercise Duration (minutes)
      </h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            {/* X Axis (Date label) */}
            <XAxis
              dataKey="label"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickMargin={8}
              axisLine={{ stroke: "#d1d5db" }}
            />

            {/* Y Axis (Duration in minutes) */}
            <YAxis
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={{ stroke: "#d1d5db" }}
              label={{
                value: "Minutes",
                angle: -90,
                position: "insideLeft",
                fill: "#6b7280",
              }}
              domain={[0, "auto"]}
            />

            {/* Tooltip */}
            <Tooltip
              formatter={(value, name, props) => [
                `${props.payload.readableTime} (${value} min)`,
                "Duration",
              ]}
              labelFormatter={(label) => `Date: ${label}`}
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                padding: "0.75rem 1rem",
              }}
              itemStyle={{ color: "#10b981", fontWeight: 500 }}
              labelStyle={{ fontWeight: 600, color: "#374151" }}
            />

            {/* Average line */}
            <ReferenceLine
              y={avgDuration}
              label={{
                value: `Avg ${avgDuration.toFixed(1)} min`,
                position: "right",
                fill: "#6b7280",
                fontSize: 12,
              }}
              stroke="#93c5fd"
              strokeDasharray="5 5"
            />

            {/* Main line */}
            <Line
              type="monotone"
              dataKey="durationMinutes"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: "#10b981", stroke: "#fff" }}
              activeDot={{ r: 6, stroke: "#059669", strokeWidth: 2 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
