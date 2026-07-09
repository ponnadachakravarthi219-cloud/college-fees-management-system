// import { useState } from "react";
// import "./Registration.css";

// const initialForm = {
//   fullName: "",
//   email: "",
//   mobile: "",
//   password: "",
//   confirmPassword: "",
 
// };

// function Registration() {
//   const [formData, setFormData] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

   
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full Name is required";
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {
//       newErrors.email = "Invalid Email";
//     }

//     if (!/^[0-9]{10}$/.test(formData.mobile)) {
//       newErrors.mobile = "Enter valid 10 digit mobile";
//     }

//     if (
//       !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
//         formData.password
//       )
//     ) {
//       newErrors.password =
//         "Password must contain uppercase, lowercase, number and special character";
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (!formData.terms) {
//       newErrors.terms = "Accept Terms & Conditions";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       setSuccess("Registration Successful");

//       console.log(formData);

//       setFormData(initialForm);

//       setErrors({});
//     }
//   };

//   const handleReset = () => {
//     setFormData(initialForm);
//     setErrors({});
//     setSuccess("");
//   };

//   return (
//     <div className="registration-container">
//       <form onSubmit={handleSubmit}>
        
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//         />
//         <p>{errors.fullName}</p>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <p>{errors.email}</p>

//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//         />
//         <p>{errors.mobile}</p>

//         <input
//           type={showPassword ? "text" : "password"}
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? "Hide" : "Show"}
//         </button>

//         <p>{errors.password}</p>


        
        


//         <button type="submit">Register</button>

//         <button
//           type="button"
//           onClick={handleReset}
//         >
//           Reset
//         </button>
//       </form>

//       {success && <h2>{success}</h2>}

//       {success && (
//         <div>
//           <h3>Registration Details</h3>
//           <p>Name : {formData.fullName}</p>
//           <p>Email : {formData.email}</p>
//           <p>Mobile : {formData.mobile}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Registration;