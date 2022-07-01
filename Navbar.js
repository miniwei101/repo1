import React from "react";
import logo from "../images/logo.svg";

const Navbar=()=>{
     return(
        <nav>
            <ul>
                <li><img src={logo}  className="nav-img"/></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Hi</a></li>
                <li><a href="#">AAA</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;