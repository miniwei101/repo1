import React from "react";
import Data from "./Data";

const About =()=>{
    const [pattern,setPattern]=React.useState(Data);
    const ele=pattern.map(d=>(
        <div key={d.color.toString()} style={{backgroundColor:d.color}} className={'theDiv'}> 
            {d.id}{d.color}
        </div>
    ));
    return(
        <div>
            <h1>About</h1>
            {ele}
        </div>
    )
}

export default About;