import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Recipe = () => {
    let [recipeId, setRecipeId] = useState("");
    let [recipe, setRecipe] = useState([]);
    
   

    useEffect( () => {
            let url = "http://localhost/wd76_php/capstone-trial.php";
            axios.get(url).then(
                (response) => {
                    setRecipe(response.data);
                }
            );
        },[]
    )
    return ( 
        <>
        <div className="container">
            <div className="row">
                
        {
            recipe.map ((val) => {
                return (
                    <div className="col-md-4">        
                        <div className="card h-100">
                        <img src={`data:image/jpg;base64,${val.image1}`} alt="Recipe" className="w-100" />
                            <div className="card-body">
                            <h5 className="card-title">{val.recipe_name}</h5>
                        
                            <button className="btn btn-outline-dark">
                                <Link to="/Recipelist/recipedetails" state={val}> View More </Link>
                            </button>
                        </div>
                    </div>
                </div>
                            
                );
            })
        }
        
            </div>
        </div>
        
        </>
     );
}

export default Recipe;