import React from "react";
import './Footer.css'
import logo from '../images/footer-img.png'
import { Link } from "react-router-dom";

function Footer () {
    return(
        <footer>
            <img src={logo} alt="logo" />
            <div className="service">
                <h1>Our services</h1>
                <Link to="/Construction">Pricing</Link>
                <Link to="/Construction">Tracking</Link>
                <Link to="/Construction">Report a bug</Link>
                <Link to="/Construction">Terms of services</Link>
            </div>
            <div className="company">
                <h1>Our company</h1>
                <Link to="/Construction">Reporting</Link>
                <Link to="/Construction">Getting in touch</Link>
                <Link to="/Construction">Management</Link>
            </div>
            <div className="address">
                <h1>Address</h1>
                <p>121 King Street, VIC3000, Chicago, US 888-123-42278 littlelemon@gmail.com</p>
            </div>
        </footer>
    )
}

export default Footer;