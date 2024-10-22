import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import rest_data from "../utils/mock";



const  Restaurant_Menu_data=()=>
    
{

    const { rest_name } = useParams();

    // State to store the selected restaurant's menu
    const [menuItems, setMenuItems] = useState([]);
    const [restaurantDetails, setRestaurantDetails] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate API call to fetch restaurant menu by filtering the mock data
      const selectedRestaurant = rest_data.find(
        (restaurant) => restaurant.rest_name === rest_name
      );
      if (selectedRestaurant) {
        setMenuItems(selectedRestaurant.Items);
        setRestaurantDetails(selectedRestaurant);
      }
      setLoading(false); // Set loading to false after data is fetched
    }, [rest_name]); // Trigger useEffect when rest_name changes
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="restaurant-menu">
        <h1>{restaurantDetails.rest_name} Menu</h1>
        <p>City: {restaurantDetails.city}</p>
        <p>State: {restaurantDetails.state}</p>
        <p>Review: {restaurantDetails.review}</p>
        <p>Preparation Time: {restaurantDetails.prep_time}</p>
        <img src={restaurantDetails.img_link} alt={restaurantDetails.rest_name} width="300px" />
    
        <h2>Menu Items:</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
 
    
}

export default Restaurant_Menu_data;