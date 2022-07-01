import React from "react";
import {useParams} from 'react-router-dom';

const Product =()=>{
    let {fruitName}=useParams();
    return(
        <div>
            <h1>Product</h1>
            <p>{fruitName}好吃ㄛ~~</p>
            
        </div>
    )
}

export default Product;