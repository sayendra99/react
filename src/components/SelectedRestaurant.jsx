import React from "react";

const SelectedRestaurant = ({ restaurant }) => {
  if (!restaurant) return null; // Return null if there's no restaurant selected

  return (
    <div className="selected-restaurant">
      <h2>Selected Restaurant</h2>
      <p><strong>{restaurant.rest_name}</strong></p>
      <p>Items: {restaurant.Items.join(", ")}</p>
      <p>Rating: {restaurant.review}</p>
      <p>Preparation Time: {restaurant.prep_time}</p>
    </div>
  );
};

export default SelectedRestaurant;
