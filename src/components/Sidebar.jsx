import "./Sidebar.css";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">MENU</h2>

      <ul>
       <li><Link to="/dashboard">🏠 Dashboard</Link></li>
<li><Link to="/students">👨‍🎓 Students</Link></li>
<li><Link to="/fees">💰 Fees</Link></li>
<li><Link to="/reports">📊 Reports</Link></li>
<li><Link to="/settings">⚙️ Settings</Link></li>
<li><Link to="/login">🚪 Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;  