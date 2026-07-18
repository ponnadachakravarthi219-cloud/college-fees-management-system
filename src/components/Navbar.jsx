import "./Navbar.css";
import { FaBell, FaUserCircle, FaMoon } from "react-icons/fa";

function Navbar() {

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="navbar">

      <div className="navbar-title">
        <h2>College Fees Management System</h2>
      </div>

      <div className="navbar-right">

        <input
          className="search-input"
          type="text"
          placeholder="Search..."
        />

        <FaBell className="icon" />

        <button className="theme-btn" onClick={toggleTheme}>
          <FaMoon />
        </button>

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Admin"
          className="profile-img"
        />

        <div className="profile-info">
          <h4>Admin</h4>
          <p>Administrator</p>
        </div>

      </div>

    </div>
  );
}

export default Navbar;