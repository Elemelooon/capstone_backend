import {useState, useEffect} from "react";
import axios from "axios";

const Addrecipe = () => {
    let [recipeName, setRecipeName] = useState("");
    let [ingredient, setIngredient] = useState("");
    let [img1, setimg1] = useState("");
    let [recipe, setRecipe] = useState([]);

    let fetchRecipe = () => {
        let url = "http://localhost/wd76_php/addrecipe.php";
            axios.get(url).then(
                (response) => {
                    setRecipe(response.data);
                    
                }
            );
    };
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
            fetchRecipe();
        })
        
    }
    useEffect(
        () => {
            fetchRecipe();
        },[] 
    )

    let deleteRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('function', 2);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addrecipe.php",
            data: getData
        }).then((response) => {
            fetchRecipe();
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
            fetchRecipe();
        })
    }
    return ( 
        <>
            <div className="container">
            <h1 className="my-5">Add Recipe</h1>
            <form action="">
                <div className="row">
                    <div className="col-lg-4">
                    <input type="text" className="form-control" name="rname" id="recipeName" placeholder="Input Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required/>
                    </div>
                    <div className="col-lg-4">
                    <input type="text" className="form-control" name="list" id="ingredient" placeholder="Input Ingredient List" value={ingredient} onChange={(e) => setIngredient(e.target.value)} required/>
                    </div>
                    <div className="col-lg-4">
                    <input type="file" className="form-control" name="image1" accept="image/*" onChange={(e) => setimg1(e.target.files[0])}/>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={addRecipe} className="btn btn-outline-dark my-5 px-5">Insert</button>
                </div>
                
            </form>
            {recipeName} <br />
            {ingredient}<br />
            </div>
            <div className="container">
            <h1>Recipe List</h1>
            <table className="table table-bordered">
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
                                    <input type="text" defaultValue={val.recipe_name} id={"recipe_name"+ val.recipe_id} className="form-control"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.ingredient_list} id={"ingredient_list"+ val.recipe_id} className="form-control"/>
                                </td>
                                <td>
                                    <img src={`data:image/jpg;base64,${val.image1}`} alt="Recipe" width="100" height="100"/>
                                </td>
                                <td>
                                    <input type="file" accept="image/*" onChange={(e) => setimg1(e.target.files[0])} id={"image1"+ val.recipe_id} className="form-control"/>
                                </td>
                                <td>
                                    <button id={val.recipe_id} onClick={updateRecipe} className="btn btn-outline-dark">UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.recipe_id} onClick={deleteRecipe} className="btn btn-outline-dark">DELETE</button>
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
 
export default Addrecipe;