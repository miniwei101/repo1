import React from "react";
import { Component } from "react";

class Header extends Component{
    render(){
        const mystyle={color:'blue'};
        return(
            
            <header style={mystyle}>
                <h1>this is heeeeeeeeeeader</h1>
            </header>
        )
    }
}

export default Header;