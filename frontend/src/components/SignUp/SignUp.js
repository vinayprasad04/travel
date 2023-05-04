import React, { useState } from "react";
import "./SignUp.css";
import logoBlack from "../../assets/img/logoBlack.svg";
import { useFormik } from "formik";
import { RegisterValidation } from "../registerValidation";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    phone: "",
    password: "",
    c_password: "",
  };

  const signupSubmit = (values) => {
    setIsloading(true);
    console.log(values);
    const { c_password, ...userFinalData } = values;
    console.log(userFinalData);

    axios
      .post("http://localhost:5000/users/register", userFinalData)
      .then((res) => {
        console.log(res);
        console.log(res.request.status);
        if (res?.request?.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "User Registered Successfull !",
          });
          navigate("/login");
          setIsloading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("err status", err?.response?.status);
        if (err.response.status === 400) {
          Swal.fire({
            icon: "question",
            title: "Invalid !",
            text: "Email or Phone number already exist !",
          });
          setIsloading(false);
        }
      });
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: RegisterValidation,
      onSubmit: () => {
        signupSubmit(values);
      },
    });
  return (
    <div className="arr">
      <div className="imager">
        <img className="image" src={logoBlack} alt="dfg" />
      </div>

      <div
        className="parar"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p>Create a New User Account</p>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <input
            className={
              errors.email && touched.email ? "N-Email error-input" : "N-Email"
            }
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            name="email"
            placeholder="Email"
            type="text"
          />
          {errors.email && touched.email && (
            <p className="error-text-register">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            className={
              errors.phone && touched.phone ? "Phn error-input" : "Phn"
            }
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            id="phone"
            name="phone"
            placeholder="Phone Number"
            type="text"
          />
          {errors.phone && touched.phone && (
            <p className="error-text-register">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            className={
              errors.password && touched.password
                ? "N-Password error-input"
                : "N-Password"
            }
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />
          {errors.password && touched.password && (
            <p className="error-text-register">{errors.password}</p>
          )}
        </div>
        <div>
          <input
            className={
              errors.c_password && touched.c_password
                ? "C-Password error-input"
                : "C-Password"
            }
            value={values.c_password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="c_password"
            placeholder="Confirm Password"
            name="c_password"
            type="password"
          />
          {errors.c_password && touched.c_password && (
            <p className="error-text-register">{errors.c_password}</p>
          )}
        </div>

        <div>
          <button type="submit" className="bnt">
            {isloading ? "Loading..." : "CREATE"}
          </button>
        </div>
      </form>
    </div>
  );
}
