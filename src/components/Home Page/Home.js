import React from "react";
import Image from "./../images/YB.jpeg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  
  return (
   <div>
    <Navbar />
    
    <section id="hero">
      <div className="hero-container">
        <div className="hero-logo" >
          <img src={Image} alt="YB is busy" />
        </div>
        <div className="hero-text">
          <h1>Welcome To YB Meds</h1>
          <h2>Discover Your Best Health</h2>
        </div>
        <div className="actions">
          <Link to="/login" className="main-2">
            Login
          </Link>
          <Link to="/register" className="main-1">
            Register
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;



