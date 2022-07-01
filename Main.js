import React from "react";
import Fruit from "./Fruit";
import MyHook from "./MyHook";
import MyStateAndProps from "./MyStateAndProps";
import MyForm from "./MyForm";



const Main=()=>{
    const mystyle={
        // background-image:image('./')
        // backgroundImage:image('./images/logo.svg')
    };
    const fruit=["阿水","阿果","阿仔"];
    const d=new Date();
    const mon=d.getMonth()+1;
    return(
        <main style={mystyle}>
            {mon}月{fruit.map((e)=>(<li>{e}</li>))}
           <hr/>
           <p>000000000000000000000000000000000000</p>
           <div style={{display:'inline-flex'}}>
                <MyHook subject='戶克'/>
                <MyStateAndProps subject='Props And State'/>
                <div>
                    <Fruit
                    fruImg={require('../images/pineapple.jpg')}
                    word="00000"
                    price="000000"
                    stars="00000"
                    />
                    <Fruit
                    fruImg={require('../images/pineapple.jpg')}
                    word="00000"
                    price="000000"
                    stars="00000"
                    />
                    <Fruit
                    fruImg={require('../images/pineapple.jpg')}
                    word="00000"
                    price="000000"
                    stars="00000"
                    />
                </div>
                <div>
                    {/* <Supplier
                    id="11111"
                    name="1111"
                    address="1111"
                    tel="1111"/> */}
                </div>
           </div>
           <MyForm/>
           
        </main>
        
    );
}

export default Main;