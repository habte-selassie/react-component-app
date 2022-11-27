import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  

 render() {
  console.log('Counters Get Render');
   return(
     <div>
     <button  onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">
     Reset</button>
       { this.props.counters.map(counter=>
       <Counter key={counter.id} 
       onIncrement={this.props.onIncrement} 
       onDelete={this.props.onDelete}
       onDecrement={this.props.onDecrement}
       counter = {counter}
       />  
       )}
    </div>
    ); 
  }
}

export default Counters;
