import React, { useEffect, useState } from "react";
import Restcomp from "./Restcomp";
import Shimmer from "./Shimmer"; // Import Shimmer component
import rest_data from "../utils/mock";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setRestaurants(rest_data);
      setLoading(false); // Set loading to false once data is fetched
    }, 2000); // Simulating a delay for loading
  }, []);

  // Function to filter the top restaurants based on a condition (e.g., review > 3.5)
  const filterTopRestaurants = () => {
    const filtered_list = restaurants.filter((res) => res.review > 3.5);
    setRestaurants(filtered_list); // Update state with the filtered list
  };

  return (
    <div className="Body">
      <div className="Filter">
      <div className="Search_Btn">
  <input type="text" className="Input_btn" />
  <button className="inp_Btn">Search</button>
</div>



        <button className="filter-button" onClick={filterTopRestaurants}>
          Top Restaurants
        </button>

       
       
      </div>

      <div className="rest-container">
        {loading ? (
          // Show shimmer effect while loading is true
          <Shimmer />
        ) : (
          // Render restaurant components once loading is complete
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
