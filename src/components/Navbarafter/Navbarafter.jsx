import Toggle from "../Toggle/Toggle";
import "./Navbarafter.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbarafter = () => {
  const navigate = useNavigate();
  const handlelogout = () =>
  {
    alert("We appreciate your kind presence !")
    navigate("/",{state:false});
  }
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
                Dropdown
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-button" onClick={handlelogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbarafter;
