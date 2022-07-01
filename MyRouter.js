import React from "react";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AAA from "./AAA";
import Product from "./Product";
import About from "./About";
import Hi from "./Hi";
import YourHook from "./YourHook";

const MyRouter=(props)=>{
    return(
        <BrowserRouter>
        <nav className="theNav">
            <Link to="/">Home</Link>
            <Link to="/AAA">AAAA</Link>
            <Link to={`/Product/${props.fruit}`}>Product</Link>
            <Link to="/About">About</Link>
            <Link to="/YourHook">YourHook</Link>
            <Link to="*">Hi</Link>
        </nav>
        <p>{props.fruit}</p>

        <Header/>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/AAA" element={<AAA/>}></Route>
            <Route path="/Product/:fruitName" element={<Product/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/YourHook" element={<YourHook/>}></Route>
            <Route path="*" element={<Hi/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default MyRouter;