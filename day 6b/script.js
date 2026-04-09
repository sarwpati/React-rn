import React,{useState} from "react";
import ReactDOM from "react-dom/client"




function Counter(){
    let [count,setCount]= useState(0);

    function Increse(){
    count=count+1;
    setCount(count)

    console.log(count);
}
function Decrese(){
    
    setCount(count-1);
}

    return(
        <div className="first">
            <h1>Count is:{count}</h1>
            <button onClick={Increse}>Increment {count}</button>
            <button onClick={Decrese}>Decrement {count}</button>
        
        </div>
        
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter/>)