import {useState, useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Details = () => {
    const recipeDetail = useLocation();
    const data = recipeDetail.state;
    let [details, setDetails] = useState([]);
    let [instruction, setInstruction] = useState([]);
    

    useEffect( () => {
        let getData = new FormData();
        getData.append('id', data.recipe_id);

        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/recipe_details.php",
            data: getData
        }).then((response) => {
            setDetails(response.data);
        })
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/recipe_instructions.php",
            data: getData
        }).then((response) => {
            setInstruction(response.data);
        })
    },[]
)
    return ( 
        <>
        <div className="container">
            <div>
                <div className="card h-100">
                    
                    <div className="card-body">
                        <h5 className="card-title">{data.recipe_name}</h5>
                            <div className="row g-4">
                                <div className="col-6">
                                    <img src={`data:image/jpg;base64,${data.image1}`} alt="Recipe" className="w-100" />
                                </div>
                                <div className="col-6">
                                    <img src={`data:image/jpg;base64,${data.image2}`} alt="Recipe" className="w-100" />
                                </div>
                            </div>
                        <p className="card-text">
                            Ingredients:
                            <ul>
                        {
                            details.map ((val) => {
                                return (
                            
                                <li>{val.measurement} {val.ingredient_display} {val.comment}</li>
                                )
                            })
                        }
                        </ul>
                            Instructions:
                            <ol>
                            {
                                instruction.map ((value) => {
                                    return (
                                        <li>{value.instruction_text}</li>
                                    )
                                })
                            }
                            </ol>
                            </p>
                    
                    </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default Details;