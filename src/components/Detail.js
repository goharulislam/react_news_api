import React, { useState, useEffect } from "react";

export default function Detail(props){
const [rows, setRows] = useState([]);

useEffect(() => {
	//console.log('Detail '+props.i);
	setRows(props.i);
}, [props.i]);

function render(){
let a = "";

a = Object.entries(rows).map(([key,value])=>{
	//console.log(key+'='+value);
	if(rows.hasOwnProperty(key)){
		if(value && typeof(value) !== "undefined" && value !== "" && value !== []){	
			if(value.constructor === Array && key === "multimedia"){
				//if(value[0].url.filter((u) => /\.(jpe?g|png|webp)$/.test(u))){
					return(<li key={key}><span className="badge bg-secondary">{key}</span><div className="col-sm-3 col-xs-12"><img src={value[0].url} alt="Unavailable" className="img img-thumbnail" /></div></li>);
				//}
			}else{
				console.log('cart2: '+value);
				return(<li key={key}><span className="badge bg-secondary">{key}</span> {value.toString()}</li>);
			}
		}
	}
});

return a;
}

function Back(){
	//e.preventDefault();
	props.parentCallback("topstories", "home");
}

return(
	<div className="col-md-12">
		<h5 className="float-start">News Detail</h5>
		<button className="float-end btn btn-secondary" onClick={()=>Back()}>Back</button>
		<div className="clearfix"></div>
		<ol>{render()}</ol>
	</div>
);
}