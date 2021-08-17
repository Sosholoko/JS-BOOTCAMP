import Card from './Card'

const CardsList = (props) => {
    const {robots} = props;
    return (
        <>
        {
        robots.map((item,i)=>{
            return <Card robotinfo = {item} />
        })
        }
        </>
    )
}
export default CardsList;
