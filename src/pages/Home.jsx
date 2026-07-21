// import { useNavigate } from "react-router-dom";
// import "./Home.css";
// import Homebg from "../assets/campus-bg.png";
// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="home">
//       <div className="home" style={{ backgroundImage: `url(${Homebg})` }} >

//       </div>

//       <nav className="home-navbar">
//         <h2>🎓 Edu Track</h2>

//          {/* <button
//           className="login-btn"
//           onClick={() => navigate("/login")}
//         > 
//           Login
//         </button> */}
//        </nav>

//       <div className="hero">

//         <div className="hero-left">

//           <h1>
//             College Fees and Attendance
//             Management System
//           </h1>

//           <p>
//             A complete College ERP solution to manage
//             Students, Attendance, Fees and Reports
//             efficiently from one dashboard.
//           </p>

//           <div className="hero-buttons">

//             <button
//               className="get-btn"
//               onClick={() => navigate("/login")}
//             >
//               Get Started
//             </button>

//           </div>

//         </div>

//         <div className="hero-right">

//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//             alt="College"
//           />

//         </div>

//       </div>

//       <section className="features">

//         <div className="feature-card">
//           <h3> Students</h3>
//           <p>Manage all students easily.</p>
//         </div>

//         <div className="feature-card">
//           <h3> Attendance</h3>
//           <p>Track attendance instantly.</p>
//         </div>

//         <div className="feature-card">
//           <h3> Fees</h3>
//           <p>Manage fee collection efficiently.</p>
//         </div>

//         <div className="feature-card">
//           <h3>Reports</h3>
//           <p>Generate analytics and reports.</p>
//         </div>

//       </section>

//       <footer className="home-footer">
//         © 2026 College ERP Management System
//       </footer>

//     </div>
//   );
// }

// export default Home;
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Homebg from "../assets/campus-bg.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${Homebg})` }}
    >
      {/* Navbar */}
      <nav className="home-navbar">
        <h2>🎓 EduTrack</h2>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-left">
          <h1>
            College Fees and Attendance
            
          </h1>

          <p>
            A complete College ERP solution to manage
            Students, Attendance, Fees and Reports
            efficiently from one dashboard.
          </p>

          <div className="hero-buttons">
            <button
              className="get-btn"
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="College"
          />
        </div>
      </div>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3> Students</h3>
          <p>Manage all students easily.</p>
        </div>

        <div className="feature-card">
          <h3>Attendance</h3>
          <p>Track attendance instantly.</p>
        </div>

        <div className="feature-card">
          <h3>💰 Fees</h3>
          <p>Manage fee collection efficiently.</p>
        </div>

        <div className="feature-card">
          <h3> Reports</h3>
          <p>Generate analytics and reports.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        © 2026 EduTrack College ERP Management System
      </footer>
    </div>
  );
}

export default Home;