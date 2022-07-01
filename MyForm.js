import React from "react";

const MyForm=()=>{
    const [fruit,setFruit]=React.useState('');
    const [price,setPrice]=React.useState(0);
    const [qty,setQty]=React.useState(0);
    const [total,setTotal]=React.useState(0);
    return(
        <div>
            <input type='text' onChange={(e)=>setFruit(e.target.value)}/>
            <span>{fruit}</span>
            <p></p>
            <p></p><p></p><p></p><p></p><p></p><p></p><p></p>
            <input type='text' onChange={(e)=>setPrice(e.target.value)}/>
            <span>{price}</span>
            <input type='text' onChange={(e)=>setQty(e.target.value)}/>
            <span>{qty}</span>
            <button onClick={()=>setTotal(price*qty)}>OK</button>
            <span>{total}</span>
        </div>
    )
}

export default MyForm;