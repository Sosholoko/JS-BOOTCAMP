//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './Nav';
import { render } from 'react-dom';
import React from 'react';
//import CountriesCities from './components/CountriesCities';
import {Switch, Route} from 'react-router-dom';

//import CountriesCities from './components/CountriesCities'

const App = () =>{
  return(
    <>
    <div>
      <Nav/>
      <Switch>
          <Route path='/' exact children={<Home/>}></Route>
          <Route path='/about' exact children={<About/>}></Route>
          <Route path='/contact' exact children={<Contact/>}></Route>
      </Switch>
      
    </div>
    </>
  )
}


export default App;
