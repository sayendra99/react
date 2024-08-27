// Create the heading element
const heading = React.createElement("h1", { id: "heading" }, "Hello World, React!");

// Select the root element and create a root container with React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the heading element inside the root
root.render(heading);
