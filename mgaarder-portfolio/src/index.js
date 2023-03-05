import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './style.css'

// For react apps step 1: import React from "react"
// step: import ReactDOM from "react-dom"
// render our elements onto our page with ReactDOM.render(< App/>, document.getElementById("root"));


// vanilla javascript
const h1 = document.createElement("h1");
h1.textContent = "This is regular javascript";
h1.className = "header";
console.log(h1);

// react element 
// this cannot be appended because it will just be rendered as [object Object]
const element = (
  <div>
    <h1 className="header">This is JSX</h1>
    <ul>
      <li>About</li>
      <li>Projects</li>
      <li>Contacts</li>
    </ul>
    <h2>This is another element</h2>
  </div>
);
console.log(element)
ReactDOM.render(< App/>, document.getElementById("root"));

// document.getElementById("root").append(JSON.stringify(element));