import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false, // State to track whether the button is clicked
    };

    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  // Function to handle like button click
  handleLikeClick() {
    this.setState((prevState) => ({
      liked: !prevState.liked, // Toggle liked state ---> State variable will be changes in this practise only never try to do stae=stae+1,.. 
    }));
  }

  render() {
    // Destructure the props object to extract the required properties
    const { Count, Name, Email, Location } = this.props;
    const { liked } = this.state; // Destructure 'liked' state

    // The return statement should be followed directly by the JSX block
    return (
      <div className="User-class">
        <button className="like-button" onClick={this.handleLikeClick}>
          {liked ? "Liked ❤️" : "Like ♡"} {/* Change text and icon based on liked state */}
        </button>

        <h1>Count: {Count}</h1>
        <h2>Name: {Name}</h2>
        <h3>Email: {Email}</h3>
        <h4>Location: {Location}</h4>
      </div>
    );
  }
}

export default UserClass;
