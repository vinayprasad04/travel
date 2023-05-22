import React from "react";
import '../../assets/scss/login.css';
import { useForm } from "react-hook-form";
import logo from "../../assets/img/logo-black.svg";
import swal from "sweetalert";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {

  console.log("Data" , data)
    axios.post("http://localhost:5000/createUser" ,data)
    .then((res)=>{
      console.log("Response from Signup.js : ", res );
      if (res.data.exists) {
        swal("Oops!", "Already Existing User", "error");
        navigate('/login');
      }
      else{
        swal("Success!", "Verification email sent succesfully!", "success");
        navigate('/feedback');
      }
    }).catch((error)=>{
      console.log(error);
    })

    

    console.log("SIGNUP DATA", data);
  };



  return (
    <>
      <div className="card mainCard">
        <img src={logo} alt="" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="firstLabel">Name</label>
          <input type="text" {...register("Name")} required={true} />

          <label className="firstLabel">Email</label>
          <input
            type="email"
            {...register("Email")}
            required={true}
            defaultValue={""}
          />

          <label className="firstLabel lab">Password</label>
          <input
            type="password"
            {...register("Password")}
            required={true}
            defaultValue={""}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserSignup;
