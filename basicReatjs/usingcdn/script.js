var h1=React.createElement('h1',null,'Hello World');
console.log(h1);
const parent=document.querySelector('#parent')
console.log(parent);
var root=ReactDOM.createRoot(parent);
root.render(h1);