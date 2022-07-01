import { useEffect,useState } from "react";
import React from "react";

const HisUseEffect =()=>{
    const [data,setData]=useState({});
    
    useEffect(
        ()=>{
            fetch('https://apiservice.mol.gov.tw/OdService/download/A17000000J-030243-YTl')
            .then(res=>res.json())
            .then(d=>setData(d))
        }
    );

    const ele=data.map(d=>(
        <div  className={'theDiv'}> 
            {d.年度}
        </div>
    ));
    return(
        <div>
            {ele}
            <pre>
                {JSON.stringify(data,null,6)}
            </pre>
            
        </div>
    )
}

export default HisUseEffect;