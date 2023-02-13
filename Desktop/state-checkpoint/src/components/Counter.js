import React from "react";

class Counter extends React.Component {
    constructor() {
        console.log("initialisation");
        super();
        this.state={counter:0}
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
    render() { 
        return (
            <div>
            <h3>Counter App</h3>
            <button onClick={()=>this.setState({counter:this.state.counter+1})}>+</button>
            <span>{this.state.counter}</span>
            <button onClick={()=>this.setState({counter:this.state.counter>0?this.state.counter-1:0})}>-</button>
            </div>
          );
    }
}
 
export default Counter;