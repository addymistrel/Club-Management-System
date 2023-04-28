import Toggle from "../Toggle/Toggle";
import "./Navbarafter.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
// import Modal from "../popup/pop";
// import {toggleShow } from "../popup/pop"
import { useState } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const Navbarafter = () => {
  const navigate = useNavigate();
  // const [val,setVal] = useState(false);
  // const [dd,setDd] = useState(0);
  const handlelogout = () =>
  {
    alert("We appreciate your kind presence !")
    navigate("/",{state:false});
  }
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

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
            <button className="n-button5" onClick={toggleShow}>Add_Event</button>
            {/* {val?<Modal value={dd}/>:" "} */}
            {/* <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn> */}
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Select Your Club</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                  <div className="clubs">
                    <div className="clubschild">
                      <button className="n-button5" onClick={toggleShow}>Quiz_Club</button>
                    </div>
                    <div className="clubschild">
                      <button className="n-button5" onClick={toggleShow}>Switch_Club</button>
                    </div>
                    <div className="clubschild">
                    <button className="n-button5" onClick={toggleShow}>Music_Club</button>
                    </div>
                    <div className="clubschild">
                    <button className="n-button5" onClick={toggleShow}>Robotics_Club</button>
                    </div>
                    <div className="clubschild">
                      <button className="n-button5" onClick={toggleShow}>ED_Cell</button>
                    </div>
                    <div className="clubschild">
                    <button className="n-button5" onClick={toggleShow}>Sports_Club</button>
                    </div>
                    <div className="clubschild">
                    <button className="n-button5" onClick={toggleShow}>Social_Media_Cell</button>
                    </div>
                    <div className="clubschild">
                    <button className="n-button5" onClick={toggleShow}>Creative_Club</button>
                    </div>
                  </div>
                  </MDBModalBody>

                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggleShow}>
                      Close
                    </MDBBtn>
                    {/* <MDBBtn>Save changes</MDBBtn> */}
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            </li>
          </ul>
        </div>
        <button className="button n-button" onClick={handlelogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbarafter;
