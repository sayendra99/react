import React, { useEffect, useState } from "react";
import Restcomp from "./Restcomp";
import Shimmer from "./Shimmer"; // Import Shimmer component
import rest_data from "../utils/mock"; // Mock restaurant data
import SelectedRestaurant from "./SelectedRestaurant"; // Component to show selected restaurant details

import useOnlineStatus from "../utils/useOnlineStatus.js";//component to track the user is in Online status Or Not

const Body = () => {
  // State for storing all restaurants and filtered results
  const [restaurants, setRestaurants] = useState([]);
  // State for managing loading state
  const [loading, setLoading] = useState(true);
  // State for search input text
  const [searchText, setSearchText] = useState("");
  // State for storing all restaurants for reset  
  const [allRestaurants, setAllRestaurants] = useState([]);
  // State for storing the selected restaurant data
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const isOnline = useOnlineStatus();// Check online status using the custom hook


  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setRestaurants(rest_data); // Initialize restaurants with mock data
      setAllRestaurants(rest_data); // Save all restaurants for reset
      setLoading(false); // Set loading to false once data is fetched
    }, 2000); // Simulating a delay for loading
  }, []);

  // Function to handle search
  const searchRestaurants = () => {
    const filteredList = allRestaurants.filter((res) =>
      res.rest_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(filteredList); // Update state with the filtered list
  };

  // Function to filter top restaurants based on review
  const filterTopRestaurants = () => {
    const filteredList = allRestaurants.filter((res) => res.review > 3.5);
    setRestaurants(filteredList); // Update state with the filtered list
  };

  // Handle key down event
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchRestaurants(); // Trigger search when Enter key is pressed
    }
  };

  // Handle selecting a restaurant
  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant); // Set the selected restaurant state
  };


  // Story Board Display for Offline Status
  const storyBoardImages = [
    "https://media.gettyimages.com/id/1290300914/photo/boy-dressed-up-and-playing-cook-with-a-hat-and-blue-apron-holding-two-pepperoni-slices-as.jpg?s=2048x2048&w=gi&k=20&c=nfsFZYRCYPc50HrXwFuRyCi1WICjEGawEf8tD9sICHI=",
    "https://media.gettyimages.com/id/52547662/photo/stephanie-myers-delivers-dominos-classic-cheeseburger-pizza-to-donald-trump.jpg?s=612x612&w=gi&k=20&c=M9ytHqxYMy2BywDZEP0Fyw__vaTMFnNdo3_PL-m6KCI=",
    "https://media.istockphoto.com/id/518428978/vector/collection-of-delicious-indian-food.jpg?s=612x612&w=0&k=20&c=0kKvhIN74DMTdmWxDZ20_4R0VyRrbbXpDjlDT2sYGeg=",
    "https://img.freepik.com/premium-photo/different-dishes-mexican-food-4k-hd-photo-background_1193781-10344.jpg",
    "https://cdn.masto.host/sigmoidsocial/media_attachments/files/109/619/868/956/261/219/original/2418220374717b2d.png",
  ];

  return (
    <div className="Body">
      <div className="Filter">
        <div className="Search_Btn">
          <input
            type="text"
            className="Input_btn"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown} // Add key down handler
            placeholder="Search for restaurants..."
          />
          <button className="inp_Btn" onClick={searchRestaurants}>
            Search
          </button>
        </div>

        <button className="filter-button" onClick={filterTopRestaurants}>
          Top Restaurants
        </button>

        <button className="Wfilter-button" onClick={() => setRestaurants(allRestaurants)}>
          All Restaurants
        </button>
      </div>

      <div className="rest-container">
        {loading ? (
          <Shimmer />
        ) : (
          restaurants.map((restaurant, index) => (
            <Restcomp
              key={index}
              rest_name={restaurant.rest_name}
              img_link={restaurant.img_link}
              Items={restaurant.Items}
              review={restaurant.review}
              prep_time={restaurant.prep_time}
              onSelect={handleSelectRestaurant} // Pass the select handler to Restcomp
            />
          ))
        )}
      </div>
      
      {/* Render the SelectedRestaurant component if a restaurant is selected */}
      {selectedRestaurant ? (
        <SelectedRestaurant restaurant={selectedRestaurant} />
      ) : (
        <p>Please select a restaurant to see details.</p> // Message when no restaurant is selected
      )}


<div className="offline-container">
          <h2>You are offline!</h2>
          <p>Check out these story boards:</p>
          <div className="story-board">
            {storyBoardImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Story ${index + 1}`}
                className="story-board-image"
              />
            ))}
          </div>
        </div>


    </div>
  );
};

export default Body;
