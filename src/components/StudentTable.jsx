import "./StudentTable.css";

function StudentTable({ students, deleteStudent }) {
  if (students.length === 0) {
    return (
      <div className="table-empty">
        <h3>No Students Available</h3>
        <p>Please register students to display the table.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <h2>Registered Students</h2>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Fee Amount</th>
            <th>Fee Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.course}</td>
              <td>₹{student.amount}</td>
              <td>{student.feeStatus}</td>

              <td>
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
    </div>
  );
}

export default StudentTable;