import React from 'react'
import {Helmet} from 'react-helmet';
import "./Login.css"

const Login = ()=> {
  return (
    <>
    <Helmet>
        <link  href="./Login.css" rel="stylesheet"/>
    </Helmet>
    <div className="login" id="login">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="/">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
    </>
  )
}

export default Login
