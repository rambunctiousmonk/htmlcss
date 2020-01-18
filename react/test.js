// function Heading(props) {
//   return (
//     <h2>My React Heading {props.name}</h2>
//   );
// }

// var app = (
//   <Heading name = "James"/>
// );

// ReactDOM.render(app,
//   document.querySelector('#root')
// );

"use strict";

function Heading(props) {
  return React.createElement("h2", null, "My React Heading ", props.name);
}

var app = React.createElement(Heading, {
  name: "James"
});
ReactDOM.render(app, document.querySelector('#root'));