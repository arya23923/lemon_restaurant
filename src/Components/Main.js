import React from "react";
import './Main.css';
import taco from '../images/mexican-tacos-with-beef-tomato-sauce-salsa.png';
import cheesecake from '../images/vecteezy_cheesecake-with_25066829.png';
import pizza from '../images/vecteezy_pizza-side-view-with_24589239.png';
import scooty from '../images/motorcycle.png';
import mel from '../images/test1.jpg';
import jayce from '../images/test2.jpg';
import caitlyn from '../images/test3.jpg';
import violet from '../images/test4.jpg';
import foodbowl from '../images/vecteezy_ai-generated-pork-teriyaki-japanese-food-on-a-transparent_36512714.png'

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
                    <p>enjoy the goodness of delicious tacos mixed with the richness of vegetables.</p>
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
            <div className="testimonial">
                <h1>Testimonials</h1>
                <div className="cards">
                    <div className="card">
                        <img src={mel} alt="test1"/>
                        <p>“The food was delicious and service unmatched”</p>
                        <div className="star">
                            <p>⭐</p>
                            <p>⭐</p>
                            <p>⭐</p>
                            <p>⭐</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={jayce} alt="test2"/>
                        <p>“The environment mixed with the appetizing food lead to a good evening at Little Lemons”</p>
                        <div className="star">
                            <p>⭐</p>
                            <p>⭐</p>
                            <p>⭐</p>
                            <p>⭐</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={caitlyn} alt="test3"/>
                        <p>“I had a wonderful evening at this restaurant and the service is impeccable</p>
                        <div className="star">
                            <p>⭐</p>
                            <p>⭐</p>
                            <p>⭐</p>
                            <p>⭐</p>
                            <p>⭐</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={violet} alt="test4"/>
                        <p>“No amount of praise can account for the wonderful food”</p>
                        <div className="star">
                            <p>⭐</p>
                            <p>⭐</p>
                            <p>⭐</p>
                            <p>⭐</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="left">
                    <h1>Little Lemon</h1>
                    <p>Little Lemon is an establishment that was founded in 1967 by Mario and Antonio Schimmenti. They wished to establish a restaurant that their late father wished for and spread happiness by their shared interest of food. </p>
                </div>
                <div className="right">
                    <img src={foodbowl} alt="food bowl" />
                </div>
            </div>
            {/* <div>
                <Booking availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
            </div> */}
        </main>
    )
};

export default Main;