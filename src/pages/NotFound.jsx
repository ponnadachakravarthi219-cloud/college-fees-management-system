import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound(){

return(

<div className="notfound">

<h1></h1>

<h2>Page Not Found</h2>

<p>The page you are looking for doesn't exist.</p>

<Link to="/">

<button>Go Home</button>

</Link>

</div>

);

}

export default NotFound;