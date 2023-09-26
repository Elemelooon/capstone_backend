import {useState, useEffect} from "react";
import axios from "axios";

const Instruction = () => {
    let [instruct, setInstruct] = useState("");
    let [recipe, setRecipe] = useState("");
    let [instruction, setInstruction] = useState([]);

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
            
        })
        //getData now stores the data 
    }
    useEffect(
        () => {
            let url = "http://localhost/wd76_php/add_instruction.php";
            axios.get(url).then(
                (response) => {
                    setInstruction(response.data);
                    
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
            url: "http://localhost/wd76_php/add_instruction.php",
            data: getData
        }).then((response) => {
            // alert(response.data);
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
            // alert(response.data);
        })
    }
    return ( 
        <>
            <h1>Add Ingredients</h1>
            <form action="">
                <input type="text" name="instruct" id="instruct" placeholder="Input Instruction" value={instruct} onChange={(e) => setInstruct(e.target.value)}/>
                <input type="text" name="recipe" id="recipe" placeholder="Input Recipe ID" value={recipe} onChange={(e) => setRecipe(e.target.value)}/>
                <button onClick={addIngredient}>Submit</button>
            </form>
            {instruct} <br />
            {recipe}<br />
            <h1>Ingredients List</h1>
            <table border={1}>
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
                                    <input type="text" defaultValue={val.instruction_text} id={"instruction_text"+ val.instruction_id}/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.recipe_id} id={"recipe_id"+ val.instruction_id} />
                                </td>
                                <td>
                                    <button id={val.instruction_id} onClick={updateRecipe}>UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.instruction_id} onClick={deleteRecipe}>DELETE</button>
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
 
export default Instruction;