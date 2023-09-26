import {useState, useEffect} from "react";
import axios from "axios";

const Addrecipe = () => {
    let [recipeName, setRecipeName] = useState("");
    let [ingredient, setIngredient] = useState("");
    let [img1, setimg1] = useState("");
    let [recipe, setRecipe] = useState([]);

    let addRecipe = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('rname', recipeName);
        formData.append('list', ingredient);
        formData.append('function', 1);
        formData.append('image1', img1);

        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addrecipe.php",
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then((response) => {
            window.location.reload();
        })
        //getData now stores the data 
    }
    useEffect(
        () => {
            let url = "http://localhost/wd76_php/addrecipe.php";
            axios.get(url).then(
                (response) => {
                    setRecipe(response.data);
                    
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
            url: "http://localhost/wd76_php/addrecipe.php",
            data: getData
        }).then((response) => {
            // alert(response.data);
        })
    }
    let updateRecipe = (e) => {
        let formData = new FormData();
        formData.append('id', e.currentTarget.id);
        formData.append('rname', document.getElementById('recipe_name' + e.currentTarget.id).value);
        formData.append('list', document.getElementById('ingredient_list' + e.currentTarget.id).value);
        formData.append('function', 3);

        if (document.getElementById('image1' + e.currentTarget.id).files[0]) {
            formData.append('image1', document.getElementById('image1' + e.currentTarget.id).files[0]);
        }
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addrecipe.php",
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}

        }).then((response) => {
            // alert(response.data);
        })
    }
    return ( 
        <>
            <h1>Add Recipe</h1>
            <form action="">
                <input type="text" name="rname" id="recipeName" placeholder="Input Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
                <input type="text" name="list" id="ingredient" placeholder="Input Ingredient List" value={ingredient} onChange={(e) => setIngredient(e.target.value)}/>
                <input type="file" name="image1" accept="image/*" onChange={(e) => setimg1(e.target.files[0])}/>
                <button onClick={addRecipe}>Submit</button>
            </form>
            {recipeName} <br />
            {ingredient}<br />
            <h1>Recipe List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>recipe_name</th>
                        <th>ingredient_list</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipe.map( (val) => {
                            return(
                            <tr>
                                <td>
                                    <input type="text" defaultValue={val.recipe_name} id={"recipe_name"+ val.recipe_id}/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.ingredient_list} id={"ingredient_list"+ val.recipe_id} />
                                </td>
                                <td>
                                    <img src={`data:image/jpg;base64,${val.image1}`} alt="Recipe" width="100" height="100" />
                                </td>
                                <td>
                                    <input type="file" accept="image/*" onChange={(e) => setimg1(e.target.files[0])} id={"image1"+ val.recipe_id} />
                                </td>
                                <td>
                                    <button id={val.recipe_id} onClick={updateRecipe}>UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.recipe_id} onClick={deleteRecipe}>DELETE</button>
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
 
export default Addrecipe;