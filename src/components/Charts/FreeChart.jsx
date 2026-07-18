import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", fees: 35000 },
  { month: "Feb", fees: 42000 },
  { month: "Mar", fees: 39000 },
  { month: "Apr", fees: 50000 },
  { month: "May", fees: 46000 },
  { month: "Jun", fees: 58000 },
];

function FeeChart() {
  return (
    <>
      <h3 style={{ marginBottom: "20px" }}>Monthly Fee Collection</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="fees" fill="#1976d2" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default FeeChart;