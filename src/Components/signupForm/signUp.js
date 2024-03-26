import {React,useState} from "react";
import { useNavigate } from 'react-router-dom'
import './signUp.css';

function Signup() {
  const [data,setData] = useState({
    username:"",
    password:""
  });
  const{username,password}=data;
  const handler=(e)=>{
    setData({...data, [e.target.name]:e.target.value}); 
  }
    const navigate = useNavigate();
    const handleClick = () =>{
      data.username = data.username.trim()
      data.password = data.password.trim()
  
      if(data.username === ""){
        alert("please enter name")
      }
      if(data.password === ""){
        alert("please enter password")
      }
      else{
        if(data.password.length<=5){
          alert("Password Should be more than 5 Characters")
        }
        else{
          console.log(data)
        navigate('/Autherization')
        setData({username:"",password:""})
        }

      }
    }
  const submit=(e)=>{
    e.preventDefault();
  }

  return (
    <div className="container">
    <form onSubmit={submit}>
    <div className="input">
    <label htmlFor="name"className="layout">UserName</label>
    <input id="name" type="text" name="username" placeholder="Enter Name" value={username} onChange={handler}/><br/>
    </div>
    <div className="input">
    <label className="layout2" htmlFor="pass">Password</label>
    <input  id="pass" type="password" name="password" placeholder="Enter Password" value={password} onChange={handler}/><br/>
    </div>
    <div className="btncontainer">
    <button className="Signup" type="button" onClick={handleClick}>Signin</button>
    </div>
    </form>
    </div>
  )
}
export default Signup;


