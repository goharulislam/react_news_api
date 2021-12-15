import { useState, useEffect, useRef } from 'react';
import axios from "../axios";
import UsersRead from '../components/users/UsersRead';
import UsersAdd from '../components/users/UsersAdd';
import UsersEdit from '../components/users/UsersEdit';
import UsersDelete from '../components/users/UsersDelete';
import Footer1 from '../components/Footer1';

export default function Users(){
const [data, setData] = useState({user_id:"gohar@gmail.com", password:"admin", table:"users"});
const [msg, setMsg] = useState('');
const [read, setRead] = useState(true);
let [add, setAdd] = useState(false);
let [edit, setEdit] = useState(false);
let [delete_, setDelete_] = useState(false);
let [data2, setData2] = useState(null);
let [i, setI] = useState(null);

function show_component(name,i){
	console.log("i :"+i.user_id);
	setMsg(i);
	setI(i);
	switch(name){
		case 'read':
			setRead(true);
			setAdd(false);
			setEdit(false);
			setDelete_(false);
		break;
		case 'add':
			setRead(false);
			setAdd(true);
			setEdit(false);
			setDelete_(false);
		break;
		case 'edit':
			setRead(false);
			setAdd(false);
			setEdit(true);
			setDelete_(false);
			console.log('EDIT');
		break;
		case 'delete_':
			setRead(false);
			setAdd(false);
			setEdit(false);
			setDelete_(true);
		break;
	}
}

return(
	<div className="col-lg-12">
		<p>{data2}</p>
		{ read && <button className="pull-right btn btn-primary" onClick={()=>show_component('add')}><i className="fa fa-plus"></i> Add new</button> }
		{ read ? <UsersRead parentCallback={show_component}/> : null }
		{ add && <UsersAdd parentCallback={show_component}/> }
		{ edit && <UsersEdit parentCallback={show_component} /> }
		{ delete_ && <UsersDelete props={i} parentCallback={show_component} /> }
		<Footer1 />
	</div>
  );
}