//import logo from './logo.svg';
import React from 'react';
//import { render } from 'react-dom';
import {connect} from 'react-redux';
import './App.css';
import { changePropOne } from './redux/actions';
import { changePropTwo } from './redux/actions';
import Child from './components/Child';


class App extends React.Component{
  // constructor(){
  //   super();
  //   // this.state ={
  //   //   // prop_1: 'text one',
  //   //   // prop_2: 'text two'
  //   // }
  // }

  // handleChange = (e) =>{
  //   this.setState({prop_1 : e.target.value})
  // }

    render(){
      return (
      <div className="App">
        <h1>Redux Simple Exercise</h1>
        <p>Here's the first property: {this.props.prop_1}</p>
        <p>Here's the second property: {this.props.prop_2}</p>
        <label>Change the first property</label><br></br>
        <input type='text' onChange={this.props.handleChange}></input><br></br>
        <label>Change the second property</label><br></br>
        <input type='text' onChange={this.props.handleChangeTwo}></input><br></br>
        <h1>Child</h1><br></br>

        <Child />
      </div>
      )
  }
}
const mapStateToProps = (state) =>{
  return{
    prop_1: state.prop_1,
    prop_2: state.prop_2
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    handleChange: (event) => dispatch(changePropOne(event.target.value)),
    handleChangeTwo: (event) => dispatch(changePropTwo(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
