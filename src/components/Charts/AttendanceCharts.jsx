import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

const data = [
  {
    name: "Present",
    value: 92,
  },
  {
    name: "Absent",
    value: 8,
  },
];

const COLORS = ["#4caf50", "#f44336"];

function AttendanceChart() {
  return (
    <>
      <h3 style={{ marginBottom: "20px" }}>
        Attendance Percentage
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default AttendanceChart;