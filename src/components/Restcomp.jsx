const Restcomp=(props)=>{



    return(
    <div className="restaurant-card">
    <h3>{props.rest_name}</h3>
          <img className="card-img" src={props.img_link} alt={props.rest_name} />
          <h4 className="Card-items">{props.Items.join(", ")}</h4>
          <h4>Rating: {props.review}</h4>
          <h4>Preparation Time: {props.prep_time}</h4>
      </div>);
    
    }

    export default Restcomp