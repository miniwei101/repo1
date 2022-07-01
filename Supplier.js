import { Component } from "react";
import React from "react";

// const Supplier=(p)=>{
//     return(
//         <div>
//             <span>{p.id}</span>
//             <span>{p.name}</span>
//             <span>{p.address}</span>
//             <span>{p.tel}</span>
//         </div>
//     )
// }

export default function Supplier({id,name,address,tel}){
    return(
        <div>
            <span>{id}</span>
            <span>{name}</span>
            <span>{address}</span>
            <span>{tel}</span>
        </div>
    )
}