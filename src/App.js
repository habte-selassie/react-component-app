import React , { Component } from 'react';
import Navbar from './components/navbar'
import Counters from "./components/counters"
import './App.css';

class App extends Component{

// constructor(props){
//   super(props)
//   console.log('App-Constructor');
// }

// componentDidMount(){
//   ///////// ajax call 
//   console.log('App-Mounted');
// }

  state = {
    counters:[
        {id:1,value:6},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
  };
 
handleIncrement = counter=>{
 const counters = [...this.state.counters]
 const index = counters.indexOf(counter)
  counters[index]={...counter}
 counters[index].value++;
 this.setState({ counters })
}


handleDecrement = counter=>{
  const counters = [...this.state.counters]
  const index = counters.indexOf(counter)
   counters[index]={...counter}
  counters[index].value--;
  this.setState({ counters })
 }
  handleDelete = (counterId)=>{
   const  counters = this.state.counters.filter(c=>
    c.id !== counterId)
    this.setState({counters})
  }

handleReset = () =>{
    const counters = this.state.counters.map(c=>{
        c.value =0;
        return c
    })
    this.setState({counters})
} 


  render(){
   
    return(
      <div>
    <Navbar  totalCounters={this.state.counters.filter(c=>c.value > 0).length}/>

    <main className="container">
    <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}

    />
     </main>

      </div>
   
    );
  }
}

export default App;
