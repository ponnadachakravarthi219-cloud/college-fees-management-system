import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/images/register.jpg";
import "./Registerlogin.css";

function Register() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    roll: "",
    branch: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const change = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (student.password !== student.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const oldData = JSON.parse(localStorage.getItem("students")) || [];

    // Check duplicate email
    const emailExists = oldData.find(
      (item) => item.email === student.email
    );

    if (emailExists) {
      alert("Email already registered. Please login.");
      return;
    }

    const studentData = {
      name: student.name,
      roll: student.roll,
      branch: student.branch,
      email: student.email,
      password: student.password
    };

    oldData.push(studentData);

    localStorage.setItem("students", JSON.stringify(oldData));

    alert("Registration Successful!");

    navigate("/login");

    setStudent({
      name: "",
      roll: "",
      branch: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="register-container">

      {/* Left Side */}
      <div className="register">
        <form onSubmit={submit}>

          <h1>Student Registration</h1>

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={change}
            required
          />

          <input
            type="text"
            name="roll"
            placeholder="Roll Number"
            value={student.roll}
            onChange={change}
            required
          />

          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={student.branch}
            onChange={change}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={change}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={student.password}
            onChange={change}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={student.confirmPassword}
            onChange={change}
            required
          />

          <button type="submit">Register</button>

        </form>
      </div>

      {/* Right Side */}
      <div className="image-section">
        <img
          src={loginImage}
          alt="Student"
          className="register-image"
        />
      </div>

    </div>
  );
}

export default Register;