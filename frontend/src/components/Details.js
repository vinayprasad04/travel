import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom';
import "./Details.css";
import Axios from 'axios'



export default function EmailID() {
const initialValues = {email:"",password: ""} ;
const [formValues,setFromValues] = useState(initialValues);
const [formErrors,setFromErrors] = useState({});
const [isSubmit,setIsSubmit] = useState(false);


const handleChange = (e) => {
   
    const {name,value} = e.target;
    setFromValues({...formValues,[name]:value});
    
}

const handleSubmit = (e) =>{
      e.preventDefault();
    
      setFromErrors(validate(formValues));
      setIsSubmit(true);
      
};
useEffect(()=>{
 
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues);
  }

},[formErrors]);


const validate = (value) =>{
      const errors = {};
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(!value.email) {
        errors.email = "Email is required"
      }
      else if(!regex.test(value.email)){
        errors.email = "This is not a valid email"
      }
      if(!value.password) {
        errors.password = "Password is required"
      }else if(value.password.length < 4){
        errors.password = "Password length must be more than 4 characters"
      }
      else if(value.password.length > 10){
        errors.password = "Password length must be less than 10 characters"
      }
      return errors;
}
 
  

  
    
   

  return (
    <div>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="Success">signed In SuccessFully"</div>):(<div className="Success">signed In not SuccessFully"</div>)} */}

      <form onSubmit={handleSubmit}>
        <div>
          <label
            className="lb1"
            style={{ fontFamily: "BrownLight", fontSize: "1.2rem" }}
          >
            Enter your Login name and Password
          </label>
          <input
            name="email"
            placeholder="Login"
            value={formValues.email}
            className="Email"
            
            type="text"
            onChange={handleChange}
          />
         
        </div>
        <p className="errors">{formErrors.email}</p>
        <div>
          <input
            name="password"
            placeholder="Password"
            value={formValues.password}
            className="password"
            
            type="password"
            onChange={handleChange}
          />
        </div>
        <p className="errors">{formErrors.password}</p>
        <div className="link">
          <Link
            style={{ fontFamily: "BrownLight", fontSize: "1rem" }}
            to="/SignUp"
            
          >
            Create a New Account
          </Link>
        </div>

        <div>
          <button type="submit" className="button" >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}
