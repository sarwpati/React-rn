import React from "react";
import ReactDOM from "react-dom/client";


const ROOT=ReactDOM.createRoot(document.getElementById("root"))

// function in JSX 

function Greet(props){
    return <h2>hellow {props.name} and my age is {props.age}</h2>
}

const element= < Greet name="rishu" age="23"/>;
// ROOT.render(< Greet name="sarwpati" age="23"/>)
ROOT.render(element);

