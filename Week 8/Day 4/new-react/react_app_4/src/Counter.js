import React from 'react';

class Counter extends React.Component{
    constructor(){
        super();
        this.state ={
            counter: 0
        }
    }
    handleClick=()=>{
        this.setState({counter: this.state.counter +1 })
    }
    render(){
        if (this.state.counter === 5){
            throw new Error('Crashed')
        }
        return(
            <div>
                {this.state.counter}<br></br>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default Counter;