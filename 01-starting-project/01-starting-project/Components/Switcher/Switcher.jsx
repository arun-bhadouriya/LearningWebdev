import { useState } from "react";
function Buttons() {}
function Switcher() {
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

  const content = {
    Components: ["a", "b", "c"],
    JSX: ["d", "e", "f"],
    Props: ["g", "h", "i"],
    State: ["j", "k", "l"],
  };
  const EXAMPLES = {
    components: {
      title: "Components",
      description:
        "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
      code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    jsx: {
      title: "JSX",
      description:
        "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
      code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    props: {
      title: "Props",
      description:
        "Components accept arbitrary inputs called props. They are like function arguments.",
      code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    state: {
      title: "State",
      description:
        "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
      code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
  };
  const data = [
    ["Components", "a"],
    ["JSX", "b"],
    ["Props", "c"],
    ["State", "d"],
  ];
  const [currState, setState] = useState(EXAMPLES.components.title);
  return (
    <div id="examples">
      <h2>Examples</h2>
      {/* <Buttons /> */}
      <menu>
        {/* {console.log("curust",typeof currState)}
                {console.log("Arun",Object.keys(data),data)} */}

        {/* {data.map((item, idx) => (
          <button
            className={currState1 == idx ? "active" : ""}
            onClick={() => setState1(idx)}
          >
            {item[0]}
          </button>
        ))} */}
        {Object.values(EXAMPLES).map((key, indx) => {
          return (
            <button
              className={currState == key.title ? "active" : ""}
              key={indx}
              onClick={() => setState(key.title)}
            >
              {key.title}
            </button>
          );
        })}
      </menu>
      {/* on basis of thes buttons clicked displayed we have to create a ul for that current item */}
      <div id="tab-content">
        {/* {data[currState1].map((item, idx) => {
          console.log(item, idx);
          return idx == 0 ? (
            <h3>{data[currState1][0]}</h3>
          ) : (
            <p key={item}>{item}</p>
          );
        })} */}
        <h3>{Object.values(EXAMPLES[currState.toLowerCase()])[0]}</h3>
        <p>{Object.values(EXAMPLES[currState.toLowerCase()])[1]}</p>
        <pre>
          <code>{Object.values(EXAMPLES[currState.toLowerCase()])[2]}</code>
        </pre>
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
  );
}

export default Switcher;
