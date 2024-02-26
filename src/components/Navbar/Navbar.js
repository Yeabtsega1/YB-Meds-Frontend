import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar1.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-muted">
      <div className="container-fluid">

        <a className="nav-link" >YB Meds <span className="sr-only"></span></a>

        {/* Conditional rendering of navigation links */}
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Add your navigation links here */}
          </ul>
          <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
          <Link className="btn btn-primary mx-2" to="/register" role="button">SignUp</Link>
        </div>

        {/* Menu icon */}
        <div className={`menu-icon ${open ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
