import React from "react";
import logo from '../images/logo.png'
import './Nav.css'
import { Link } from "react-router-dom";

function Navbar () {
    return(
        <>
          <nav>
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
            <div className="right">
                <Link to="/">Home</Link>
                <Link to="/Construction">About</Link>
                <Link to="/Construction">Menu</Link>
                <Link to="/bookingPage">Reservation</Link>
                <Link to="/Construction">Order online</Link>
                <Link to="/Construction">Login</Link>
            </div>
          </nav>
        </>
    )
}

export default Navbar;