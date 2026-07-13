import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <h1>College Fees Management System</h1>

      <p>
        React Frontend Project
      </p>

      <Link to="/login">
        <button>Get Started</button>
      </Link>

    </div>
  );
}

export default Home;