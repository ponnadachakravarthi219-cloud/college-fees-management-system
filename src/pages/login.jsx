import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Registerlogin from "./pages/Registerlogin";
import "./Login.css";
import loginImage from "../assets/images/register.jpg";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      setMessage("Please fill all fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("loggedInUser", email);
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="login-container">

      {/* Left Side Image */}
      <div className="left-panel">
        <img
          src={loginImage}
          alt="College"
          className="login-image"
        />
      </div>

      {/* Right Side Login Form */}
      <div className="right-panel">

        <h1>🎓College Fees Management</h1>

        <input
          type="email"
          placeholder="🤷‍♀️Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="show-password">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            
          />
          <span>Show Password</span>
        </div>

        <button onClick={handleLogin}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="register-link">
        New User?{" "}
        <span onClick={() => navigate("/register")}>
        Register Here
        </span>
         </p>

        <p className="message">{message}</p>

      </div>

    </div>
  );
}

export default Login;
