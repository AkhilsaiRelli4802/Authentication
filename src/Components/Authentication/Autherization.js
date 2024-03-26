import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './Autherization.css'

function Autherization(){
    const[password,setPassword]=useState('')
    useEffect(()=>{
        generatePassword();
    },[])

    const generatePassword=()=>{
        const uniquePassword=uuidv4()
        setPassword(uniquePassword)
    };

    // const sendPasswordToServer = () => {
    //     console.log('Password sent to server:', password);
    //   };

    const [data,setData]=useState({
        userPassword:""
    });
    const{userPassword}=data;
    const handler=(e)=>{
        setData({...data, [e.target.name]:e.target.value}); 
    }
    const navigate=useNavigate();
    const onValidate=()=>{
       if (data.userPassword==="") {
        alert("Enter Password")
       } else {
        if(data.userPassword===password){
            console.log(data)
            navigate('/UserDetails')
        }
        else{
            alert("incorrect Password")
        }
        
       }
    }

return(
    <div className='Authorizationcontainer'>
        <h1> Enter Your Password</h1>
        {password&&<QRCode value={password}/>}
        <div className='buttoncontainer'>
        <button className='button' onClick={generatePassword}>Regenerate Password</button>
        {/* <button className='button' onClick={sendPasswordToServer}>Send Password to Server</button> */}
        </div>
        <p style={{fontStyle:"inherit",fontWeight:"bolder"}}>Password: <span style={{fontSize:"20px"}}>{password}</span></p>
        <input id="name" type="text" name="userPassword" placeholder="Enter Password" value={userPassword} onChange={handler}/><br/>
        <button type='button' className='validate' onClick={onValidate}>Validate</button>
    </div>
    )
}
export default Autherization;