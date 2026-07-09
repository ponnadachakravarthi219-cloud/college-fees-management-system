// function StudentList() {
//   const students = [
//     {
//       name: "Salaar",
//       roll: "23HT1A05P1",
//       fee: 50000,
//       status: "Paid",
//     },
//     {
//       name: "Darling",
//       roll: "23HT1A05D1",
//       fee: 50000,
//       status: "Pending",
//     },
//     {
//       name: "Sahoo",
//       roll: "23HT1A05S1",
//       fee: 50000,
//       status: "Paid",
//     },
//   ];

//   return (
//     <div className="table-container">
//       <h2>Student Fees Details</h2>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Roll Number</th>
//             <th>Fee</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index}>
//               <td>{student.name}</td>
//               <td>{student.roll}</td>
//               <td>₹{student.fee}</td>
//               <td>{student.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StudentList;