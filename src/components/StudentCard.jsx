import "./StudentCard.css";

function StudentCard({ student }) {
  return (
    <div className="student-card">

      <h3>{student.name}</h3>

      <p>
        <strong>Roll No:</strong> {student.rollNo}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Fee Amount:</strong> ₹{student.amount}
      </p>

      <p>
        <strong>Status:</strong> {student.feeStatus}
      </p>

    </div>
  );
}

export default StudentCard;
