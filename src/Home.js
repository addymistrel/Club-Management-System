import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
// import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "./Context";
import { useLocation } from "react-router-dom";
import Navbarafter from "./components/Navbarafter/Navbarafter";
// import Login from "./components/Login/Login";
// import { Route,Routes } from "react-router-dom";
function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const location=useLocation();
  const [state,setState]=useState(false);
  useEffect(()=>{
    console.log(location.state)
    console.log(state)
    if(location.state!==null && location.state===true)
      setState(true);
    else if(location.state===null || location.state===false)  
      setState(false);
  },[location.state])
  console.log(state);
  return (
    <>
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      
      {(state===false)?<Navbar/>:<Navbarafter/>}
      <Intro />
      <Portfolio />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
      </>
  );
}

export default Home;
