import React from "react";
import ReactDOM from "react-dom"; 
import App from "./App";

const pass = prompt('Input pass to enter:');
ReactDOM.render(<App pass={pass}/>, document.getElementById("root"));