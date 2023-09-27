import {useState, useEffect} from "react";
import axios from "axios";
import AdminNav from "../components/adminnavbar";
const Addfilter = () => {
    let [recipe, setRecipe] = useState("");
    let [ingredient, setIngredient] = useState("");
    let [ingrList, setIngrList] = useState([]);

    let fetchFilter = () => {
        let url = "http://localhost/wd76_php/addfilter.php";
            axios.get(url).then(
                (response) => {
                    setIngrList(response.data);
                    
                }
            );
    };
    let addIngredient = (e) => {
        e.preventDefault();
        let getData = new FormData();
        getData.append('recipe', recipe);
        getData.append('list', ingredient);
        getData.append('function', 1);

        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addfilter.php",
            data: getData
        }).then((response) => {
            fetchFilter();
        })
        //getData now stores the data 
    }
    useEffect(
        () => {
            fetchFilter();
        },[] 
    )

    let deleteRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('function', 2);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addfilter.php",
            data: getData
        }).then((response) => {
            fetchFilter();
        })
    }
    let updateRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('recipe', document.getElementById('recipe_id' + e.currentTarget.id).value);
        getData.append('list', document.getElementById('ingredient_id' + e.currentTarget.id).value);
        getData.append('function', 3);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addfilter.php",
            data: getData
        }).then((response) => {
            fetchFilter();
        })
    }
    return ( 
        <>
        <AdminNav></AdminNav>
        <div className="container">
        <h1 className="my-5">Add Ingredients</h1>
        <form action="">
            <div className="row">
                <div className="col-lg-6">
                <input type="text" className="form-control" name="recipe" id="recipe" placeholder="Input Recipe ID" value={recipe} onChange={(e) => setRecipe(e.target.value)} required/>
                </div>
                <div className="col-lg-6">
                <input type="text" className="form-control" name="list" id="ingredient" placeholder="Input Ingredient ID" value={ingredient} onChange={(e) => setIngredient(e.target.value)} required/>
                </div>
                <div className="text-center">
                <button onClick={addIngredient} className="btn btn-outline-dark my-5 px-5">Submit</button>
                </div>
            </div>
        </form>
        </div>     
            {recipe} <br />
            {ingredient}<br />
            <div className="container">
            <h1>Ingredients List</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>recipe_id</th>
                        <th>ingredient_id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ingrList.map( (val) => {
                            return(
                            <tr>
                                <td>
                                    <input type="text" defaultValue={val.recipe_id} id={"recipe_id"+ val.ingredient_list_id} className="form-control"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.ingredient_id} id={"ingredient_id"+ val.ingredient_list_id} className="form-control"/>
                                </td>
                                <td>
                                    <button id={val.ingredient_list_id} onClick={updateRecipe} className="btn btn-outline-dark">UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.ingredient_list_id} onClick={deleteRecipe} className="btn btn-outline-dark">DELETE</button>
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
 
export default Addfilter;