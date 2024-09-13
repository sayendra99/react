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

const NoResults = () => {
  return (
    <div className="no-results">
    <img src="/path/to/no-results-image.png" alt="No results found" className="no-results-image" />
    <p>No results found.</p>
  </div>
  );
};

export default Shimmer;
