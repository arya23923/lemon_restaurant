import React from 'react'

import logo from './images/logo.png'

function Navbar () {
    return(
        <nav>
            <img src={logo} alt='logo' />
            <Link to='#'>Home</Link>
            <Link to='#'>About</Link>
            <Link to='#'>Menu</Link>
            <Link to='#'>Reservation</Link>
            <Link to='#'>Order online</Link>
            <Link to='#'>Login</Link>
        </nav>
    )
}