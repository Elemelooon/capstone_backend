import {useState, useEffect} from "react";
import axios from "axios";

const Instruction = () => {
    let [instruct, setInstruct] = useState("");
    let [recipe, setRecipe] = useState("");
    let [instruction, setInstruction] = useState([]);

    let fetchInstruction = () => {
        let url = "http://localhost/wd76_php/add_instruction.php";
            axios.get(url).then(
                (response) => {
                    setInstruction(response.data);
                    
                }
            );
    };
    let addIngredient = (e) => {
        e.preventDefault();
        let getData = new FormData();
        getData.append('instruct', instruct);
        getData.append('recipe', recipe);
        getData.append('function', 1);

        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/add_instruction.php",
            data: getData
        }).then((response) => {
            fetchInstruction();
        })
        //getData now stores the data 
    }
    useEffect(
        () => {
            fetchInstruction();
        },[] 
    )

    let deleteRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('function', 2);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/add_instruction.php",
            data: getData
        }).then((response) => {
            fetchInstruction();
        })
    }
    let updateRecipe = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('instruct', document.getElementById('instruction_text' + e.currentTarget.id).value);
        getData.append('recipe', document.getElementById('recipe_id' + e.currentTarget.id).value);
        getData.append('function', 3);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/add_instruction.php",
            data: getData
        }).then((response) => {
            fetchInstruction();
        })
    }
    return ( 
        <>
            <div className="container">
            <h1 className="my-5">Add Ingredients</h1>
            <form action="">
                <div className="row">
                    <div className="col-lg-6">
                    <input type="text" className="form-control" name="instruct" id="instruct" placeholder="Input Instruction" value={instruct} onChange={(e) => setInstruct(e.target.value)} required/>
                    </div>
                    <div className="col-lg-6">
                    <input type="text" className="form-control" name="recipe" id="recipe" placeholder="Input Recipe ID" value={recipe} onChange={(e) => setRecipe(e.target.value)} required/>
                    </div>
                    <div className="text-center">
                    <button onClick={addIngredient} className="btn btn-outline-dark my-5 px-5">Insert</button>
                    </div>
                </div>
                </form>
            </div>
            {instruct} <br />
            {recipe}<br />

            <div className="container">
            <h1>Ingredients List</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>instruction_text</th>
                        <th>recipe_id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instruction.map( (val) => {
                            return(
                            <tr>
                                <td>
                                    <input type="text" defaultValue={val.instruction_text} id={"instruction_text"+ val.instruction_id} className="form-control"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.recipe_id} id={"recipe_id"+ val.instruction_id} className="form-control"/>
                                </td>
                                <td>
                                    <button id={val.instruction_id} onClick={updateRecipe} className="btn btn-outline-dark">UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.instruction_id} onClick={deleteRecipe} className="btn btn-outline-dark">DELETE</button>
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
 
export default Instruction;