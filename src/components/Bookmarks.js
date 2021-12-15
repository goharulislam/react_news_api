import { useState, useEffect } from "react";

export default function Bookmarks(props){
const [rows, setRows] = useState([]);

useEffect(() => {
	try{
		setRows(props.i);
	}catch(err){
		console.error(err);
	}
}, [props.i]);

function render(){
	const listItems = rows.map((i) =>  
		<div className="col-md-4" key={i.title+Math.floor(Math.random()*999)}>
      		<div><img src={i.multimedia[0].url} alt={i.title} className="img-thumbnail" /></div>
			<h6>{i.title}</h6>
			<p>{i.created_date}</p>
    	</div>
  );  
  return (  
    <div className="row">{listItems}</div>
  );
}

function Back(){
	//e.preventDefault();
	props.parentCallback("topstories", "home");	
}

return(
	<div className="col-md-12">
		<h3 className="float-start">Bookmarks</h3>
		<button className="float-end btn btn-secondary" onClick={()=>Back()}>Back</button>
		<div className="clearfix"></div>
		{render()}
	</div>
);
}