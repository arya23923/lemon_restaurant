import React from "react";
import './Main.css';
import taco from '../images/mexican-tacos-with-beef-tomato-sauce-salsa.png';
import cheesecake from '../images/vecteezy_cheesecake-with_25066829.png';
import pizza from '../images/vecteezy_pizza-side-view-with_24589239.png';
import scooty from '../images/motorcycle.png';

function Main () {
    return(
        <main>
            <div className="top">
                <h1>Specials</h1>
                <button>Online menu</button>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={taco} alt="taco"/>
                    <div className="price">
                        <h2>Mexican tacos</h2>
                        <p>Rs. 150</p>
                    </div>
                    <p>enjoy the goodness of delicious tacos mixed with the goodness of vegetables.</p>
                    <div className="delivery">
                        <p>Order a delivery</p>
                        <img src={scooty} alt="scooty" />
                    </div>
                </div>
                <div className="card">
                    <img src={cheesecake} alt="cheesecake"/>
                    <div className="price">
                        <h2>Lemon cheesecake</h2>
                        <p>Rs. 200</p>
                    </div>
                    <p>Finish off your meal with a delicious lemon cheesecake made from fresh yogurt and full of creamy richness</p>
                    <div className="delivery">
                        <p>Order a delivery</p>
                        <img src={scooty} alt="scooty" />
                    </div>
                </div>
                <div className="card">
                    <img src={pizza} alt="pizza"/>
                    <div className="price">
                        <h2>Deep dish pizza</h2>
                        <p>Rs. 350</p>
                    </div>
                    <p>Composed of a thick crust, zesty tomato sauce, personalized toppings and a behemoth layer of cheese</p>
                    <div className="delivery">
                        <p>Order a delivery</p>
                        <img src={scooty} alt="scooty" />
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Main;