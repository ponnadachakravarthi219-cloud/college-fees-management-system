import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Attendance.css";

function Attendance() {
  const navigate = useNavigate();

  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    rollNo: "",
    name: "",
    status: "Present",
    date: "",
  });

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const res = await api.get("/attendance");
      setAttendance(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch attendance");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addAttendance = async (e) => {
    e.preventDefault();

    if (!form.rollNo || !form.name || !form.date) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post("/attendance", form);

      alert("Attendance Saved Successfully");

      fetchAttendance();

      setForm({
        rollNo: "",
        name: "",
        status: "Present",
        date: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to save attendance");
    }
  };

  const deleteAttendance = async (id) => {
    if (!window.confirm("Delete attendance record?")) return;

    try {
      await api.delete(`/attendance/${id}`);
      alert("Attendance Deleted");
      fetchAttendance();
    } catch (err) {
      console.log(err);
      alert("Failed to delete attendance");
    }
  };

  const filteredAttendance = attendance.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.rollNo.toLowerCase().includes(search.toLowerCase())
  );
const role=localStorage.getItem("role");
  return (
    <div className="attendance-page">

      <h1>Attendance Management</h1>

      <button
        className="back-btn"
        onClick={() => navigate("/dashboard")}
      >
        ← Back to Dashboard
      </button>

      <form className="attendance-form" onSubmit={addAttendance}>

        <input
          type="text"
          name="rollNo"
          placeholder="Roll Number"
          value={form.rollNo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <button type="submit">
          Save Attendance
        </button>

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
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredAttendance.length === 0 ? (
            <tr>
              <td colSpan="5">No Attendance Records</td>
            </tr>
          ) : (
            filteredAttendance.map((item) => (
              <tr key={item._id}>

                <td>{item.rollNo}</td>

                <td>{item.name}</td>

                <td>
                  <span
                    className={
                      item.status === "Present"
                        ? "present"
                        : "absent"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>{item.date}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteAttendance(item._id)}
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

export default Attendance;