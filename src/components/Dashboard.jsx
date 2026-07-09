import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import "./Dashboard.css";

function Dashboard() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const paidStudents = students.filter(
    (student) => student.feeStatus === "Paid"
  ).length;

  const pendingStudents = students.filter(
    (student) => student.feeStatus === "Pending"
  ).length;

  return (
    <div>
      <Navbar />

      <div className="dashboard-container">
        <Sidebar />

        <div className="dashboard-content">
          <h1>Dashboard</h1>

          <div className="cards">
            <div className="card blue">
              <h3>Total Students</h3>
              <h2>{students.length}</h2>
            </div>

            <div className="card green">
              <h3>Fees Paid</h3>
              <h2>{paidStudents}</h2>
            </div>

            <div className="card red">
              <h3>Pending Fees</h3>
              <h2>{pendingStudents}</h2>
            </div>

            <div className="card orange">
              <h3>Total Courses</h3>
              <h2>12</h2>
            </div>
          </div>

          <StudentForm addStudent={addStudent} />

          <StudentTable
            students={students}
            deleteStudent={deleteStudent}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;