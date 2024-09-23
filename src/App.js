
import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Restcomp from "./components/Restcomp";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

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
// const Header =() =>{
//   return (
// <div className="header">  {/* Updated className to match the CSS */}
//       <div>
//         <img
//           className="logo"
//           src="https://logonoid.com/images/pizza-pizza-logo.png"
//           alt="Pizza Logo"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
// )
// }



// Create A object with restaurant data.

// const rest_data=[
//   {
//     city: "Maryville",
//     state:"MO",
//     review:4.5,
//     rest_name:"Pizza-Hut",
//     Items:["Big Dipper Box", "Cinnamon sticks", "Stuffed Crust", "Supreme Pan with butter garlic crust","Pan Pizza","Bread Bites", "Buffalo Chicken"],
//     prep_time: "25min",
//     img_link:"https://tb-static.uber.com/prod/image-proc/processed_images/0a59c36193251022e816ffec42d9870d/30be7d11a3ed6f6183354d1933fbb6c7.jpeg"


//   },

//   {
//     city: "Maryville",
//     state:"MO",
//     review:4.5,
//     rest_name:"Dominos",
//     Items:["Pepperoni Pizza", "Cheese Burst Pizza", "Choco Lava Cake", "Garlic Bread", "Chicken Wings"],
//     prep_time: "20min",
//     img_link:"https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc1OTU4MzE2Mzk1NDcyNzc1/2_dominos-store_eugene-or-e1546984571327-800x400.jpg"


//   },

//   {
//     city: "Maryville",
//     state:"MO",
//     review:4.5,
//     rest_name:"Taco-Bell",
//     Items:[
//       "Crunchy Taco",
//       "Burrito Supreme",
//       "Chicken Quesadilla",
//       "Nacho Fries",
//       "Cheesy Gordita Crunch",
//       "Cinnamon Twists"
//     ],
//     prep_time: "15min",
//     img_link:"https://thumbs.dreamstime.com/b/pink-purple-logo-taco-bell-fast-food-establishment-northern-california-taken-nikon-d-185730391.jpg"


//   },

  
//   {
//     city: "Maryville",
//     state:"MO",
//     review:4.5,
//     rest_name:"Mc_Donald",
//     Items:[
//       "Big Mac",
//       "Quarter Pounder with Cheese",
//       "McNuggets",
//       "Filet-O-Fish",
//       "McChicken",
//       "Egg McMuffin",
//       "Happy Meal",
//       "French Fries",
//       "McFlurry",
//       "Sundae"
//     ],
//     prep_time: "5min",
//     img_link:"https://cloudfront-us-east-2.images.arcpublishing.com/reuters/DVTSRAYLERNWNNZNKS6OCO3Q7M.jpg"


//   },

//   {
//     city: "Maryville",
//     state:"MO",
//     review:4.5,
//     rest_name:"Casey's",
//     Items:[
//       "Casey's Classic Pizza",
//       "Breakfast Pizza",
//       "Taco Pizza",
//       "Cheeseburger Pizza",
//       "Pepperoni Pizza",
//       "Chicken Bacon Ranch Pizza",
//       "Casey's Sub Sandwiches",
//       "Chicken Tenders",
//       "Breadsticks",
//       "Casey's Wings"
//     ],
//     prep_time: "5min",
//     img_link:"https://www.argusleader.com/gcdn/presto/2020/09/30/PDEM/2ac4ee57-3faa-4e47-9348-c7756a7fba6e-cas_brn_tm_rgb_pos_1.jpg"


//   },

//   {
//     city: "Maryville",
//     state:"MO",
//     review:4.5,
//     rest_name:"Hangers",
//     Items:[
//       "Hangar 1 Classic Burger",
//   "Crispy Chicken Sandwich",
//   "Hangar 1 Wings",
//   "BBQ Ribs",
//   "Hangar 1 Salad",
//   "Grilled Cheese",
//   "Fish Tacos",
//   "Hangar 1 Nachos",
//   "Buffalo Chicken Wrap",
//   "Hangar 1 Fries"
//     ],
//     prep_time: "5min",
//     img_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIiv_2NBu20sYqMV1gilbn9ETCdQhDg3JAr70-QJFGRdK02_cj0hN7Ju2Y-rXxzyiWaI&usqp=CAU"


//   },
  
//   {
//     city: "Maryville",
//     state:"MO",
//     review:4.5,
//     rest_name:"Pizza Ranch",
//     Items:[
//       "Buffet Pizza",
//       "Chicken Wings",
//       "Chicken Tenders",
//       "Ranch Stix",
//       "Cactus Bread",
//       "Buffalo Chicken Pizza",
//       "Hawaiian Pizza",
//       "Taco Pizza",
//       "Pepperoni Pizza",
//       "Cheeseburger Pizza"
//     ],
//     prep_time: "5min",
//     img_link:"https://visitnorfolkne.com/wp-content/uploads/2020/02/pizza-ranch-logo.png"


//   },

//   {
//     city: "Maryville",
//     state:"MO",
//     review:4.5,
//     rest_name:"A & G",
//     Items:[
//       "A&G Special Pizza",
//   "Pepperoni Pizza",
//   "Margherita Pizza",
//   "Veggie Pizza",
//   "BBQ Chicken Pizza",
//   "Cheeseburger Pizza",
//   "Garlic Knots",
//   "Chicken Caesar Salad",
//   "Buffalo Wings",
//   "Mozzarella Sticks"
//     ],
//     prep_time: "5min",
//     img_link:"https://assets.earthdiver.com/media/3115432.jpg?xxx"


//   }





// ];







// Create another functional component --> body
// create a component for the restaurent cards which will composited in body

// const Restcomp=(props)=>{



// return(
// <div className="restaurant-card">
// <h3>{props.rest_name}</h3>
//       <img className="card-img" src={props.img_link} alt={props.rest_name} />
//       <h4 className="Card-items">{props.Items.join(", ")}</h4>
//       <h4>Rating: {props.review}</h4>
//       <h4>Preparation Time: {props.prep_time}</h4>
//   </div>);

// }
// const Body=()=>{

// return(
//   <div className="Body">
//     <div className="Search">Search</div>
//     <div className="rest-container">
//     {rest_data.map((restaurant, index) => (
//           <Restcomp
//             key={index}
//             rest_name={restaurant.rest_name}
//             img_link={restaurant.img_link}
//             Items={restaurant.Items}
//             review={restaurant.review}
//             prep_time={restaurant.prep_time}
//             />
//           ))}
  
//       </div>
//   </div>
// );




// };


const AppLayout=() =>
{
  return (
    <div class= "app">
<Header/>
<Body/>
    </div>
  )
}

// app router configurations

const appRouter=createBrowserRouter
(
  [ // sample path for routing to home layout
    {path:"/",element:<AppLayout />},
    //path for routing to about
    {path:"/About",element:<About />},
    
    {path:"/Home",element:<Home />},

    {path:"/Contact",element:<Contact/>}


  ]
);




// Select the root element and create a root container with React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the heading element inside the root
root.render(<RouterProvider router={appRouter}/>);


