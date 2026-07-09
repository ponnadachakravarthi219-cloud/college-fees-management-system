import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="sidebar-title">
        MENU
      </h2>

      <ul>

        <li>🏠 Dashboard</li>

        <li>👨‍🎓 Students</li>

        <li>💰 Fees</li>

        <li>📊 Reports</li>

        <li>⚙️ Settings</li>

        <li>🚪 Logout</li>

      </ul>

    </div>
  );
}

export default Sidebar;