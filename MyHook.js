import { useState } from "react";
import React from "react";

const MyHook=()=>{
    const [qty,setQty]=useState(0);
    return(
        <div style={{width:'25vw'}}>
            {/* <h3>{this.props.subject}</h3> */}
            <h3>this.props.subject</h3>
            <p>{qty<0?0:qty}</p>  
            <button onClick={()=>setQty(qty+1)}>增加</button>
            <button onClick={()=>setQty(qty-1)}>減少</button>
        </div>
    );
}
export default MyHook;