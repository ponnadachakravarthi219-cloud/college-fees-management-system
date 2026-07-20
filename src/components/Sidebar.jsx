import { Link, useLocation } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";

import {
  FaTachometerAlt,
  FaUserGraduate,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaChartBar,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn"); // optional
  navigate("/login");
};

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <FaUserGraduate />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <FaClipboardCheck />,
    },
    {
      name: "Fees",
      path: "/fees",
      icon: <FaMoneyBillWave />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaChartBar />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>🎓 Edu Track</h2>
      </div>
   
      <ul className="menu">
        {menu.map((item) => (
          <li
            key={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            <Link to={item.path}>
              <span>{item.icon}</span>
               <span>{item.name}</span>
            </Link>
          </li>
      ))}
      <li className={location.pathname === "/settings" ? "active" : ""}>
    <Link to="/settings">
      <span><FaCog /></span>
      <span>Settings</span>
    </Link>
  </li>
      </ul>
      <div className="logout-section">
  <button className="logout-btn" onClick={handleLogout}>
    <FaSignOutAlt />
    <span>Logout</span>
  </button>
</div>
    </div>
    
  );
}

export default Sidebar;