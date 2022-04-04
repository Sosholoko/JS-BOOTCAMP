import React from 'react'
import {connect} from 'react-redux';
import { changePropOne } from '../redux/actions';

function Child(props) {
    const {pOne, pTwo, changeOne}= props;
    return (
        <div>
            <p>property_one: {pOne}</p>
            <p>property_two: {pTwo}</p>
            <input type='text' onChange={changeOne}></input>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        pOne: state.prop_1,
        pTwo: state.prop_2
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeOne: (e)=> dispatch(changePropOne(e.target.value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Child);
