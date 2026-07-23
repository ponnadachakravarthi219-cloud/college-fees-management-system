import "./Dashboard.css";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import DashboardCards from "../components/Cards/DashboardCards";
import FeeChart from "../components/Charts/FreeChart";
import AttendanceChart from "../components/Charts/AttendanceCharts";
import StudentTable from "../components/StudentTable";

function Dashboard() {
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  const rollNo = localStorage.getItem("rollNo");
  const email = localStorage.getItem("email");

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <div className="dashboard-content">
          <h2 className="dashboard-title">Dashboard</h2>

          <h3>Welcome {name}</h3>

          {role === "admin" ? (
            <>
              <p>
                You are logged in as <b>Admin</b>. You have full access to
                manage Students, Attendance and Fees.
              </p>

              <DashboardCards />

              <div className="chart-section">
                <div className="chart-card">
                  <FeeChart />
                </div>

                <div className="chart-card">
                  <AttendanceChart />
                </div>
              </div>

              <div className="table-card">
                <StudentTable />
              </div>
            </>
          ) : (
            <>
              <p>
                You are logged in as <b>Student</b>.
              </p>

              <div className="table-card">
                <h3>My Profile</h3>

                <p>
                  <strong>Name:</strong> {name}
                </p>

                <p>
                  <strong>Roll No:</strong> {rollNo}
                </p>

                <p>
                  <strong>Email:</strong> {email}
                </p>

                <hr />

                <h3>Student Services</h3>

                <p>✅ View My Attendance</p>
                <p>✅ View My Fees</p>
                <p>✅ View Pending Fees</p>
                <p>✅ View Recent Payments</p>
              </div>
            </>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;