import React, { useEffect, useState } from "react";
import Restcomp from "./Restcomp";
import Shimmer from "./Shimmer"; // Import Shimmer component
import rest_data from "../utils/mock";

const Body = () => {
  // State for storing all restaurants and filtered results
  const [restaurants, setRestaurants] = useState([]);
  // State for managing loading state
  const [loading, setLoading] = useState(true);
  // State for search input text
  const [searchText, setSearchText] = useState("");
  // State for storing all restaurants for reset
  const [allRestaurants, setAllRestaurants] = useState([]);

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
          <Shimmer /> // Show shimmer effect while loading
        ) : (
          restaurants.map((restaurant, index) => (
            <Restcomp
              key={index}
              rest_name={restaurant.rest_name}
              img_link={restaurant.img_link}
              Items={restaurant.Items}
              review={restaurant.review}
              prep_time={restaurant.prep_time}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
