import DashboardLayout from "../layout/DashboardLayout";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Open", count: 21 },
  { name: "In Progress", count: 9 },
  { name: "Resolved", count: 14 },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1>👋 Dashboard</h1>
      <p style={{ color: "#64748b" }}>
        Project & Issue Overview
      </p>

      {/* Cards */}
      <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
        <Card title="Total Projects" value="8" color="#3b82f6" />
        <Card title="Open Issues" value="21" color="#f97316" />
        <Card title="Resolved" value="14" color="#22c55e" />
      </div>

      {/* Graph */}
      <div
        style={{
          marginTop: 50,
          background: "#fff",
          padding: 20,
          borderRadius: 12,
        }}
      >
        <h3>📊 Issue Status</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardLayout>
  );
}

function Card({ title, value, color }) {
  return (
    <div
      style={{
        flex: 1,
        background: "#fff",
        borderLeft: `6px solid ${color}`,
        padding: 20,
        borderRadius: 12,
      }}
    >
      <h4 style={{ color }}>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}



