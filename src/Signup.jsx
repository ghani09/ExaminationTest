import React  from 'react';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';

const Signup =() =>{
      const[userData , setUserData] =useState({
        fname: " ",
        lname: " ",
        email: " ",
        number: " ",
        password: " ",
      })
    
    return(
        <div className="bodyform">
       <div  className="signupform">
        <div className="formcaption">
        <h2>Creacte Account</h2>
        </div>
        <form>
        <section className="secone">
        <label for ="fname">First Name
        <input type="text" name="fname"  placeholder='First Name'  required/></label>
        <label for ="lname">Last Name
        <input type="text" name="lname"  placeholder='Last Name' required/></label>
        </section>
        <section className="sectwo">
        <label for ="email">Email</label>
        <input type="email" name="email"  placeholder='Email' required/>
        </section>
        <section className="sectwo">
        <label for ="number">Mobile Number</label>
        <input type="tel" name="number"  placeholder='Mobile Number' required/>
        </section> 
        <section className="sectwo">
        <label for ="password">Password</label>
        <input type="password" name="password"  required/>
        </section>
        <section className="sectwo">
        <label for ="cnfpassword">Renter Password</label>
        <input type="password" name="cnfpassword" required />
        </section>
        <section className="secthree"> <label for ="tc">
        <input type="checkbox" name="tc"  required/>I have read and agree to the <span>Privacy policy</span></label></section>
        <button type="submit">Get Started</button>
        </form>
        <p className="qa">Already have an account? <NavLink to ='/log'>Signin</NavLink>  </p>
        
        </div>
        </div>

    )
}

export  default Signup;