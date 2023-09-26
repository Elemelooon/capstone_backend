import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RandomRec = () => {
    let [randomId, setRandomId] = useState("");
    let [recipe, setRecipe] = useState([]);
    
   

    useEffect( () => {
        let url = "http://localhost/wd76_php/randromrec.php";
        axios.get(url).then(
        (response) => {
            setRecipe(response.data);
            randomizer(response.data);
            }
            );
        },[]
    )

    let randomizer = (recipes) => {
        let getData = new FormData();
        getData.append('id', randomId);

        if (recipes.length > 0) {
            let randomgen = Math.floor(Math.random() * recipes.length);
            setRandomId(recipes[randomgen]);
        }
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/randromrec.php",
            data: getData
        }).then((response) => {
            
        })
        
    }


    return ( 
        <>
        <div className="container">
            <div className="row">
                
        {
            randomId.map ((val) => {
                return (
                    <div className="col-md-4">        
                        <div className="card h-100">
                        <img src={`data:image/jpg;base64,${val.image1}`} alt="Recipe" className="w-100" />
                            <div className="card-body">
                            <h5 className="card-title">{val.recipe_name}</h5>
                        
                            <button className="btn btn-outline-dark">
                                <Link to="/Recipelist/recipedetails" state={val}> View More </Link>
                            </button>
                            <button className="btn btn-primary" onClick={() => randomizer(recipe)}>
                            Get Random Recipe
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

export default RandomRec;