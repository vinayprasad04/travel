import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const loginComingData = await axios.post(
        "http://localhost:5001/api/v1/login",
        formData
      );
      localStorage.setItem("token", loginComingData?.data.token);

      dispatch({ type: "login", payload: loginComingData?.data.data });

      console.log(loginComingData?.data.token);
      console.log(loginComingData?.data.data);

      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">ENTER DETAILS</label>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Log In</button>
        <br />
        <br />
        <br />

        <Link to="/signup">new user : SignUp</Link>
      </form>
    </div>
  );
};

export default Signup;
