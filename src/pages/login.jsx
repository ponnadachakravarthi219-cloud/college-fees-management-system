import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import loginImage from "../assets/login-student.jpg";
function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/dashboard");
  };

  return (
    
    <div className="login-container">
     <div className="login-image">
  <img
    src={loginImage}
    alt="Student studying"
  />
</div>

      <div className="login-card">

        <h1>Edu Track</h1>

        <h2>Login </h2>
        

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
        
      </div>

    </div>
  );
}

export default Login;
