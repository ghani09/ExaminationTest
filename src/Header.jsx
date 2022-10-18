import React from 'react';
import logo from '../src/image/logo.png';
import { NavLink } from 'react-router-dom';

const Header =()=>{

    return(
        <header>
        
        <figure>
        <img className="logo" src={logo} alt="logo" />
        </figure>
        <div className="title">
        <h1>E-Test</h1>
        </div>
        
    
        <nav className="navbar">
        <ul>
        <NavLink to='/' >  <li>Home</li>   </NavLink>
        <li>About us</li>
        <NavLink to='/register' >  <li>Signup</li>   </NavLink>
        <NavLink to='/log'> <li>Login</li> </NavLink>
       
        </ul>
        </nav>
        
        </header>

    )
}

export default Header;