
import React from "react";
import ReactDOM from "react-dom";





// Create the heading element
const heading = React.createElement("h1", { id: "heading" }, "Hello World, React!");



/* 

React.creatElement takes three arguments 
  1. tag type
  2. id name prop( it is must be object  or null)
  3. children

 It is basically used to create element using React & serves as alternating jsx


*/

// const parent= React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"}),[

//         React.createElement(
//             "h1",
//             {},
//         "---Nested Header accessed from the react and it is working ---"),React.createElement(
//             "h2",
//             {},
//         "###Nested Header accessed  H2 @ using arrays from the react and it is working ###")]
// )
const parent = (
    <div id="parent">
      <div id="child">
        <h1>---Nested Header accessed from the react and it is working---</h1>
        <h2>###Nested Header accessed H2 @ using arrays from the react and it is working ###</h2>
      </div>
    </div>
  );
  



const functional_component=() =>
(
   

        <div> <h2>{100+111}</h2>
            <h1>@@@ functional component driven line---</h1></div>
);






// Select the root element and create a root container with React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the heading element inside the root
root.render(
    <div>
        {parent}
        {functional_component()}
    </div>
);


