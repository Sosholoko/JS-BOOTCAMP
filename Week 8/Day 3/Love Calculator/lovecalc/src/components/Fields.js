
const Field = (props)=>{
    const {handleFname, fname} = props
    return(
        <div>
            <input type="text" placeholder='Name 1' onChange={handleFname} value={fname}></input>{fname}<br/>
        </div>
    )
}
export default Field