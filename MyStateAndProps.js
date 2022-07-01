import { Component } from "react";
import React from "react";

class MyStateAndProps extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Apple',
            price:0,
            desc:'12312312312312313212121231'
        }
    }

    render(){
        return(
            <div style={{width:'25vw'}} >
                <h3>{this.props.subject}</h3>
                <p>{this.state.name}每斤{this.state.price}</p>
                <button onClick={()=>this.state.price>=100?this.setState({price:100}):this.setState({price:this.state.price+50})}>按一下增加</button>
                <button onClick={()=>this.state.price<=0?this.setState({price:0}):this.setState({price:this.state.price-10})}>按一下減少</button>
                <You desc={this.state.desc}/>
            </div>
        )
    }
}

class You extends Component{
    render(){
        return(
            <div>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default MyStateAndProps