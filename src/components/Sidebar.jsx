import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Menu</h2>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/students">Students</Link>

      <Link to="/register">Register</Link>

      <Link to="/fees">Fees</Link>

      <Link to="/favorites">Favorites</Link>

      <Link to="/recent">Recent</Link>

      <Link to="/login">Logout</Link>

    </div>
  );
}

export default Sidebar;