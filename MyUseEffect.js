import { useEffect,useState } from "react";
import React from "react";


const MyUseEffect =()=>{
    const [count,setCount]=useState(0);
    const [calc,setCalc]=useState(0);

    //setCalc(count*2);
    // useEffect(callBack,[array])有array不會重複執行
    useEffect(()=>{setCalc(count*2)},[count]);
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <p>{calc}</p>
            
        </div>
    )
}

export default MyUseEffect;