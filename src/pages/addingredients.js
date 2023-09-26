import {useState, useEffect} from "react";
import axios from "axios";

const Ingredients = () => {
    let [type, setType] = useState("");
    let [ingredient, setIngredient] = useState("");
    let [ingrList, setIngrList] = useState([]);


    let fetchIngredient = () => {
        let url = "http://localhost/wd76_php/addingredient.php";
            axios.get(url).then(
                (response) => {
                    setIngrList(response.data);
                    
                }
            );
    };
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
            fetchIngredient();
        })
        //getData now stores the data 
    }
    useEffect(
        () => {
            fetchIngredient();
        },[] 
    )

    let deleteRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('function', 2);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addingredient.php",
            data: getData
        }).then((response) => {
            fetchIngredient();
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
            fetchIngredient();
        })
    }
    return ( 
        <>  
            <div className="container">
            <h1 className="my-5">Add Ingredients</h1>
            <form action="">
                <div className="row">
                    <div className="col-lg-6">
                    <input type="text" className="form-control" name="type" id="type" placeholder="Input Ingredient Type" value={type} onChange={(e) => setType(e.target.value)} required/>
                    </div>
                    <div className="col-lg-6">
                    <input type="text" className="form-control" name="list" id="ingredient" placeholder="Input Ingredient Name" value={ingredient} onChange={(e) => setIngredient(e.target.value)} required/>
                    </div>
                </div>
                <div className="text-center">
                <button onClick={addIngredient} className="btn btn-outline-dark my-5 px-5">Insert</button>
                </div>
            </form>
            </div>
            {type} <br />
            {ingredient}<br />
            <div className="container">
            <h1>Ingredients List</h1>
            <table className="table table-bordered">
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
                                    <input type="text" defaultValue={val.ingredient_type} id={"ingredient_type"+ val.ingredient_id} className="form-control"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.ingredient_name} id={"ingredient_name"+ val.ingredient_id} className="form-control"/>
                                </td>
                                <td>
                                    <button id={val.ingredient_id} onClick={updateRecipe} className="btn btn-outline-dark">UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.ingredient_id} onClick={deleteRecipe} className="btn btn-outline-dark">DELETE</button>
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
 
export default Ingredients;