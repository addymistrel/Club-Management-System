import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login/Login"
function App()
{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/google" Component={() => {window.location.replace('https://google.com')}}/>
      </Routes>
    </>
  )
}

export default App;
