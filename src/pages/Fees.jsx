// function Fees() {
//   return (
//     <div>
//       <h1>Fees Page</h1>
//     </div>
//   );
// }

// export default Fees;
import { useEffect, useState } from "react";
import "./Fees.css";

function Fees() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalFees = students.reduce(
    (sum, student) => sum + Number(student.fees || 0),
    0
  );

  const totalPaid = students.reduce(
    (sum, student) => sum + Number(student.paid || 0),
    0
  );

  const totalPending = students.reduce(
    (sum, student) => sum + Number(student.pending || 0),
    0
  );

  return (
    <div className="fees-container">

      <h1>Fees Management</h1>

      <div className="summary-cards">

        <div className="card total">
          <h3>Total Fees</h3>
          <h2>₹ {totalFees}</h2>
        </div>

        <div className="card paid">
          <h3>Paid Fees</h3>
          <h2>₹ {totalPaid}</h2>
        </div>

        <div className="card pending">
          <h3>Pending Fees</h3>
          <h2>₹ {totalPending}</h2>
        </div>

      </div>

      <input
        type="text"
        placeholder="Search Student..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredStudents.length === 0 ? (
        <h3>No Student Found</h3>
      ) : (
        <table className="fees-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Total Fees</th>
              <th>Paid Fees</th>
              <th>Pending Fees</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>₹ {student.fees}</td>
                <td>₹ {student.paid}</td>
                <td
                  style={{
                    color:
                      Number(student.pending) > 0 ? "red" : "green",
                    fontWeight: "bold",
                  }}
                >
                  ₹ {student.pending}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default Fees;