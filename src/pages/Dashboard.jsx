// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import "./Dashboard.css";

// function Dashboard(){

// return(

// <div>

// <Navbar/>

// <div className="dashboard">

// <Sidebar/>

// <div className="content">

// <h1>Dashboard</h1>

// <div className="cards">

// <div className="card">

// <h2>250</h2>

// <p>Total Students</p>

// </div>

// <div className="card">

// <h2>₹8,50,000</h2>

// <p>Total Fees</p>

// </div>

// <div className="card">

// <h2>₹6,20,000</h2>

// <p>Fees Paid</p>

// </div>

// <div className="card">

// <h2>₹2,30,000</h2>

// <p>Pending Fees</p>

// </div>

// </div>

// </div>

// </div>

// </div>

// )

// }

// export default Dashboard;
import dashboardBg from "../assets/images/dashboard.jpeg";
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
          <h1>Welcome To Chalapathi</h1>
          <h2>College Fees Management Dashboard</h2>

          <div className="cards">

            <div className="card">
              <h3>Total Students</h3>
              <h1>250</h1>
            </div>

            <div className="card">
              <h3>Fees Collected</h3>
              <h1>₹12,50,000</h1>
            </div>

            <div className="card">
              <h3>Pending Fees</h3>
              <h1>₹3,20,000</h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;