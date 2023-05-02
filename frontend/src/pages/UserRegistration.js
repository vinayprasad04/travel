import React from "react";
import logo from "../assets/img/logo-black.svg";
import Link from "antd/es/typography/Link";
import { useFormik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../components/Input";
import { UserRegistrationSchema } from "../schemas/UserRegistrationSchema";

const UserRegistration = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: UserRegistrationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
