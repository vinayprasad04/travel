import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    axios
      .post("http://localhost:5001/api/v1/signup", formData)
      .then(console.log("Data send Successfully"))
      .catch((e) => console.log(e));

    // setFormData({
    //   name: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   phone: "",
    //   dob: "",
    // });
  };

  return (
    <div>
      <h1>Already registered</h1>
      <div>
        <Link to="/login">
          {" "}
          <div>Login</div>
        </Link>
      </div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

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

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="dob">DOB</label>
        <input
          type="text"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        <button type="submit">Sign up</button>

        <br />
        <br />
        <br />
        <br />
        <Link to="/login"> Already Registered ? SignUP</Link>
      </form>
    </div>
  );
};

export default Signup;
