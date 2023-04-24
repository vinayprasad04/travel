import React,{useState} from 'react'
import './Details.css'
import { Link } from 'react-router-dom';
import axios from "axios";

export default function EmailID() {
  const [userInput, setUserInput] = useState({});

  const handleInputchange = (e,item)=>{
    setUserInput({...userInput,[item]:e.target.value })
    }
  
    const handleClick = event =>{
      event.preventDefault();
      console.log(userInput)
  } 
  const formSubmit = () => {

  let formData = new FormData();
  // formData.append("name", values.name);
  // formData.append("email", values.email);
 
  const data = axios.post("http://localhost:5000/api/v1", formData);
    
  };
  

  return (
    <div>
        <form >
  
              <div >
                  
                  <label className='lb1' style={{fontFamily: "BrownLight", fontSize: "1.2rem"}}>Enter your Login name and Password</label>
                  <input placeholder="Login" className='Email' name="name"  type='text' autocomplete="off" onChange={ (e)=> handleInputchange (e, "name")}/>
              </div>

              <div>
                
                  <input placeholder="Password" className='password' name="password" type='password' autocomplete="off" onChange={ (e)=> handleInputchange (e, "password")}/>
              </div>
              
              <div class="link">
              <Link  style={{fontFamily: "BrownLight", fontSize: "1rem"}} to="https://www.w3schools.com/howto/howto_css_animate_buttons.asp">Create a New Account</Link>
              </div>
              
              
              <div>
              <button type="submit" class="button" onClick={handleClick}>LOGIN</button>
              </div>

</form>

              
</div>
  )
}