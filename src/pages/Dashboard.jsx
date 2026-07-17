import dashboardBg from "../assets/images/dashboard.jpg";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${dashboardBg})` }}
    >
      <Navbar />

      <div className="dashboard-content">
        <Sidebar />

        <div className="main-content">
          <h1>✨Welcome To Chalapathi Unversity✨</h1>
          
          <h2>🎓College Fees Management Dashboard </h2>

          <div className="cards">

            <div className="card">
              <h3>Total Students</h3>
              <h1>60</h1>
            </div>

            <div className="card">
              <h3>Total Fees</h3>
              <h1>₹19,50,000</h1>
            </div>

            <div className="card">
              <h3>Pending Fees</h3>
              <h1>₹7,20,000</h1>
            </div>
           

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;