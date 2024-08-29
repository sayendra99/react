
import React from "react";
import ReactDOM from "react-dom";





// Create the heading element
// const heading = React.createElement("h1", { id: "heading" }, "Hello World, React!");



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
// const parent = (
//     <div id="parent">
//       <div id="child">
//         <h1>---Nested Header accessed from the react and it is working---</h1>
//         <h2>###Nested Header accessed H2 @ using arrays from the react and it is working ###</h2>
//       </div>
//     </div>
//   );
  



// const functional_component=() =>
// (
   

//         <div> <h2>{100+111}</h2>
//             <h1>@@@ functional component driven line---</h1></div>
// );




// react app -->swiggy
const Header =() =>{
  return (
<div className="header">  {/* Updated className to match the CSS */}
      <div>
        <img
          className="logo"
          src="https://logonoid.com/images/pizza-pizza-logo.png"
          alt="Pizza Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
)
}


// Create another functional component --> body
// create a component for the restaurent cards which will composited in body

const Restcomp=()=>{

return(
<div className="restaurant-card">
 <h3>Pizza-Hut</h3>
  <img className="card-img" src="https://tb-static.uber.com/prod/image-proc/processed_images/0a59c36193251022e816ffec42d9870d/30be7d11a3ed6f6183354d1933fbb6c7.jpeg"></img>
  <h4 className="Card-items">BiG Dipper Box  , Cinnamon sticks  , Stuffed Crust  , Supreme Pan with butter garlic crust </h4>
  <h4>Rating 4/5</h4>
  <h4>25min</h4>
  </div>);

}
const Body=()=>{

return(
  <div className="Body">
    <div className="Search">Search</div>
    <div className="rest-container">
      <Restcomp />
      <Restcomp />
      <Restcomp />
      <Restcomp />
      <Restcomp />
      <Restcomp />
      <Restcomp />
      <Restcomp />
      <Restcomp />
      <Restcomp />
      <Restcomp />
      <Restcomp />
      </div>
  </div>
);




};


const AppLayout=() =>
{
  return (
    <div class= "app">
<Header/>
<Body/>
    </div>
  )
}






// Select the root element and create a root container with React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the heading element inside the root
root.render(<AppLayout/>);


