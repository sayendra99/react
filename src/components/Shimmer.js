import React from "react";
// import "./Shimmer.css"; // Import the CSS file

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-line shimmer-line-1"></div>
          <div className="shimmer-line shimmer-line-2"></div>
          <div className="shimmer-line shimmer-line-3"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
