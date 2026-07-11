import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>College Fees Management System</h2>
      </div>

      <div className="nav-right">
        <span>Welcome, Admin 👋</span>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;