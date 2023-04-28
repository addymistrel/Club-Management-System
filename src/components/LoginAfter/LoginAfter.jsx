import React from 'react'
import {Helmet} from 'react-helmet';
import "./Login.css"
import pic from "../../img/bglogin.jpg"
import {auth} from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
const Login = () => {
  const navigate = useNavigate();
  const [errormsg,setErrormsg] = useState("");
  const [values,setValues] = useState({
    email:"",
    pass:"",
  });
  const [data,setData] = useState(false)
  function loginuser(){
  signInWithEmailAndPassword(auth,values.email,values.pass).then(
    (res)=>{
      // setsubmitButtonDisabled(false);
      // let str = values.email.replace(".com","");
      // pushId(str);
      setData(true);
      navigate("/",{state:{loginval:data}});
    })
    .catch((err)=>{
      setErrormsg(err.message);
    });
  }
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(values.email, values.pass);
    loginuser();
  }

  return (
    <>
    <Navbar/>
    
    <img className="imgbg" src={pic} alt="a"/>
    <Helmet>
        <link  href="./Login.css" rel="stylesheet"/>
    </Helmet>
    <div className="login" id="login">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required="" onChange={event=> setValues((prev)=>({...prev,email:event.target.value}))}/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" onChange={event=> setValues((prev)=>({...prev,pass:event.target.value}))}/>
      <label>Password</label>
    </div>
    <b className="error">{errormsg}</b>
    <button onClick={handleSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
</div>
    </>
  );
};

export default Login;
