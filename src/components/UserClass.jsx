import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Destructure the props object to extract the required properties
    const { Count, Name, Email, Location } = this.props;

    // The return statement should be followed directly by the JSX block
    return (
      <div className="User-class">
        <h1>Count: {Count}</h1>
        <h2>Name: {Name}</h2> {/* Corrected the typo from Namw to Name */}
        <h3>Email: {Email}</h3>
        <h4>Location: {Location}</h4>
      </div>
    );
  }
}

export default UserClass;
