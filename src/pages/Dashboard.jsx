import "./Dashboard.css";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import DashboardCards from "../components/Cards/DashboardCards";
import FeeChart from "../components/Charts/FreeChart";
import AttendanceChart from "../components/Charts/AttendanceCharts";
import StudentTable from "../components/StudentTable";

function Dashboard() {

  return (
    <div className="dashboard-container">

      <Sidebar />

      <div className="dashboard-main">

        <Navbar />

        <div className="dashboard-content">

          <h2 className="dashboard-title">
            Dashboard
          </h2>

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

        </div>

        <Footer />

      </div>

    </div>
  );
}

export default Dashboard;