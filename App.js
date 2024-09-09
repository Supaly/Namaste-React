import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1",
    { id: "heading" }, 
    "Hello from React");

const parent = React.createElement(
    "div",
    { id: "parent" }, [
    React.createElement(
        "div",
        { id: "child" },
        ["hello from child 1",
            React.createElement("h1", {}, "Hello from nested child 1")]
    ),
    React.createElement(
        "div",
        { id: "child1" },
        ["hello from inner child 2ss",
            React.createElement("h1", {}, "Hello from nested child 2")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
