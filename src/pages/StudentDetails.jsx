import { useEffect,useState } from "react";

import { useParams,useNavigate } from "react-router-dom";

import "./StudentDetails.css";

function StudentDetails(){

const {id}=useParams();

const navigate=useNavigate();

const [student,setStudent]=useState(null);

const [loading,setLoading]=useState(true);

useEffect(()=>{

fetch(`https://dummyjson.com/users/${id}`)

.then(res=>res.json())

.then(data=>{

setStudent(data);

setLoading(false);

});

},[id]);

if(loading){

return <h2>Loading...</h2>;

}

return(

<div className="details">

<h1>Student Details</h1>

<img

src={student.image}

alt="student"

/>

<h2>{student.firstName} {student.lastName}</h2>

<p><b>ID:</b> {student.id}</p>

<p><b>Email:</b> {student.email}</p>

<p><b>Phone:</b> {student.phone}</p>

<p><b>Department:</b> {student.company.department}</p>

<p><b>University:</b> {student.university}</p>

<p><b>Address:</b> {student.address.address}</p>

<button

onClick={()=>navigate(-1)}

>

Back

</button>

</div>

);

}

export default StudentDetails;
// import { useParams, useNavigate } from "react-router-dom";
// import "./StudentDetails.css";

// function StudentDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const students = JSON.parse(localStorage.getItem("students")) || [];

//   const student = students[id];

//   if (!student) {
//     return <h2>Student Not Found</h2>;
//   }

//   return (
//     <div className="details">

//       <h1>Student Details</h1>

//       <p><b>Name:</b> {student.name}</p>

//       <p><b>Roll No:</b> {student.roll}</p>

//       <p><b>Branch:</b> {student.branch}</p>

//       <p><b>Email:</b> {student.email}</p>

//       <p><b>Total Fees:</b> ₹{student.fees || 0}</p>

//       <p><b>Paid Fees:</b> ₹{student.paid || 0}</p>

//       <p><b>Pending Fees:</b> ₹{student.pending || 0}</p>

//       <button onClick={() => navigate(-1)}>
//         Back
//       </button>

//     </div>
//   );
// }

// export default StudentDetails;