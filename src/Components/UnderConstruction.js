import React from "react";
import './UnderConstruction.css'
import Navbar from './Nav'
import work from '../images/work-progress.png'

const UnderConstruction = () => {
    return(
        <div className="under-construction">
            <Navbar />
            <div className="construction-center">
                <img src={work} alt="work-progress" />
                <p>Page under construction</p>
            </div>
        </div>
    )
}

export default UnderConstruction;
