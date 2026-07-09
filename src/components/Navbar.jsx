import "./Navbar.css";

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>College Fees Management System</h2>
      </div>

      <div className="nav-right">
        <span>Welcome, Admin 👋</span>

        <button
          className="logout-btn"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

    </nav>
  );
}

export default Navbar;