// const Restcomp=(props)=>{



//     return(
//     <div className="restaurant-card">
//     <h3>{props.rest_name}</h3>
//           <img className="card-img" src={props.img_link} alt={props.rest_name} />
//           <h4 className="Card-items">{props.Items.join(", ")}</h4>
//           <h4>Rating: {props.review}</h4>
//           <h4>Preparation Time: {props.prep_time}</h4>
//       </div>);
    
//     }

//     export default Restcomp|

import { Link } from "react-router-dom";

const Restcomp = (props) => {
  const handleCardClick = () => {
    // Call the onSelect function with the restaurant data when clicked
    props.onSelect({
      rest_name: props.rest_name,
      img_link: props.img_link,
      Items: props.Items,
      review: props.review,
      prep_time: props.prep_time
    });
  };

  return (
    <div className="restaurant-card" onClick={handleCardClick}>
      <h3>{props.rest_name}</h3>
      <img className="card-img" src={props.img_link} alt={props.rest_name} />
      <h4 className="Card-items">{props.Items.join(", ")}</h4>
      <h4>Rating: {props.review}</h4>
      <h4>Preparation Time: {props.prep_time}</h4>
      

    </div>
  );
};

export default Restcomp;
