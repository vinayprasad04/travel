import React from "react";
import logo from "../assets/img/logo-black.svg";
import Link from "antd/es/typography/Link";
import * as Yup from "yup";
import { useFormik } from "formik";
import "react-datepicker/dist/react-datepicker.css";

const UserRegistration = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-elements">
          <img src={logo} alt="logo" style={{ margin: "0px" }} />
          <h1>Login</h1>
          <form onSubmit={formik.handleSubmit}>
            {" "}
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="UserName..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div>{formik.errors.userName}</div>
            ) : null}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm-Password..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            <div className="register-btn-container">
              <button type="submit">Register</button>
              <Link>
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
