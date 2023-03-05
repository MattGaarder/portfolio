import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const h1 = document.createElement("h1");
h1.textContent = "This is regular javascript";
h1.className = "header";
console.log(h1);

document.getElementById("root").append(h1);