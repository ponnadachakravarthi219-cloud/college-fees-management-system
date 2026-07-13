import "./DashboardCards.css";

function DashboardCards({ students }) {

const total = students.length;

const totalFees = total * 50000;

const paid = total * 35000;

const pending = totalFees - paid;

const cards = [

{title:"Students",value:total},

{title:"Total Fees",value:`₹${totalFees}`},

{title:"Paid",value:`₹${paid}`},

{title:"Pending",value:`₹${pending}`}

];

return(

<div className="cards">

{

cards.map((card,index)=>(

<div className="card" key={index}>

<h2>{card.value}</h2>

<p>{card.title}</p>

</div>

))

}

</div>

);

}

export default DashboardCards;