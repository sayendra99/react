import React, { useEffect, useState } from "react";
import Restcomp from "./Restcomp";
import rest_data from "../utils/mock";

const Body = () => {
  // Initialize state with the full list of restaurants
  const [restaurants, setRestaurants] = useState(rest_data);

// let us  use another Hook UseHook , 

useEffect(()=>{ apifun();},[]);

const apifun=()=>{
const data= fetch();
}


  // Function to filter the top restaurants based on a condition (e.g., review > 3.5)
  const filterTopRestaurants = () => {
    const filtered_list = restaurants.filter(res => res.review > 3.5);
    setRestaurants(filtered_list); // Update state with the filtered list
  };

  return (
    <div className="Body">
    
      <div className="Filter">
        <button className="filter-button" onClick={filterTopRestaurants}>
          Top Restaurants
        </button>
      </div>

      <div className="rest-container">
        {restaurants.map((restaurant, index) => (
          <Restcomp
            key={index}
            rest_name={restaurant.rest_name}
            img_link={restaurant.img_link}
            Items={restaurant.Items}
            review={restaurant.review}
            prep_time={restaurant.prep_time}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;