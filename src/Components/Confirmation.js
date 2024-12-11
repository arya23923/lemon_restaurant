import React from "react";
import Navbar from './Nav'
import './Confirmation.css'
import Footer from './Footer'
import tick from '../images/confirmation.png'

const Confirmation = () => {
    return(
        <div className="confirmation">
            <Navbar />
            <div className="confirmation-content">
                <img src={tick} alt="tick"/>
                <h1>Your reservation has been confirmed</h1>
                <h2>You will receive an email with all the details</h2>
            </div>
            <Footer />
        </div>
    )
}

export default Confirmation;