import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
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
        <li><NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/about">Students</NavLink></li>
        <li> <NavLink to="/about">Fees</NavLink></li>
        <li> <NavLink to="/about">Logout</NavLink></li>
      </ul>

    </nav>
  );
}

export default Navbar;