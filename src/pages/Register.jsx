// import { useState } from "react";
// import loginImage from "../assets/images/register.jpg";
// import "./Register.css";

// function Register() {

//   const [student, setStudent] = useState({
//     name: "",
//     roll: "",
//     branch: "",
//     email: "",
//     fees: ""
//   });

//   const change = (e) => {
//     setStudent({
//       ...student,
//       [e.target.name]: e.target.value
//     });
//   };

//   const submit = (e) => {
//     e.preventDefault();

//     const oldData = JSON.parse(localStorage.getItem("students")) || [];

//     oldData.push(student);

//     localStorage.setItem("students", JSON.stringify(oldData));

//     alert("Student Registered Successfully");

//     setStudent({
//       name: "",
//       roll: "",
//       branch: "",
//       email: "",
//       fees: ""
//     });
//   };

//   return (
//     <div className="register-container">

//       {/* Left Side */}
//       <div className="register">

//         <form onSubmit={submit}>
//           <h1>Student Registration</h1>

//           <input
//             name="name"
//             placeholder="Student Name"
//             value={student.name}
//             onChange={change}
//             required
//           />

//           <input
//             name="roll"
//             placeholder="Roll Number"
//             value={student.roll}
//             onChange={change}
//             required
//           />

//           <input
//             name="branch"
//             placeholder="Branch"
//             value={student.branch}
//             onChange={change}
//             required
//           />

//           <input
//             name="email"
//             placeholder="Email"
//             value={student.email}
//             onChange={change}
//             required
//           />

//           <input
//             name="fees"
//             placeholder="Total Fees"
//             value={student.fees}
//             onChange={change}
//             required
//           />

//           <button type="submit">Register</button>

//         </form>

//       </div>

//       {/* Right Side */}
//       <div className="image-section">
//         <img
//           src={loginImage}
//           alt="Student"
//           className="register-image"
//         />
//       </div>

//     </div>
//   );
// }

// export default Register;
import { useState } from "react";
import loginImage from "../assets/images/register.jpg";
import "./Register.css";

function Register() {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    branch: "",
    email: "",
    fees: "",
    paid: ""
  });

  const change = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    const totalFees = Number(student.fees);
    const paidFees = Number(student.paid);
    const pendingFees = totalFees - paidFees;

    const studentData = {
      ...student,
      pending: pendingFees
    };

    const oldData = JSON.parse(localStorage.getItem("students")) || [];

    oldData.push(studentData);

    localStorage.setItem("students", JSON.stringify(oldData));

    alert("Student Registered Successfully");

    setStudent({
      name: "",
      roll: "",
      branch: "",
      email: "",
      fees: "",
      paid: ""
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
            type="number"
            name="fees"
            placeholder="Total Fees"
            value={student.fees}
            onChange={change}
            required
          />

          <input
            type="number"
            name="paid"
            placeholder="Paid Fees"
            value={student.paid}
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