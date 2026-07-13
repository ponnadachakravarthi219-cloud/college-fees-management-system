import { useState } from "react";
import "./Register.css";

function Register() {

const [student,setStudent]=useState({
name:"",
roll:"",
branch:"",
email:"",
fees:""
});

const change=(e)=>{
setStudent({...student,[e.target.name]:e.target.value});
};

const submit=(e)=>{
e.preventDefault();

const oldData=JSON.parse(localStorage.getItem("students"))||[];

oldData.push(student);

localStorage.setItem("students",JSON.stringify(oldData));

alert("Student Registered Successfully");

setStudent({
name:"",
roll:"",
branch:"",
email:"",
fees:""
});

};

return(

<div className="register">

<h1>Student Registration</h1>

<form onSubmit={submit}>

<input
name="name"
placeholder="Student Name"
value={student.name}
onChange={change}
required
/>

<input
name="roll"
placeholder="Roll Number"
value={student.roll}
onChange={change}
required
/>

<input
name="branch"
placeholder="Branch"
value={student.branch}
onChange={change}
required
/>

<input
name="email"
placeholder="Email"
value={student.email}
onChange={change}
required
/>

<input
name="fees"
placeholder="Total Fees"
value={student.fees}
onChange={change}
required
/>

<button>Register</button>

</form>

</div>

);

}

export default Register;