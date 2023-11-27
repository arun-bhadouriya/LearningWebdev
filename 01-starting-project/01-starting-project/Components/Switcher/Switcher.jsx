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
    // const [currState1, setState1] = useState(0)
    const content = {
        "Components":["a","b","c"],
        "JSX":["d","e","f"],
        "Props":["g","h","i"],
        "State":["j","k","l"]
    }
    const data =[
        ["Components","a"],
        ["JSX","b"],
        ["Props","c"],
        ["State","d"]
    ]
    return (
        <div id="examples">
            <h2>Examples</h2>
            {/* <Buttons /> */}
            <menu>
                {/* {console.log("curust",typeof currState)}
                {console.log("Arun",Object.keys(data),data)} */}
                
                {data.map((item,idx)=> 
                    <button className={currState1==idx?"active":""} onClick={()=>setState1(idx)}>
                        {item[0]}
                    </button> )}
            </menu>
            {/* on basis of thes buttons clicked displayed we have to create a ul for that current item */}
            <div id="tab-content">
                
                {data[currState1].map((item,idx)=>{
                    console.log(item,idx)
                    return idx==0?<h3>{data[currState1][0]}</h3>:<p key={item}>{item}</p>
                    }                    
                )}
            </div>
            {/* <menu>
                {console.log("curust",typeof currState)}
                {Object.keys(content).map((k,i)=> <button {...currState==k?"active":""} onClick={()=>setState(k)} key={i}>{k}</button> )}
            </menu> */}
            {/* on basis of thes buttons clicked displayed we have to create a ul for that current item */}
            {/* <div id="tab-content">
                <h3>{currState}</h3>
                {content[currState].map((item)=><p key={item}>{item}</p>)}
            </div> */}
        </div>
    )
}

export default Switcher;