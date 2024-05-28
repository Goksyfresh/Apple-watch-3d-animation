import React from "react";
import Logo from '../assets/logo.svg'
import searchImg from '../assets/search.svg'
import bagImg from '../assets/bag.svg'

function Navbar(){
    return(
        <div>
             <nav>
            <div className="nav--logo">
                <img src={Logo} alt="logo"/>
            </div>
            <ul className="nav--list">
                <li>Explore</li>
                <li>Collection</li>
                <li>Creators</li>
            </ul>
            <div className="nav--img">
                <img src={searchImg} alt="search"/>
                <img src={bagImg} alt="cart"/>
                
            </div>
        </nav>
        <hr/>
        </div>
       
        
    )
}

export default Navbar;
