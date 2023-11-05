import { useState } from "react";
function Buttons(){
    
}
function Switcher(){
    // using state to manage which buttons content to display 
    
    // content.forEach((key,val) => {
    //     console.log(key)
    // });
    // const displayOptions = document.createElement('ul')

    // Object.keys(content).map((key,idx)=>{
    //     const option = document.createElement('li')
    //     option.innerText = key
    //     displayOptions.appendChild(option)
    // })
    const [currState, setState] = useState("Components")
    const content = {
        "Components":["a","b","c"],
        "JSX":["d","e","f"],
        "Props":["g","h","i"],
        "State":["j","k","l"]
    }
    return (
        <div>
            <h1>Examples</h1>
            {/* <Buttons /> */}
            {Object.keys(content).map((k,i)=> <button onClick={()=>setState(k)} key={i}>{k}</button> )}
            {/* on basis of thes buttons clicked displayed we have to create a ul for that current item */}
            {content[currState].map((item)=><li key={item}>{item}</li>)}
        </div>
    )
}

export default Switcher;