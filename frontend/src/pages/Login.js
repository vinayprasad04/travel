import React from "react";
import logo from "../assets/img/logo-black.svg";
import surf from "../assets/img/holiday_0.png";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="left-elements">
          <img src={logo} alt="logo" style={{ margin: "0px" }} />
          <h1>Login</h1>
          <input type="email" placeholder="Enter your Username..." />
          <input type="password" placeholder="Enter your Password..." />

          <div className="login-btn-container">
            <button>Login</button>
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
