import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

function Dashboard() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <StudentForm addStudent={addStudent} />

      <br />

      <StudentTable students={students} />
    </div>
  );
}

export default Dashboard;