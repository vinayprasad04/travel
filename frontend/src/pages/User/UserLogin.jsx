import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import logo from "../../assets/img/logo-black.svg";
import swal from "sweetalert";


const UserLogin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data) {
      swal("Success!", "SignUp  succesfully!", "success");
    } else {
      swal("Oops!", "Eailed to send email", 'error');
    }
    console.log("LOGIN DATA", data);
}

  return (
    <>
      <div className="card mainCard">
        <img src={logo} alt="" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input type="email" {...register("Email")} required={true} />
          <label>Password</label>

          <input type="password" {...register("Password")} required={true} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
