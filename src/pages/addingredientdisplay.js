import {useState, useEffect} from "react";
import axios from "axios";

const Adddisplay = () => {
    let [measure, setMeasure] = useState("");
    let [ingredient, setIngredient] = useState("");
    let [comment, setComment] = useState("");
    let [recipe, setRecipe] = useState("");
    let [display, setDisplay] = useState([]);

    let fetchDisplay = () => {
        let url = "http://localhost/wd76_php/add_display.php";
            axios.get(url).then(
                (response) => {
                    setDisplay(response.data);
                    
                }
            );
    };
    let addIngredient = (e) => {
        e.preventDefault();
        let getData = new FormData();
        getData.append('measure', measure);
        getData.append('ingredient', ingredient);
        getData.append('comment', comment);
        getData.append('recipe', recipe);
        getData.append('function', 1);

        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/add_display.php",
            data: getData
        }).then((response) => {
            fetchDisplay();
        })
        //getData now stores the data 
    }
    useEffect(
        () => {
            fetchDisplay();
        },[] 
    )

    let deleteRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('function', 2);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/add_display.php",
            data: getData
        }).then((response) => {
            fetchDisplay();
        })
    }
    let updateRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('measure', document.getElementById('measurement' + e.currentTarget.id).value);
        getData.append('ingredient', document.getElementById('ingredient_display' + e.currentTarget.id).value);
        getData.append('comment', document.getElementById('comment' + e.currentTarget.id).value);
        getData.append('recipe', document.getElementById('recipe_id' + e.currentTarget.id).value);
        getData.append('function', 3);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/add_display.php",
            data: getData
        }).then((response) => {
            fetchDisplay();
        })
    }
    return ( 
        <>
            <div className="container">
            <h1 className="my-5">Add Ingredients</h1>
            <form action="">
                <div className="row">
                    <div className="col-lg-3">
                    <input type="text" className="form-control" name="measure" id="measure" placeholder="Input Measurement" value={measure} onChange={(e) => setMeasure(e.target.value)} required/>
                    </div>
                    <div className="col-lg-3">
                    <input type="text" className="form-control" name="ingredient" id="ingredient" placeholder="Input Ingredient" value={ingredient} onChange={(e) => setIngredient(e.target.value)} required/>
                    </div>
                    <div className="col-lg-3">
                    <input type="text" className="form-control" name="comment" id="comment" placeholder="Input comment" value={comment} onChange={(e) => setComment(e.target.value)} required/>
                    </div>
                    <div className="col-lg-3">
                    <input type="text" className="form-control" name="recipe" id="recipe" placeholder="Input Recipe ID" value={recipe} onChange={(e) => setRecipe(e.target.value)} required/>
                    </div>
                    <div className="text-center">
                    <button onClick={addIngredient} className="btn btn-outline-dark my-5 px-5">Submit</button>
                    </div>
                </div>
            </form>
            </div>  
            {measure} <br />
            {ingredient}<br />
            {comment} <br />
            {recipe}<br />
            <div className="container">
            <h1>Ingredients List</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>measurement</th>
                        <th>ingredient_display</th>
                        <th>comment</th>
                        <th>recipe_id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        display.map( (val) => {
                            return(
                            <tr>
                                <td>
                                    <input type="text" defaultValue={val.measurement} id={"measurement"+ val.recipeingredient_id} className="form-control"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.ingredient_display} id={"ingredient_display"+ val.recipeingredient_id} className="form-control"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.comment} id={"comment"+ val.recipeingredient_id} className="form-control"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.recipe_id} id={"recipe_id"+ val.recipeingredient_id} className="form-control"/>
                                </td>
                                <td>
                                    <button id={val.recipeingredient_id} onClick={updateRecipe} className="btn btn-outline-dark">UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.recipeingredient_id} onClick={deleteRecipe} className="btn btn-outline-dark">DELETE</button>
                                </td>
                                
                            </tr>
                            );
                            }
                        )
                        
                    }
                </tbody>
            </table>
            </div>
        </>
     );
}
 
export default Adddisplay;