import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        likeStatus: "Like", // Initial like status
      };
  }




  // State will be maintained in object form , we dont need to create more object for each state  just declare in side of state object {-->Beast}

  

  render() {
    // Destructure the props object to extract the required properties
    const { Count, Name, Email, Location } = this.props;
    const { likeStatus } = this.state;

    // The return statement should be followed directly by the JSX block
    return (
      <div className="User-class">

<button className="like-button" onClick={this.handleLikeClick}>
          {likeStatus} ❤️
        </button>


        <h1>Count: {Count}</h1>
        <h2>Name: {Name}</h2> {/* Corrected the typo from Namw to Name */}
        <h3>Email: {Email}</h3>
        <h4>Location: {Location}</h4>
      </div>
    );
  }
}

export default UserClass;
