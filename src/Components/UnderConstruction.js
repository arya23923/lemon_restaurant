import React from "react";
import './UnderConstruction.css'
import Navbar from './Nav'
import work from '../images/work-progress.png'
import Footer from './Footer'

const UnderConstruction = () => {
    return(
        <div className="under-construction">
            <Navbar />
            <div className="construction-center">
                <img src={work} alt="work-progress" />
                <p>Page under construction</p>
            </div>
            <Footer />
        </div>
    )
}

export default UnderConstruction;
