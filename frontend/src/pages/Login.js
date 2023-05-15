import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

import logo from "../assets/img/logo-black.svg";
import surf from "../assets/img/holiday_0.png";

import { login } from "../redux/features/LoginSlice";
import Success from "../components/Alerts/Success";
import Input from "../components/Input";
import Failure from "../components/Alerts/Failure";
import loginValidationSchema from "../schemas/LoginValidationSchema";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      loginHandler(values);
    },
  });

  const loginHandler = (values) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/login`, { values })
      .then((res) => {
        console.log("loginnnnnnnnnnnnnnnn", res);
        Success("Logged In Successfully 😁");
        dispatch(login());
        localStorage.setItem("Token", res.data.token);
        localStorage.setItem("userDetails", JSON.stringify(res.data));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        Failure("SOMETHING WENT WRONG 😓");
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="left-elements">
          <img src={logo} alt="logo" style={{ margin: "0px" }} />
          <h1>Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email..."
              formik={formik}
              touched={formik.touched.email}
              errors={formik.errors.email}
              value={formik.values.email}
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password..."
              formik={formik}
              touched={formik.touched.password}
              errors={formik.errors.password}
              value={formik.values.password}
            />
            <div className="login-btn-container">
              <button type="submit">Login</button>
              <Link to="/user-registration">
                <h6>Don't have an account?</h6>
              </Link>
            </div>
          </form>
        </div>
        <div className="right-elements">
          <img src={surf} alt="surfing" />
        </div>
      </div>
    </div>
  );
};

export default Login;
