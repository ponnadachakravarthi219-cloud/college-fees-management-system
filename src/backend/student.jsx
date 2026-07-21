const fetchStudents = async () => {
  try {
    const response = await api.get("/students");

    setStudents(response.data.data);
  } catch (error) {
    console.log(error);

    alert("Failed to fetch students");
  }
};
useEffect(() => {
  fetchStudents();
}, []);
const addStudent = async () => {
  try {
    await api.post("/students", formData);

    alert("Student Added Successfully");

    fetchStudents();

    setFormData({
      name: "",
      email: "",
      rollNo: "",
      branch: "",
      year: "",
    });

  } catch (error) {
    console.log(error);

    alert("Failed to Add Student");
  }
};
const updateStudent = async (id) => {
  try {
    await api.put(`/students/${id}`, formData);

    alert("Student Updated Successfully");

    fetchStudents();

  } catch (error) {
    console.log(error);

    alert("Failed to Update Student");
  }
};
const deleteStudent = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete?"
  );

  if (!confirmDelete) return;

  try {

    await api.delete(`/students/${id}`);

    alert("Student Deleted Successfully");

    fetchStudents();

  } catch (error) {

    console.log(error);

    alert("Failed to Delete Student");
  }
};
const editStudent = (student) => {

  setFormData(student);

  setEditId(student._id);

};
