import React from "react";
import Navbar from './Nav.js'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import { Link } from "react-router-dom";

const Homepage = () => {
    return(
        <>
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default Homepage;