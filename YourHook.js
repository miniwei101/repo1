import React from "react";
import HisUseEffect from "./HisUseEffect";
import MyUseEffect from "./MyUseEffect";
import YourUseEffect from "./YourUseEffect";
//import HisUseEffect from "./HisUseEffect";


const YourHook =()=>{
    //let {fruitName}=useParams();
    return(
        <div>
            <h1>YourHook</h1>
           <MyUseEffect/>
           <YourUseEffect/>
           <HisUseEffect/>
            
        </div>
    )
}

export default YourHook;