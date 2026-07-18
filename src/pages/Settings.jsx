import { useState } from "react";
import "./Settings.css";

function Settings() {
  const [settings, setSettings] = useState({
    collegeName: "ABC College of Engineering",
    adminName: "Admin",
    email: "admin@gmail.com",
    phone: "9876543210",
    darkMode: false,
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("settings", JSON.stringify(settings));
    alert("Settings Saved Successfully");
  };

  return (
    <div className="settings-page">

      <h1>⚙️ Settings</h1>

      <div className="settings-card">

        <h2>College Information</h2>

        <label>College Name</label>
        <input
          type="text"
          name="collegeName"
          value={settings.collegeName}
          onChange={handleChange}
        />

        <label>Admin Name</label>
        <input
          type="text"
          name="adminName"
          value={settings.adminName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={settings.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={settings.phone}
          onChange={handleChange}
        />

        <h2>Preferences</h2>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleChange}
          />
          <span>Enable Dark Mode</span>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
          <span>Enable Notifications</span>
        </div>

        <button onClick={handleSave}>
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;