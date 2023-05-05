import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

export default function EmailID() {
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);

  const formSubmit = (values) => {
    setIsloading(true);
    axios
      .post("http://localhost:7000/users/login", values)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have been login Successfully !",
          });
          const data = res;
          localStorage.setItem("user", JSON.stringify(data));
          setIsloading(false)
          navigate("/");
        } else if (res.status === 401) {
          Swal.fire({
            icon: "info",
            title: "Invalid Email or Password !",
          });
          setIsloading(false)
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 401) {
          Swal.fire({
            icon: "info",
            title: "Invalid Email or Password !",
            text: "Please enter correct credentials..",
          });
          setIsloading(false)
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong !",
            text: err,
          });
          setIsloading(false)
        }
      });
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("email must be valid !")
          .required("Required field !"),
        password: Yup.string().required("Required field !"),
      }),
      onSubmit: () => {
        formSubmit(values);
      },
    });
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label
            className="lb1"
            style={{ fontFamily: "BrownLight", fontSize: "1.2rem" }}
          >
            Enter your Login name and Password
          </label>
          <input
            className={errors.email && touched.email ? "Email error" : "Email"}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            name="email"
            placeholder="Login"
            type="text"
          />
        </div>
        {errors.email && touched.email && (
          <p className="errors">{errors.email}</p>
        )}
        <div>
          <input
            className={
              errors.password && touched.password
                ? "password error"
                : "password"
            }
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>
        {errors.password && touched.password && (
          <p className="errors">{errors.password}</p>
        )}
        <p className="errors"></p>
        <div className="link">
          <Link
            style={{ fontFamily: "BrownLight", fontSize: "1rem" }}
            to="/SignUp"
          >
            Create a New Account
          </Link>
        </div>
        <div>
          <button type="submit" className="button">
            {isloading ? "Loading.." : "LOGIN"}
          </button>
        </div>
      </form>
    </div>
  );
}
