import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <h1>✨WELCOME TO FEES MANAGEMNT PORTAL✨</h1>
      <h2>College Fees Management System </h2>

      <p>
        To Check Your Fees, Total Fees, and Pending Fees. 
      </p>

      <Link to="/login">
        <button>Get Started</button>
      </Link>

    </div>
  );
}

export default Home;