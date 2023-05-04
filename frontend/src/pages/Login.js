import React from "react";

import logo from "../assets/img/logo-black.svg";
import surf from "../assets/img/holiday_0.png";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { login } from "../redux/features/LoginSlice";
import LoginSuccess from "../components/Alerts/LoginSuccess";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(login());
    navigate("/home");
    LoginSuccess();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="left-elements">
          <img src={logo} alt="logo" style={{ margin: "0px" }} />
          <h1>Login</h1>
          <input type="email" placeholder="Enter your Username..." />
          <input type="password" placeholder="Enter your Password..." />

          <div className="login-btn-container">
            <button onClick={loginHandler}>Login</button>
            <Link to="/user-registration">
              <h6>Don't have an account?</h6>
            </Link>
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
