import React, { useState } from "react";
// import 'D:/travel/frontend/src/assets/styles/Area.css'
import "./Login.css";
import logoBlack from "D:/travel/frontend/src/assets/img/logoBlack.svg";
import {Link} from 'react-router-dom';

import axios from "axios";
import { useFormik } from "formik";
import { signUpSchenam } from "../schemas";
//import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Neom from '../Login/Neom_img.jpg'

const initialValues = {
  email : "",
  phone: "",
  password: "",
  confirmpassword: "",
}

export default function Login() {
  //  const [formValue,setFormValue] = useState({email:'',phone:'',password:''});
  const [message, setMessage] = useState("");

 const {values,errors,touched,handleBlur,handleChange,handleSubmit}  = useFormik({
  initialValues:initialValues,
  validationSchema: signUpSchenam,
  onSubmit : (values) =>{
    console.log(values)
    // Swal.fire({
    //   position: 'centre',
    //   icon: 'success',
    //   title: 'Details Submitted Successfully',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
    // const p=errors
    // console.log(p)
    // var length = Object.keys(p).length;
    // console.log(length)
   
      Swal.fire({
        position: 'centre',
        icon: 'success',
        title: 'Details Submitted Successfully',
        showConfirmButton: false,
        timer: 1500
    })
     const res = axios.post("http://localhost:4000/loginUser",values)
    .then(response=>{setMessage(response.values)});

   
       
      



    // const res = axios.post("http://localhost:4000/adduser",values)
    // .then(response=>{setMessage(response.values)});
    
    
  }
 });
// const p=errors
// var length = Object.keys(p).length;
// console.log(length)
// if (length==1){
//   Swal.fire({
//     position: 'centre',
//     icon: 'error',
//     title: 'Fill Details Correctly',
//     showConfirmButton: false,
//     timer: 1500
//   })
// }


  // const {register,formState:{errors},handleSubmit}=useForm();
  // const [message,setMessage] = useState('');
  //const navigate = useNavigate();

  //  const handleInput=(e)=>{
  //   const {name,value}=e.target;
  //   setFormValue({...formValue,[name]:value});
  //  }

  //  const handleSubmit = async(e)=>{
  //   e.preventDefault();
  //   const allInputvalue={ email:formValue.email,phone:formValue.phone,password:formValue.password}
  //   console.log(allInputvalue);

  //   let res = await fetch("http://localhost:5000/api/adduser",{
  //     method:"POST",
  //     headers:{'content-type':'application/json'},
  //     body:JSON.stringify(allInputvalue)
  //   });
  // }
  //-----------------------------------------------------------------------------------------//
  // const onSubmit=(data)=>{
  //   console.log(data);

  //   const res = axios.post("http://localhost:4000/adduser",data)
  //   .then(response=>{setMessage(response.data)
  //   });
  // }
  //--------------------=============================================-----------------------//

  // if(!message){
  //   setMessage(res.data);
  //   setTimeout(()=>{
  //     navigate('/userlisting')
  //   },2000);
  // }else{
  //   setMessage("Some error Occured");
  // }
  // }

  return (
    <>
    
    {/* <img className="back-img" src={Neom}></img> */}
   
    
    <img className="bg-image" src={Neom}></img>
    
    <div className="area" >
      <div className="imager">
        <img className="m-logo" src={logoBlack} alt="dfg" />
      </div>

      <div
        className="pargh"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p> Enter your Login name and Password </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            // onChange={handleInput}
            placeholder="Email"
            className="Nm-Email"
            name="email"
            type="text"
            // {...register("username",{required:true})}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.email && touched.email ? (
        <p className="error-para" >{errors.email}</p>) : null }
        {/* <div>
          <input
            placeholder="Phone Number"
            // value={formValue.phone}
            // onChange={handleInput}
            className="Phn"
            name="phone"
            type="text"
            // {...register("password",{required:true})}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div> */}
        {/* {errors.phone && touched.phone ? (
        <p className="error-para">{errors.phone}</p>) : null } */}
        <div>
          <input
            placeholder="Password"
            // value={formValue.password}
            // onChange={handleInput}
            className="Nm-Password"
            name="password"
            type="password"
            // {...register("phonenumber",{required:true})}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.password && touched.password ? (
        <p className="error-para">{errors.password}</p>) : null }
        {/* <div>
          <input
            placeholder="Confirm Password"
            // value={formValue.password}
            // onChange={handleInput}
            className="C-Password"
            name="confirmpassword"
            type="password"
            // {...register("phonenumber",{required:true})}
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div> */}
        {/* {errors.confirmpassword && touched.confirmpassword ? (
        <p className="error-para">{errors.confirmpassword}</p>) : null } */}
        <div className="link">
          <Link
            style={{ fontFamily: "BrownLight", fontSize: "1rem" }}
            to="/SignUp"
            
          >
            Create a New Account
          </Link>
        </div>

        <div>
          <button type="submit" className="bnton">
            CREATE
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
