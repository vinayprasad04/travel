import React from "react";

import logo from "../assets/img/logo-black.svg";
import surf from "../assets/img/holiday_0.png";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../redux/features/LoginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(login());
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="left-elements">
          <img src={logo} alt="logo" style={{ margin: "0px" }} />
          <h1>Login</h1>
          <input type="email" placeholder="Enter your Username..." required />
          <input type="password" placeholder="Enter your Password..." />

          <div className="login-btn-container">
            <button onClick={() => loginHandler()}>Login</button>
            <h6>Don't have an account?</h6>
          </div>
        </div>
        <div className="right-elements">
          <img src={surf} alt="surfing" />
        </div>
      </div>
    </div>
  );
};

export default Login;
