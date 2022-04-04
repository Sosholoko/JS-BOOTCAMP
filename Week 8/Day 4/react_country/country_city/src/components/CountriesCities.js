import React from 'react';
import { render } from 'react-dom';

class CountriesCities extends React.Component{
    constructor(){
        super();
        this.state={
            countries: []
        }
    }

    componentDidMount(){
        fetch('https://localhost:4000/getCity')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            this.setState({countries:data})
        })
        .catch(e=>{
            console.log(e)
        })
    }


    render(){
        console.log(this.state.countries);
        const {countries} = this.state
    return(
        <>
            <select>
                {
                    countries.map((item, i) =>{
                        return <option value= {item.countries}>{item.countries}</option>
                    })
                }
            </select>
        </>
    )
}
}



export default CountriesCities;