import { useState } from "react";
import "./login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Validation
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter Username and Password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (username === "admin" && password === "admin123") {
        setSuccess("Login Successful! Welcome Admin.");

        setTimeout(() => {
          onLogin();
        }, 1000);
      } else {
        setError("Invalid Username or Password");
      }
    }, 2000);
  };

  const handleClear = () => {
    setUsername("");
    setPassword("");
    setError("");
    setSuccess("");
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>College Fees Management System</h1>

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br /><br />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button
            type="button"
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          <br /><br />

          {loading ? (
            <p className="loading">Loading...</p>
          ) : null}

          {error && (
            <p className="error">{error}</p>
          )}

          {success && (
            <p className="success">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Please Wait..." : "Login"}
          </button>

          <button
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>

          <div className="links">

            <a href="#">I Don't Have account</a>

            {/* <a href="#">Register</a> */}

          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;