function StudentTable({ students, deleteStudent }) {
  return (
    <div>
      <h2>Student List</h2>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Fee Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="6">No Students Found</td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.branch}</td>
                <td>{student.year}</td>
                <td>{student.feeStatus}</td>
                <td>
                  <button onClick={() => deleteStudent(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;