// Create the heading element
const heading = React.createElement("h1", { id: "heading" }, "Hello World, React!");



/* 

React.creatElement takes three arguments 
  1. tag type
  2. id name prop( it is must be object  or null)
  3. children

 It is basically used to create element using React & serves as alternating jsx


*/

const parent= React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"}),

        React.createElement(
            "h1",
            {},
        "---Nested Header accessed from the react and it is working ---")
)











// Select the root element and create a root container with React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the heading element inside the root
root.render(parent);

