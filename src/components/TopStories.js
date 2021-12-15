import { useState, useEffect } from "react";
import axios from "../axios/index";

export default function TopStories(props){
const [rows, setRows] = useState([]);

useEffect(() => {
	//console.log('TS - '+props.i);
	get_data(props.i);
}, [props.i]);

async function get_data(z){
  try{
    let response = (await axios.get(`https://api.nytimes.com/svc/topstories/v2/${z}.json?api-key=avs2A33AFRanSY7KGFVs2EAxWMQe2fGW`));
    setRows(await response.data.results);
  }catch(err){
    console.error(err);
  }
}

function check_image(i){
	//console.log('i: '+i.multimedia);
	if(i === null){
		return "Data unavailable";
	} else if(i.multimedia === undefined || i.multimedia === null){
		return <i className='fa fa-image'></i>;
	} else if(i.multimedia[1] === undefined || i.multimedia[1] === null){
		return <i className='fa fa-image'></i>;
	} else {
		return <img src={i.multimedia[1].url} alt={i.title} />;
	}
}

function render(){
	const listItems = rows.map((i) =>
		<tr key={i.title+Math.floor(Math.random()*999)}>
      		<td onClick={()=>props.parentCallback('detail',i)}><img src={i.multimedia[0].url} alt="Unavailable" className="img img-fluid" /></td>
			<td onClick={()=>props.parentCallback('detail',i)}>{i.title}</td>
			<td onClick={()=>props.parentCallback('detail',i)}>{i.created_date}</td>
			<td><button onClick={()=>props.parentCallback('add_bookmark',i)} className="btn btn-light btn-sm"><i className="fa fa-plus"></i></button></td>
    	</tr>
  );
  return (  
    <tbody>{listItems}</tbody>
  );  
}

return(
	<div className="col-md-12">
		<table className="table table-sm table-hover">
		<thead>
		<tr className="table-light"><th>Image</th><th>Title</th><th>Published On</th><th>Bookmark</th></tr>
		</thead>
		{render()}
		</table>
	</div>
);
}