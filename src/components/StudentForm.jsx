import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    course: "",
    amount: "",
    feeStatus: "Pending",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      student.name.trim() === "" ||
      student.rollNo.trim() === "" ||
      student.course.trim() === "" ||
      student.amount.trim() === ""
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    addStudent(student);

    setMessage("Student added successfully!");

    setStudent({
      name: "",
      rollNo: "",
      course: "",
      amount: "",
      feeStatus: "Pending",
    });
  };

  return (
    <div className="student-form">

      <h2>Student Registration</h2>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="rollNo"
          placeholder="Roll Number"
          value={student.rollNo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Fee Amount"
          value={student.amount}
          onChange={handleChange}
        />

        <select
          name="feeStatus"
          value={student.feeStatus}
          onChange={handleChange}
        >
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>

        <button type="submit">
          Add Student
        </button>

      </form>

    </div>
  );
}

export default StudentForm;