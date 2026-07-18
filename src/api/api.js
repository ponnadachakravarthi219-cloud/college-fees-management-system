// const BASE_URL = "http://localhost:5000";

// export async function getStudents() {
//   const response = await fetch(`${BASE_URL}/students`);
//   return response.json();
// }

// export async function getStudent(id) {
//   const response = await fetch(`${BASE_URL}/students/${id}`);
//   return response.json();
// }

// export async function addStudent(student) {
//   const response = await fetch(`${BASE_URL}/students`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(student),
//   });

//   return response.json();
// }

// export async function updateStudent(id, student) {
//   const response = await fetch(`${BASE_URL}/students/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(student),
//   });

//   return response.json();
// }

// export async function deleteStudent(id) {
//   const response = await fetch(`${BASE_URL}/students/${id}`, {
//     method: "DELETE",
//   });

//   return response.json();
// }

