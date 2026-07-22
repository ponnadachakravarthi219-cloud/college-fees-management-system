import { useEffect, useState } from "react";
import "./Students.css";
import api from "../services/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await api.get("/students");
      setStudents(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch students");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.rollNo ||
      !form.branch ||
      !form.email ||
      !form.mobile
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post("/students", form);

      alert("Student Added Successfully");

      fetchStudents();

      setForm({
        name: "",
        rollNo: "",
        branch: "",
        email: "",
        mobile: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to add student");
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await api.delete(`/students/${id}`);
      alert("Student Deleted");
      fetchStudents();
    } catch (err) {
      console.log(err);
      alert("Failed to delete student");
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="students-page">

      <h1>Students Management</h1>

      <form className="student-form" onSubmit={addStudent}>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="rollNo"
          placeholder="Roll Number"
          value={form.rollNo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          value={form.branch}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
        />

        <button type="submit">Add Student</button>

      </form>

      <input
        className="search-box"
        type="text"
        placeholder="Search by Name or Roll Number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="6">No Students Found</td>
            </tr>
          ) : (
            filteredStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.email}</td>
                <td>{student.mobile}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student._id)}
                  >
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

export default Students;