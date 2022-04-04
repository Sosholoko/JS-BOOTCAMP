//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import { render } from 'react-dom';
import React from 'react';
import CountriesCities from './components/CountriesCities';

//import CountriesCities from './components/CountriesCities'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      page: 'home'
    }
  }

  goToPage = (val) =>{
    this.setState({page:val})
  }

    render(){

      switch (this.state.page){
        case 'home':
          return(
            <>
              <Nav goToPage={this.goToPage}/>
              <Home/>
            </>
          )
          
        case 'about':
          return(
            <>
              <Nav goToPage={this.goToPage}/>
              <About/>
              <CountriesCities/>
            </>
          )
        case 'contact':
          return(
            <>
              <Nav goToPage={this.goToPage}/>
              <Contact/>
            </>
          )
          default:
            return(
              <Nav goToPage={this.goToPage}/>
            )
      }



      // return (
      //   <>
      //   <Nav/>
      //   <Home/>
      //   <About/>
      //   <Contact/>
      //   </>
      // )
    }
  }
  


export default App;
