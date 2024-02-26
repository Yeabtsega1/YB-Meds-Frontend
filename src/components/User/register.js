import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [fullname, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let Submit = (e) => {
    e.preventDefault();
    const newEntry = {
      fullname: fullname,
      email: email,
      password: password
    };

    if (fullname === '' || email === '' || password === ''){
      return window.alert("Please fill out the field first");
    }
    // const backendUrl = process.env.REACT_APP_BACKEND_URL;
    // const url = `${backendUrl}/api/register`;
    const params = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntry)
    };

    fetch("https://yb-restaurant-backend.onrender.com/api/register", params)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        window.alert("Registration successful");
        navigate('/login');
      });
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <div className="auth-form-container">
          <h2>Register</h2>
          <form className="register-form" onSubmit={Submit}>
            <label htmlFor="fullname">Full name</label>
            <input value={fullname} onChange={(e) => { setfullName(e.target.value) }} type="fullname" placeholder="Enter your Full name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter your password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
