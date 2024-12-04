import React from "react";
import logo from '../images/logo.png'
import './Nav.css'

function Navbar () {
    return(
        <>
          <nav>
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Reservation</a>
                <a href="#">Order online</a>
                <a href="#">Login</a>
            </div>
          </nav>
        </>
    )
}

export default Navbar;