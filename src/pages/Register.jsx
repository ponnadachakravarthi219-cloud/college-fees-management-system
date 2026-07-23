import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    roll: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.roll ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", {
        name: form.name,
        rollNo: form.roll,
        email: form.email,
        password: form.password,
        role: "admin",
      });

      alert("Registration Successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="roll"
            placeholder="Enter RollNumber"
            value={form.roll}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
          />

          {/* Password */}
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

        

        {/* <h4>Example Data</h4>
        <p><b>Name:</b> Chakravarthi</p>
        <p><b>Roll No:</b> 22A91A05F1</p>
        <p><b>Email:</b> student@gmail.com</p>
        <p><b>Password:</b> Student@123</p> */}
      </div>
    </div>
  );
}

export default Register;