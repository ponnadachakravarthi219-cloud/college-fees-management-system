function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0d6efd",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>College Fees Management System</h2>

      <div>
        <span>Welcome, Admin</span>
      </div>
    </nav>
  );
}

export default Navbar;