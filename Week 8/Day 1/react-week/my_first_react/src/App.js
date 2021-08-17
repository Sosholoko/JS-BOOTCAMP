//import logo from './logo.svg';
import CardsList from './components/CardsList'
import './App.css';
import React from 'react';
import SearchBox from './components/SearchBox'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      search: ''
    }
    this.inputText = ''
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())
  .then(data =>{
    // console.log(data);
    this.setState({robots: data })
  })
  .catch(e=>{
    console.log(e);
  })
}

handleChange = (e) =>{
  // const {search} = this.state;
  //this.setState({search: e.target.value})
  this.inputText = e.target.value;
}

handleChange2 = () =>{
  this.setState({search: this.inputText })
}

render(){
  const {robots, search} = this.state;
  console.log(search);

  const filterRobots = robots.filter(item=>{
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <><br></br>
      <div className='tc'>
      <SearchBox onInput= {this.handleChange} onButton ={this.handleChange2} />
      <CardsList robots = {filterRobots} />
      </div>
    </>
  );
}

}

export default App;


