import { useState, useEffect, useRef } from 'react';
import axios from "../axios";

function Login(){
const [data, setData] = useState({user_id:"gohar@gmail.com", password:"admin", table:"users"});
const [msg, setMsg] = useState('');

async function submit(e){
  e.preventDefault();
  console.log("Submit");
	  try{
	    const response = await axios.post('/login', data);
      const {token, rows} = await response.data;
      console.log(token, rows);
      //console.log('Rows: '+ parseInt(this.rows.length));
        if(rows !== ''){
          //this.setUser(rows);				/*Set row in state*/
          //this.setToken(token);			/*Set token in state*/
          setMsg = "Login successfull.";
          //this.$router.push('/Students');
        }else{
          this.$router.push('/');
        }
      }catch(err){
        console.error(err);
      }
}


return(
    <div>
      <h3 className="pull-left">Login</h3>
      <form onSubmit={submit}>
        <label>ID</label>
        <input type="text" value={data.user_id} />
        <label>Password</label>
        <input type="password" value={data.password} />
        <button className="btn btn-primary"><i className="far fa-user"></i> Login</button>
      </form>
    </div>
  );
}
export default Login;