import { Component } from "react";
import React from "react";
import ali from "../images/pineapple.jpg"
import like from "../images/like.svg"
import hati from "../images/heart.svg"
import Supplier from "./Supplier";

const Fruit =(props)=>{
    
        return(
             <div  className="fruit-div" style={{display:'inline-flex'}}>
                 <img src={props.fruImg} className="fruit-img" ></img>
                 <div>
                    <img src={hati} className="fruit-svg"></img>
                    <span>{props.word}</span>
                    <span>{props.star}</span>
                    <img src={like} className="fruit-svg"></img>
                    <span>售價{props.price}</span>
                    <p></p>
                    <Supplier
                        id="11111"
                        name="1111"
                        address="1111"
                        tel="1111"/>
                </div>
             </div>
        );
    
}

export default Fruit;