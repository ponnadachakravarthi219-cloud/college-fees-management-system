import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Students.css";

function Students() {

const [students,setStudents]=useState([]);

const [loading,setLoading]=useState(true);

const [error,setError]=useState("");

const [search,setSearch]=useState("");

useEffect(()=>{

fetch("https://dummyjson.com/users")

.then((res)=>{

if(!res.ok){
throw new Error("Failed");
}

return res.json();

})

.then((data)=>{

setStudents(data.users);

setLoading(false);

})

.catch(()=>{

setError("Something went wrong");

setLoading(false);

});

},[]);

const filtered=students.filter(student=>

student.firstName.toLowerCase().includes(search.toLowerCase()) ||

student.lastName.toLowerCase().includes(search.toLowerCase())

);

if(loading){
return <h2 className="loading">Loading Students...</h2>;
}

if(error){
return <h2>{error}</h2>;
}

return(

<div className="students">

<h1>Students</h1>

<input

type="text"

placeholder="Search Student"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


<table>

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Email</th>

<th>Department</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

filtered.map((student)=>(

<tr key={student.id}>

<td>{student.id}</td>

<td>{student.firstName} {student.lastName}</td>

<td>{student.email}</td>

<td>{student.company.department}</td>

<td>

<Link to={`/student/${student.id}`}>

<button>View</button>

</Link>

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default Students;