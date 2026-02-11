// let header1=document.createElement("h1");
// header1.style.backgroundColor="blue"
// header1.style.fontSize="30px"
// header1.textContent="hellow sarwpati kumar"



// const react={
//     aaa:function(tag,rang,children) {
//         const element=document.createElement(tag)
//         element.style.backgroundColor=rang
//         element.textContent=children
//         element.style.color="white";
//         return element;
//     }
// }
// const header1=react.aaa("h1","black","hellow coders army");
// const header2=react.aaa("h2","blue","hellow rishuuuu");





// let one=document.getElementById("one")
// one.append(header1)

// one.append(header2)

const element=React.createElement("h1",{},"hellow rishu keep going");
const aaa=ReactDOM.createRoot(document.getElementById("one"));
aaa.render(element)
