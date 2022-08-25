"use strict";

// JS -javascript xml
var app = {
    title: "Todo Decisions",
    subtitle: "things to focus on",
    Options: ["baseball", "soccer", "tennis", "golf"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.Options.length > 0 ? "here are your options" : "no options here"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            app.Options[0]
        ),
        React.createElement(
            "li",
            null,
            app.Options[1]
        ),
        React.createElement(
            "li",
            null,
            app.Options[2]
        ),
        React.createElement(
            "li",
            null,
            app.Options[3]
        )
    )
);
//*let appRoot =document.getElementById("app");
//ReactDOM.render(template, appRoot);

var count = 0;
var addOne = function addOne() {
    console.log("addOne");
};
var minusOne = function minusOne() {
    console.log("minusOne");
};
var reset = function reset() {
    console.log("reset");
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count:",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "reset"
    )
);

var templateThree = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Landscape"
    ),
    React.createElement("img", { src: "https://www.bing.com/th?id=OIP.rLG4pu7gkoIPlHgLa2zJ1wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" })
);
var appRoot = document.getElementById("app");
ReactDOM.render(templateThree, appRoot);
