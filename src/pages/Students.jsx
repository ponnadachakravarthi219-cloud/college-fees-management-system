import { useEffect, useState } from "react";
import "./Students.css";


function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(true);

  // async function fetchStudents(){
  //   try{
  //     const response = await api.get(
  //       "/students");
      
  //     setStudents(response.data.students)
  //     console.log(students)
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  //   finally{
  //     setLoading(false);
  //   }
  // };
  // useEffect(()=>{
  //   fetchStudents();
  // },[]);
  const [form, setForm] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = (e) => {
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

    setStudents([
      ...students,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      name: "",
      rollNo: "",
      branch: "",
      email: "",
      mobile: "",
    });
  };

  const deleteStudent = (id) => {
    const confirmDelete = window.confirm(
      "Delete this student?"
    );

    if (confirmDelete) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const filteredStudents = students.filter((student) =>
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

        <button>Add Student</button>

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
              <tr key={student.id}>

                <td>{student.rollNo}</td>

                <td>{student.name}</td>

                <td>{student.branch}</td>

                <td>{student.email}</td>

                <td>{student.mobile}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteStudent(student.id)
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

export default Students;