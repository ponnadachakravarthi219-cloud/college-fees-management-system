import { useEffect, useState } from "react";
import "./Attendance.css";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    rollNo: "",
    name: "",
    status: "Present",
    date: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("attendance")) || [];
    setAttendance(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addAttendance = (e) => {
    e.preventDefault();

    if (
      !form.rollNo ||
      !form.name ||
      !form.date
    ) {
      alert("Please fill all fields");
      return;
    }

    setAttendance([
      ...attendance,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      rollNo: "",
      name: "",
      status: "Present",
      date: "",
    });
  };

  const deleteAttendance = (id) => {
    if (window.confirm("Delete attendance record?")) {
      setAttendance(attendance.filter((item) => item.id !== id));
    }
  };

  const filteredAttendance = attendance.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.rollNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="attendance-page">

      <h1>Attendance Management</h1>

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
          <option>Present</option>
          <option>Absent</option>
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
        placeholder="Search by Name or Roll No"
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
              <td colSpan="5">
                No Attendance Records
              </td>
            </tr>
          ) : (
            filteredAttendance.map((item) => (

              <tr key={item.id}>

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
                    onClick={() =>
                      deleteAttendance(item.id)
                    }
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