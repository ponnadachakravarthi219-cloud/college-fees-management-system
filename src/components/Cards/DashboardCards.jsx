import "./DashboardCards.css";

import {
FaUserGraduate,
FaMoneyBillWave,
FaClipboardCheck,
FaChartLine
} from "react-icons/fa";

function DashboardCards(){

const cards=[

{
title:"Total Students",
value:"520",
icon:<FaUserGraduate/>,
color:"#2196f3"
},

{
title:"Fees Collected",
value:"₹12,50,000",
icon:<FaMoneyBillWave/>,
color:"#4caf50"
},

{
title:"Attendance",
value:"94%",
icon:<FaClipboardCheck/>,
color:"#ff9800"
},

{
title:"Reports",
value:"35",
icon:<FaChartLine/>,
color:"#9c27b0"
}

];

return(

<div className="cards">

{

cards.map((card,index)=>(

<div className="card-box" key={index}>

<div
className="card-icon"
style={{background:card.color}}
>

{card.icon}

</div>

<div>

<h3>{card.value}</h3>

<p>{card.title}</p>

</div>

</div>

))

}

</div>

)

}

export default DashboardCards;