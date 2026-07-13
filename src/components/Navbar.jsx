// import "./Navbar.css";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h2>College Fees Management System</h2>
//       </div>

//       <div className="nav-right">
//         <span>Welcome, Admin 👋</span>

//         <button className="logout-btn" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import logo from "../assets/images/logo.png.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <img src={logo} alt="College Logo" className="logo" />

        <div className="logo-text">
          <h2>College Fees Management</h2>
          <p>Management System</p>
        </div>
      </div>

      <ul className="nav-links">
        <li>Dashboard</li>
        <li>Students</li>
        <li>Fees</li>
        <li>Logout</li>
      </ul>

    </nav>
  );
}

export default Navbar;