import "./StudentTable.css";

function StudentTable() {
  const students = [
    {
      id: 1,
      roll: "22CSE001",
      name: "Rahul",
      branch: "CSE",
      fee: "Paid",
      attendance: "95%",
    },
    {
      id: 2,
      roll: "22CSE002",
      name: "Kiran",
      branch: "CSE",
      fee: "Pending",
      attendance: "90%",
    },
    {
      id: 3,
      roll: "22CSE003",
      name: "Priya",
      branch: "ECE",
      fee: "Paid",
      attendance: "96%",
    },
    {
      id: 4,
      roll: "22CSE004",
      name: "Suresh",
      branch: "IT",
      fee: "Pending",
      attendance: "87%",
    },
    {
      id: 5,
      roll: "22CSE005",
      name: "Anjali",
      branch: "CSE",
      fee: "Paid",
      attendance: "99%",
    },
  ];

  return (
    <>
      <h3 style={{ marginBottom: "20px" }}>
        Recent Students
      </h3>

      <table>

        <thead>

          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Fee Status</th>
            <th>Attendance</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student,_id) => (

            <tr key={student.id+1}>

              <td>{student.roll}</td>

              <td>{student.name}</td>

              <td>{student.branch}</td>

              <td>{student.fee}</td>

              <td>{student.attendance}</td>

            </tr>

          ))}

        </tbody>

      </table>
    </>
  );
}

export default StudentTable;