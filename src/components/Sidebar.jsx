function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#343a40",
        color: "white",
        paddingTop: "20px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ padding: "15px" }}> Dashboard</li>
        <li style={{ padding: "15px" }}> Students</li>
        <li style={{ padding: "15px" }}> Fees</li>
        <li style={{ padding: "15px" }}> Reports</li>
        <li style={{ padding: "15px" }}> Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;