import React, { useState } from "react";
import Restcomp from "./Restcomp";
import rest_data from "../utils/mock";
const Body=()=>{

    return(
      <div className="Body">
             <div className="Filter">
        <button className="filter-button">
          Top Restaurants
        </button>
      </div>


        <div className="rest-container">
        {rest_data.map((restaurant, index) => (
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
    );}


    export default Body;