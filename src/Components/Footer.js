import React from "react";
import './Footer.css'
import logo from '../images/logo.png'

function Footer () {
    return(
        <footer>
            <img src={logo} alt="logo" />
            <div className="service">
                <h1>Our services</h1>
                <a href="#">Pricing</a>
                <a href="#">Tracking</a>
                <a href="#">Report a bug</a>
                <a href="#">Terms of services</a>
            </div>
            <div className="company">
                <h1>Our company</h1>
                <a href="#">Reporting</a>
                <a href="#">Getting in touch</a>
                <a href="#">Management</a>
            </div>
            <div className="address">
                <h1>Address</h1>
                <p>121 King Street, VIC3000, Chicago, US 888-123-42278 littlelemon@gmail.com</p>
            </div>
        </footer>
    )
}

export default Footer;