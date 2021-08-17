const Res= (props) => {
    const {results} = props
    return(
        <div>
            Results:
            <p> {results.fname} & {results.sname}</p>
            <p>Percentage : {results.percentage} %</p>
            <p>Results: {results.result}</p>
        </div>
    )
}
export default Res