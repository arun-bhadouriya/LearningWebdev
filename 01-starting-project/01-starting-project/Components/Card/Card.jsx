import './Card.css'
function Card(props){
    // image
    // name 
    // contnet
    const { src,name,content } = props
    return <div className="Card">
        <img src={src} className='card-img'/>
        <h3>{name}</h3>
        <p>{content}</p>
    </div>
}
export default Card;