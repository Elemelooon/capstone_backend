import {useState, useEffect} from "react";
import axios from "axios";

const Adddisplay = () => {
    let [measure, setMeasure] = useState("");
    let [ingredient, setIngredient] = useState("");
    let [comment, setComment] = useState("");
    let [recipe, setRecipe] = useState("");
    let [display, setDisplay] = useState([]);

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
            // alert(response.data);
        })
        //getData now stores the data 
    }
    useEffect(
        () => {
            let url = "http://localhost/wd76_php/add_display.php";
            axios.get(url).then(
                (response) => {
                    setDisplay(response.data);
                    
                }
            );
        },[] //by removing the limiter the data will be sent continuosly []
    )// getting the data from the database using axios from the php file that shows the students table

    let deleteRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('function', 2);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/add_display.php",
            data: getData
        }).then((response) => {
            // alert(response.data);
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
            // alert(response.data);
        })
    }
    return ( 
        <>
            <h1>Add Ingredients</h1>
            <form action="">
                <input type="text" name="measure" id="measure" placeholder="Input Measurement" value={measure} onChange={(e) => setMeasure(e.target.value)}/>
                <input type="text" name="ingredient" id="ingredient" placeholder="Input Ingredient" value={ingredient} onChange={(e) => setIngredient(e.target.value)}/>
                <input type="text" name="comment" id="comment" placeholder="Input comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
                <input type="text" name="recipe" id="recipe" placeholder="Input Recipe ID" value={recipe} onChange={(e) => setRecipe(e.target.value)}/>
                <button onClick={addIngredient}>Submit</button>
            </form>
            {measure} <br />
            {ingredient}<br />
            {comment} <br />
            {recipe}<br />
            <h1>Ingredients List</h1>
            <table border={1}>
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
                                    <input type="text" defaultValue={val.measurement} id={"measurement"+ val.recipeingredient_id}/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.ingredient_display} id={"ingredient_display"+ val.recipeingredient_id} />
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.comment} id={"comment"+ val.recipeingredient_id} />
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.recipe_id} id={"recipe_id"+ val.recipeingredient_id} />
                                </td>
                                <td>
                                    <button id={val.recipeingredient_id} onClick={updateRecipe}>UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.recipeingredient_id} onClick={deleteRecipe}>DELETE</button>
                                </td>
                                
                            </tr>
                            );
                            }
                        )
                        
                    }
                </tbody>
            </table>
        </>
     );
}
 
export default Adddisplay;