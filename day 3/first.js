 import React from "react"
 import ReactDOM from "react-dom/client"
  
//  const element=React.createElement('h1',{id:"one",className:"first" , style:{backgroundColor:"blue",color:"yellow"}},"hellow Sarwpati u r doing it !");
//  const element2=React.createElement('h1',{id:"two",className:"first" , style:{backgroundColor:"black",color:"yellow"}},"mja aa rha h !");
//  const bbb=React.createElement('div',{},[element,element2])
const name="rohit";
const abc=(<> <h1 id="one" className="first">hellow sarwpati {name}</h1>
             <h1>hellow rishu</h1>   
               </>)
const www={
    color:"pink",  
    backgroundColor:"black"
 

}
const a1=<h2 style={www}>maja aa rha h</h2>
   
function greet() {
    return <h1>hellow everyone</h1>
};

const meet=()=>{
    return <h1>mai to tik hu</h1>
};
 const aaa= ReactDOM.createRoot(document.getElementById("root"));
//  aaa.render(element); 
//  aaa.render(element2); 
aaa.render(<>{abc} {a1} {greet()} {meet()} </>);