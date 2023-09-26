import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RandomRestaurant = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [randomRestaurant, setRandomRestaurant] = useState(null);

    useEffect(() => {
        let url = "http://localhost/wd76_php/randomrestaurant.php";
        axios.get(url).then((response) => {
            setRestaurant(response.data);
        selectRandomRestaurant(response.data);
        });
    }, []
    );

    const selectRandomRestaurant = (restaurants) => {
        if (restaurants.length > 0) {
            const randomIndex = Math.floor(Math.random() * restaurants.length);
            setRandomRestaurant(restaurants[randomIndex]);
            }
        };
        


    return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={() => selectRandomRestaurant(restaurant)}>
              Get Random Restaurant
            </button>
          </div>
        </div>
        <div className="row">
          {randomRestaurant && (
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={`data:image/jpg;base64,${randomRestaurant.restaurant_image}`}
                  alt="Recipe"
                  className="w-100"
                />
                <div className="card-body">
                  <h5 className="card-title">{randomRestaurant.restaurant_name}</h5>
                  {/* <button className="btn btn-outline-dark">
                    <Link to="/Recipelist/recipedetails" state={randomRestaurant}>
                      View More
                    </Link>
                  </button> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RandomRestaurant;
