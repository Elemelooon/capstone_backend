import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RandomRecipe = () => {
    const [recipe, setRecipe] = useState([]);
    const [randomRecipe, setRandomRecipe] = useState(null);

    useEffect(() => {
        let url = "http://localhost/wd76_php/randomrecipe.php";
        axios.get(url).then((response) => {
        setRecipe(response.data);
        selectRandomRecipe(response.data);
        });
    }, []
    );

    const selectRandomRecipe = (recipes) => {
        if (recipes.length > 0) {
            const randomIndex = Math.floor(Math.random() * recipes.length);
            setRandomRecipe(recipes[randomIndex]);
            }
        };
        


    return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={() => selectRandomRecipe(recipe)}>
              Get Random Recipe
            </button>
          </div>
        </div>
        <div className="row">
          {randomRecipe && (
            <div className="col-md-4">
              <div className="card h-100">
                <img
                  src={`data:image/jpg;base64,${randomRecipe.image1}`}
                  alt="Recipe"
                  className="w-100"
                />
                <div className="card-body">
                  <h5 className="card-title">{randomRecipe.recipe_name}</h5>
                  <button className="btn btn-outline-dark">
                    <Link to="/Recipelist/recipedetails" state={randomRecipe}>
                      View More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RandomRecipe;
