import React from "react";
import header_img from '../images/top-view-salad-with-couscous-veggies.png'
import './Header.css'

function Header() {
    return(
        <>
            <header>
                <div className="left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>One of Chicago’s finest restaurant serving scrumptious and appetizing meals. We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist. Hope you enjoy our service and leave us a good rating! </p>
                    <button>Reserve Table</button>
                </div>
                <div className="right">
                    <img src={header_img} />
                </div>
            </header>
        </>
    )
}

export default Header;