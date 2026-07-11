import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import StudentCard from "./StudentCard";
import "./Dashboard.css";

function Dashboard({ onLogout }) {
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
    <>
      <Navbar onLogout={onLogout} />

      <div className="dashboard-container">

        <Sidebar />

        <div className="dashboard-content">

          <h1>Dashboard</h1>

          {/* Summary Cards */}
          <div className="summary-cards">

            <div className="summary-card green">
              <h3>Total Students</h3>
              <h2>{students.length}</h2>
            </div>

            <div className="summary-card yellow ">
              <h3>Fees Paid</h3>
              <h2>{paidStudents}</h2>
            </div>

            <div className="summary-card pink">
              <h3>Pending Fees</h3>
              <h2>{pendingStudents}</h2>
            </div>

            <div className="summary-card blue">
              <h3>Total Courses</h3>
              <h2>12</h2>
            </div>

          </div>

          <StudentForm addStudent={addStudent} />

            <>
              {/* Student Cards */}
              <h2>Student Cards</h2>

              <div className="student-card-container">
                {students.map((student, index) => (
                  <StudentCard
                    key={index}
                    student={student}
                  />
                ))}
              </div>

              {/* Student Table */}
              <h2>Student Table</h2>

              <StudentTable
                students={students}
                deleteStudent={deleteStudent}
              />
            </>
          

        </div>

      </div>
    </>
  );
}

export default Dashboard;