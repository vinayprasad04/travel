import React, { useState } from "react";
import '../../assets/scss/login.css';
import { useForm } from "react-hook-form";
import logo from "../../assets/img/logo-black.svg";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Sample User

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    axios
      .post("http://localhost:5000/createUser", data)
      .then((res) => {
        swal("Success!", "Login Succesfully!", "success");
        navigate("/feedback");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="card mainCard">
        <img src={logo} alt="" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input
            type="email"
            {...register("email")}
            required={true}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            required={true}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
