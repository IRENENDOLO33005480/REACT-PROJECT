// JS -javascript xml
let app ={
    title: "Todo Decisions",
    subtitle: "things to focus on",
    Options: ["baseball", "soccer", "tennis", "golf"],
}

let template =(
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.Options.length>0 ? "here are your options": "no options here"}</p>
        
        <ul>
            <li>{app.Options[0]}</li>
            <li>{app.Options[1]}</li>
            <li>{app.Options[2]}</li>
            <li>{app.Options[3]}</li>
        </ul>
    </div>
);
//*let appRoot =document.getElementById("app");
//ReactDOM.render(template, appRoot);

let count = 0;
const addOne = () =>{
    console.log("addOne");
};
const minusOne = () =>{
    console.log("minusOne");
};
const reset = () =>{
    console.log("reset");
};

let templateTwo =(
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

let templateThree =(
    <div>
        <h1>Landscape</h1>
        <img src= "https://www.bing.com/th?id=OIP.rLG4pu7gkoIPlHgLa2zJ1wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
    </div>
)
let appRoot =document.getElementById("app");
ReactDOM.render(templateThree, appRoot);
