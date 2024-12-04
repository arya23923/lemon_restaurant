import React from "react";
import header_img from '../images/top-view-salad-with-couscous-veggies.png'
import './Header.css'

function Header() {
    return(
        <>
            <div className="left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>One of Chicago’s finest and oldest restaurant serving scrumptious and appetizing meals to it’s customers since 1967. Hope you enjoy our service and leave us a good rating! </p>
            </div>
            <div className="right">
                <img src={header_img} />
            </div>
        </>
    )
}

export default Header;