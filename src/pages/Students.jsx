import { useEffect, useState } from "react";
import loginImage from "../assets/images/student.jpg.png";
import "./Students.css";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
    setLoading(false);
  }, []);


  const deleteStudent = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);

    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="loading">Loading Students...</h2>;
  }

  return (
    <div className="students-container">

      {/* Left Side */}
      <div className="students">

        <h1>Students List</h1>

        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        {filtered.length === 0 ? (
          <h3>No Students Found</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Branch</th>
                <th>Email</th>
                <th>Total Fees</th>
                <th>Paid Fees</th>
                <th>Pending Fees</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.roll}</td>
                  <td>{student.branch}</td>
                  <td>{student.email}</td>
                  <td>₹ {student.fees}</td>
                  <td>₹ {student.paid}</td>
                  <td
                    style={{
                      color: Number(student.pending) > 0 ? "red" : "green",
                      fontWeight: "bold"
                    }}
                  >
                    ₹ {student.pending}
                  </td>
                  <td>
                     <button
                     className="view-btn"
                     onClick={() => viewStudent(student)}
                      >
                      View
                    </button>
                    
                    <button
                      className="delete-btn"
                      onClick={() => deleteStudent(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        )}

      </div>

      {/* Right Side Image */}
      <div className="image-section">
        <img
          src={loginImage}
          alt="College"
          className="student-image"
        />
      </div>

    </div>
  );
}

export default Students;