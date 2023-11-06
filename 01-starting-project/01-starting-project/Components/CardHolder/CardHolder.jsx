import Card from '../Card/Card.jsx'
import './CardHolder.css'
function CardHolder() {
    const data = [
        {
            "src":"../../src/assets/components.png",
            "name":"Component",
            "content":"The core UI building block - compose the user interface by combining multiple components."
        },
        {
            "src":"../../src/assets/jsx-ui.png",
            "name":"JSX",
            "content":"Return (potentially dynamic) HTML(ish) code to define actual markup that will be rendered."
        },
        {
            "src":"../../src/assets/config.png",
            "name":"Props",
            "content":"Makes components configurable (and therefore reusable) by passing input data to them."
        },
        {
            "src":"../../src/assets/state-mgmt.png",
            "name":"State",
            "content":"React-managed data which, when changed, causes the component to re-render & the UI to update."
        }        
    ]
    return <div id="core-concepts" style={{background:"black"}}>
        <h2 style={{textAlign:"center"}}>Core Concepts</h2>
        <div className='card-holder'>
            {data.map((item)=>{
                return (
                    <Card src={item["src"]} name={item["name"]} content={item["content"]} />    
                ) 
            })}
        </div>
    </div>
}

export default CardHolder