//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Field from './components/Fields';
import Field2 from './components/Fields2';
import Button from './components/Button';
import Res from './components/Res';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fname: '',
      sname: '',
      res: {}
    }
  }

  handleFname =(e)=>{
    // let {fname} = this.state
    this.setState({fname: e.target.value})
  }
  handleSname =(e)=>{
    // let {sname} = this.state
    this.setState({sname: e.target.value})
  }

  handleClick=()=>{
    const {fname, sname}= this.state;
      fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "114a494293mshdc5b70a3839a102p1bc8f4jsn4e66ab18fb94",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data=>{
      console.log(data);
      this.setState({res:data})
    })
    .catch(err => {
      console.error(err);
    });
  }

  render(){
    return (
    <div className="App">
      <h1>Love Calculator</h1><br></br>
      <Field handleFname = {this.handleFname} fname = {this.state.fname} />
      <Field2 handleSname= {this.handleSname} sname = {this.state.sname} />
      <Button handleClick={this.handleClick} /><br></br>
      <Res results={this.state.res} />
    </div>
  );
  }
  
}

export default App;
