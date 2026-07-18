import { useMemo } from "react";
import "./Reports.css";

function Reports() {

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  const attendance =
    JSON.parse(localStorage.getItem("attendance")) || [];

  const fees =
    JSON.parse(localStorage.getItem("fees")) || [];

  const totalStudents = students.length;

  const presentCount = attendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absentCount = attendance.filter(
    (item) => item.status === "Absent"
  ).length;

  const totalCollection = useMemo(() => {
    return fees.reduce(
      (sum, item) => sum + Number(item.paidFee),
      0
    );
  }, [fees]);

  const pendingCollection = useMemo(() => {
    return fees.reduce(
      (sum, item) => sum + Number(item.pendingFee),
      0
    );
  }, [fees]);

  const attendancePercentage =
    attendance.length === 0
      ? 0
      : ((presentCount / attendance.length) * 100).toFixed(1);

  const printReport = () => {
    window.print();
  };

  const exportJSON = () => {
    const data = {
      students,
      attendance,
      fees,
    };

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      { type: "application/json" }
    );

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "college-report.json";
    link.click();
  };

  return (
    <div className="reports-page">

      <h1>Reports Dashboard</h1>

      <div className="report-cards">

        <div className="report-card">
          <h3>Total Students</h3>
          <h2>{totalStudents}</h2>
        </div>

        <div className="report-card">
          <h3>Total Collection</h3>
          <h2>₹ {totalCollection.toLocaleString()}</h2>
        </div>

        <div className="report-card">
          <h3>Pending Fees</h3>
          <h2>₹ {pendingCollection.toLocaleString()}</h2>
        </div>

        <div className="report-card">
          <h3>Attendance</h3>
          <h2>{attendancePercentage}%</h2>
        </div>

      </div>

      <div className="summary-table">

        <table>

          <tbody>

            <tr>
              <td>Total Students</td>
              <td>{totalStudents}</td>
            </tr>

            <tr>
              <td>Present</td>
              <td>{presentCount}</td>
            </tr>

            <tr>
              <td>Absent</td>
              <td>{absentCount}</td>
            </tr>

            <tr>
              <td>Total Fees Collected</td>
              <td>₹ {totalCollection.toLocaleString()}</td>
            </tr>

            <tr>
              <td>Pending Fees</td>
              <td>₹ {pendingCollection.toLocaleString()}</td>
            </tr>

          </tbody>

        </table>

      </div>

      <div className="report-buttons">

        <button onClick={printReport}>
          Print Report
        </button>

        <button onClick={exportJSON}>
          Export Report
        </button>

      </div>

    </div>
  );
}

export default Reports;