// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Students from "./pages/Students";
// import StudentDetails from "./pages/StudentDetails";
// import Register from "./pages/Register";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <Routes>

//       <Route path="/" element={<Home />} />

//       <Route path="/login" element={<Login />} />

//       <Route path="/dashboard" element={<Dashboard />} />

//       <Route path="/students" element={<Students />} />

//       <Route path="/student/:id" element={<StudentDetails />} />

//       <Route path="/register" element={<Register />} />

//       <Route path="*" element={<NotFound />} />

//     </Routes>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Register from "./pages/Register";
import Fees from "./pages/Fees";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/students" element={<Students />} />

      <Route path="/student/:id" element={<StudentDetails />} />

      <Route path="/register" element={<Register />} />

      <Route path="/fees" element={<Fees />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;