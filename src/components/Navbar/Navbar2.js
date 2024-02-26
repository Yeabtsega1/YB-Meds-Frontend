import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

const Navbar2 = (props) => {
  return (
    <Navbar bg="light" expand="lg" style={{ fontFamily: ' "Merriweather", serif', marginTop: "550px", marginLeft: "-300px", marginRight: "-20px"}}>
       {/* <nav style={{ backgroundColor: "light", paddingBottom: "0px",paddingTop:"10px", marginTop: "300px", fontFamily: ' "Merriweather", serif'}}> */}
      <Navbar.Brand href="#" style={{ marginLeft: "300px" }}>
      YB Meds
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand className="mr-auto" style = {{marginLeft: "295px"}}>Personalized Recommendations for You</Navbar.Brand>
        <Nav style={{ marginLeft: "-125px"}}>
          <Link className="btn btn-primary mx-4" to="/aboutus">
            About Us
          </Link>
          <Link className="btn btn-primary mx-1" to="/contactus">
            Contact Us
          </Link>
          <Link className="btn btn-primary mx-1" to="/login">
            Sign Out
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar2;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar2 = (props) => {
//   return (
//     <nav style={{ backgroundColor: "lightgray", paddingBottom: "0px",paddingTop:"10px", marginTop: "300px", fontFamily: ' "Merriweather", serif'}}>
//       <Link to="#" style={{ marginLeft: "20px", color: "black", textDecoration: "none" }}>
//         YB RESTAURANT
//       </Link>
//       <button aria-controls="basic-navbar-nav" style={{ marginLeft: "auto", marginRight: "20px" }}>
//         Menu
//       </button>
//       <div className="navbar-collapse">
//         <Link to="/aboutus" style={{ margin: "0 10px", color: "blue", textDecoration: "none" }}>
//           About Us
//         </Link>
//         <Link to="/contactus" style={{ margin: "0 10px", color: "blue", textDecoration: "none" }}>
//           Contact Us
//         </Link>
//         <Link to="/cart" style={{ margin: "0 10px", color: "blue", textDecoration: "none" }}>
//           Cart {props.Count}
//         </Link>
//         <Link to="/login" style={{ margin: "0 10px", color: "blue", textDecoration: "none" }}>
//           Sign Out
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar2;