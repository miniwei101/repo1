import React from "react";
import {useNavigate} from 'react-router-dom';

const AAA =()=>{
const Navga=useNavigate();
    const [fruit,setFruit]=React.useState('');
    return(
        <div>
            <h1>AAA</h1>
            <input type="text" onChange={(e)=>setFruit(e.target.value)}/>
            <button onClick={()=>Navga(`/Product/${fruit}`)}>{fruit}gratis yo</button>
        </div>
    )
}

export default AAA;