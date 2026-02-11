 const element=React.createElement('h1',{id:"one",className:"first" , style:{backgroundColor:"blue",color:"yellow"}},"hellow Sarwpati u r doing it !");
 const element2=React.createElement('h1',{id:"two",className:"first" , style:{backgroundColor:"black",color:"yellow"}},"mja aa rha h !");
 const bbb=React.createElement('div',{},[element,element2])
 const aaa= ReactDOM.createRoot(document.getElementById("root"));
//  aaa.render(element); 
//  aaa.render(element2); 
aaa.render(bbb);