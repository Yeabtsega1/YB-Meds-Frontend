import React from "react";
// import Image from "./../images/foodie.jpeg";
import "./Aboutus.css";
import { Link } from "react-router-dom";
import Images from "./../images/YB.jpeg";


const Aboutus = () => {
  return (
    <>
    <div className="aboutus">
    <Link className="btn btn-light mx-1" to="/Home" role="button">
            Back
          </Link>
      <h3 className="about">
        Welcome To <span id="W_Name1">YB Meds</span>
      </h3>
      <div className="content">
      <p><b>
        <span id="W_Name2"></span>We are dedicated to revolutionizing healthcare by providing personalized medication recommendations tailored to your unique needs.{" "}
        <span id="W_Type1">Our team of healthcare experts, data scientists, and AI engineers collaborate to leverage cutting-edge technology and the latest medical research to ensure the highest quality of care.</span>
        With a user-friendly interface and a commitment to your well-being, we strive to empower individuals to make informed decisions about their health and medication management.<span id="W_Type2">Join us on this journey towards a healthier, happier future.</span>
        </b>
      </p>
      </div>
      {/* <div className="hero-logo">
                  <img src={Images} alt="GKMIT is busy"/>
              </div> */}
      <p className="greetings">
        Thanks For Visiting Our Site
        <br />
        <span className="msg">
          Have a nice day!
        </span>
      </p>
      </div>
    </>
  );
};

export default Aboutus;
