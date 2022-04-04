import React from 'react'

function Nav(props) {
    return (
        <div>
            <button onClick={()=>props.goToPage('home')}>Home </button>
            <button onClick={()=>props.goToPage('about')}>About</button>
            <button onClick={()=>props.goToPage('contact')}>Contact</button>
        </div>
    )
}

export default Nav;
