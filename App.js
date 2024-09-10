import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => (
  <div id="heading">
    <h1>hi from functional component</h1>
    <NestedFunction />
    <NestedFunction></NestedFunction>
    {NestedFunction()}
    {value } declaration
    {ReactElement}
  </div> 
);
const value = "variable ";

const NestedFunction = function () {
  return (
    <div>
    <h2>
      A functional component is a javascript function that reurn some piece of
      jsx or that return react element
    </h2>
    <h2>Nesting react component is known as functional composition</h2>
    </div>
  );
};

const NestedReactElement =(
    <h3>nested Rect Element</h3>
);

const ReactElement = (
    <h2> This is normal react element 
        {NestedReactElement}</h2>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
