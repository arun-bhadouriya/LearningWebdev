import './Card.css'
function Card(props){
    const { src,name,content } = props
    return <div className="Card">
        <img src={src} className='card-img'/>
        <h3>{name}</h3>
        <p>{content}</p>
    </div>
}
// other method using destructuring
function Card1({src, name, content}){
    return <div className="Card">
        <img src={src} className='card-img'/>
        <h3>{name}</h3>
        <p>{content}</p>
    </div>
}
export default Card;