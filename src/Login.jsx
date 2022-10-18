import React from "react";
import {NavLink} from 'react-router-dom';

const Login=() =>{


    return(
        <div className="bodyform">
        <div  className="signupform">
         <div className="formcaption">
         <h2>Login</h2>
         </div>
         <form>
         
         <section className="sectwo log">
         <label for ="email">Email Adress</label>
         <input type="email" name="email"  placeholder='Email' required/>
         </section>
       
         <section className="sectwo">
         <label for ="password">Password</label>
         <input type="password" name="password"  required/>
         </section>
        
         <button type="submit">Login</button>
         </form>
            <p className="qa1"><span>New to E-Test</span></p>
            <NavLink to='/register' className="btn">  Create your Account  </NavLink>
         
         </div>
         </div>
       


    )
}

export default Login;