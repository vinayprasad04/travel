import React from 'react'
// import 'D:/travel/frontend/src/assets/styles/Area.css'
import  './SignUp.css'
import logoBlack from 'D:/travel/frontend/src/assets/img/logoBlack.svg';

export default function SignUp() {
  return (
    <div className='arr'>
    <div className='imager'>
    <img className="image" src={logoBlack} alt='dfg'/>
    </div>
    
    <div className='parar' style={{display: "flex", justifyContent: "center"}}>
    <p >Create a New User Account</p>
    </div>
    <form autoComplete='off'>
        <div>
          
          <input
            placeholder="Email"
            className="N-Email"
            name="name"
            type="text"
          />
         
        </div>

        <div>
          <input
            placeholder="Phone Number"
           
            className="Phn"
            name="Phone Number"
            type="text"
            
          />
        </div>

        <div>
          <input
            placeholder="Password"
           
            className="N-Password"
            name="password"
            type="password"
          />
        </div>
        <div>
          <input
            placeholder="Confirm Password"
           
            className="C-Password"
            name="password"
            type="password"
          
          />
        </div>

        

        <div>
          <button type="submit" className="bnt" >
            CREATE
          </button>
        </div>
      </form>
   
    
    
    

    </div>
  )
}