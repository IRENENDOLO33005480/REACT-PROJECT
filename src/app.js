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
        <p>
            {app.Options.length > 0 ? "here are your options" : "no options here"}
        </p>
        
        <ul>
            <li>Nairobi</li>
            <li>Malindi</li>
        </ul>
    </div>
);
//let appRoot =document.getElementById("app");
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

let appRoot =document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
