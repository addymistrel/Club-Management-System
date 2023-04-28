import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handlelogin = () =>
  {
    navigate(`/login`);
  }
  const some="------"
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
        <img src="https://silicon.ac.in/wp-content/themes/sit/assets/img/sit-logo.svg" alt="a" />
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul className = "navbarlist">
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true} className="navbaritems">
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} className="navbaritems">
                About
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} className="navbaritems">
                Clubs
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} className="navbaritems">
                Contact
              </Link>
            </li>
            <li>
              <Link to="" spy={true} smooth={true} className="navbaritems">
                {some}
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-button" onClick={handlelogin}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
