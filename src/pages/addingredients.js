import {useState, useEffect} from "react";
import axios from "axios";

const Ingredients = () => {
    let [type, setType] = useState("");
    let [ingredient, setIngredient] = useState("");
    let [ingrList, setIngrList] = useState([]);

    let addIngredient = (e) => {
        e.preventDefault();
        let getData = new FormData();
        getData.append('type', type);
        getData.append('list', ingredient);
        getData.append('function', 1);

        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addingredient.php",
            data: getData
        }).then((response) => {
            // alert(response.data);
        })
        //getData now stores the data 
    }
    useEffect(
        () => {
            let url = "http://localhost/wd76_php/addingredient.php";
            axios.get(url).then(
                (response) => {
                    setIngrList(response.data);
                    
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
            url: "http://localhost/wd76_php/addingredient.php",
            data: getData
        }).then((response) => {
            // alert(response.data);
        })
    }
    let updateRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('type', document.getElementById('ingredient_type' + e.currentTarget.id).value);
        getData.append('list', document.getElementById('ingredient_name' + e.currentTarget.id).value);
        getData.append('function', 3);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addingredient.php",
            data: getData
        }).then((response) => {
            // alert(response.data);
        })
    }
    return ( 
        <>
            <h1>Add Ingredients</h1>
            <form action="">
                <input type="text" name="type" id="type" placeholder="Input Ingredient Type" value={type} onChange={(e) => setType(e.target.value)}/>
                <input type="text" name="list" id="ingredient" placeholder="Input Ingredient Name" value={ingredient} onChange={(e) => setIngredient(e.target.value)}/>
                <button onClick={addIngredient}>Submit</button>
            </form>
            {type} <br />
            {ingredient}<br />
            <h1>Ingredients List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ingredient_type</th>
                        <th>ingredient_name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ingrList.map( (val) => {
                            return(
                            <tr>
                                <td>
                                    <input type="text" defaultValue={val.ingredient_type} id={"ingredient_type"+ val.ingredient_id}/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.ingredient_name} id={"ingredient_name"+ val.ingredient_id} />
                                </td>
                                <td>
                                    <button id={val.ingredient_id} onClick={updateRecipe}>UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.ingredient_id} onClick={deleteRecipe}>DELETE</button>
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
 
export default Ingredients;