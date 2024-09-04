const Body=()=>{

    return(
      <div className="Body">
        <div className="Search">Search</div>
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