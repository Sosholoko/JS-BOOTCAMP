const Field2 = (props)=>{
    const {handleSname, sname} = props
    return(
        <div>
            <input type="text" placeholder='Name 2' onChange={handleSname} value={sname}></input>{sname}<br/>
        </div>
    )
}
export default Field2