const SearchBox = (props)=>{
    return(
        <div className='pa2'>
            <input type='text' placeholder='Search Robots' 
            className='pa3 ba bg--green bg-lightest-blue' onChange={props.onInput}></input>
            <button className='pa3 ba bg--green bg-lightest-blue' onClick={props.onButton}>Search</button>
        </div>
    )
}
export default SearchBox