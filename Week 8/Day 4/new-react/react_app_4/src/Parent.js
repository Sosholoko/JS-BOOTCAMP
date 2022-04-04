import React from 'react';
import Child from './Child';
import Counter from './Counter';

class Parent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Counter />
            </div>
        )
    }
}

export default Parent;