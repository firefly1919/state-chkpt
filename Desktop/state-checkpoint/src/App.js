import React from "react";
import Counter from "./components/Counter";

class App extends React.Component {
  constructor() {
    super();
    this.state={isShow:true}
  }
  ToggleVisibility=()=>{
    this.setState({isShow:!this.state.isShow})
  }
  render() { 
    console.log("rendering");
    return ( 
      <div>
      <h1>Counter</h1>
      <button onClick={this.ToggleVisibility}>Show Counter</button>
       {this.state.isShow && <Counter/>}
      </div>
     );
  }
}
 
export default App;

