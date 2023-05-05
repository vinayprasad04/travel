import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";

import logo from "../assets/img/logo-black.svg";

import Input from "../components/Input";
import { UserRegistrationSchema } from "../schemas/UserRegistrationSchema";
import LoginSuccess from "../components/Alerts/LoginSuccess";
import { login } from "../redux/features/LoginSlice";

const UserRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerHandler = (values) => {
    console.log("values", values);
    const { userName, email, password } = values;

    axios
      .post("http://localhost:4000/signup", { userName, email, password })
      .then((res) => {
        localStorage.setItem("Token", res.data.token);
        dispatch(login());
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: UserRegistrationSchema,
    onSubmit: (values) => {
      console.log(values);
      registerHandler(values);
      LoginSuccess();
    },
  });

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-elements">
          <img src={logo} alt="logo" style={{ margin: "0px" }} />
          <h1>Register</h1>
          <form onSubmit={formik.handleSubmit}>
            {" "}
            <Input
              id="userName"
              name="userName"
              type="text"
              placeholder="UserName..."
              formik={formik}
              touched={formik.touched.userName}
              errors={formik.errors.userName}
              value={formik.values.userName}
            />
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
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm-Password..."
              formik={formik}
              touched={formik.touched.confirmPassword}
              errors={formik.errors.confirmPassword}
              value={formik.values.confirmPassword}
            />
            <div className="register-btn-container">
              <button type="submit">Register</button>
              <Link to="/">
                <h6 className="link_to_login">Already have an account?</h6>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
