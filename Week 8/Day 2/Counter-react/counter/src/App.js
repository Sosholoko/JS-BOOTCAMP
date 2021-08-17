//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

// const App = (props)=>{

// }


class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Sasha',
      robots: [],
      counter: 0,
      value: ''
    }
  }

changeName = () =>{
  this.setState({name: 'Mike'});
}
plusOne = () =>{
  this.setState({counter: this.state.counter + 1});
}
minusOne = (value) =>{
  this.setState({counter: this.state.counter - value});
}
valueChange =(e) =>{
  this.setState({value: e.target.value})
}
  render(){
    const {name, counter, value} = this.state
    return (
      <div className="App">
        <h1>Hello {name}</h1>
        <button onClick = {this.changeName}>Change Name</button>
        
        <h2>Counter</h2>
        <button onClick = {this.plusOne}>Add One</button>
        {/* when passing value to function, it needs a callback to avoid infinite loops */}
        <button onClick = {()=>this.minusOne(5)}>Minus 5</button>
        {counter}<br></br><br></br>
        
        <input type='text' onChange={this.valueChange}></input><br></br>
        <div>
          {value}
        </div>
      </div>
    );
  }
}

export default App;
