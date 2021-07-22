import React from "react";
import ReactDOM from "react-dom";
import LogError from "../components/LogError"; 
import App from "./App";

const pass = prompt('Input pass to enter:');
if (pass == '1234') {
  ReactDOM.render(<App />, document.getElementById("root"));
} else {
  ReactDOM.render(<LogError />, document.getElementById("root"));
}