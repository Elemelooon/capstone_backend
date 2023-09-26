import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Home = () => {
    let [filter, setFilter] = useState([]);
    let [recipelist, setRecipeList] = useState([]);
    useEffect( () => {
        let url = "http://localhost/wd76_php/ingredient_filter.php";
        axios.get(url).then(
            (response) => {
                setFilter(response.data);
                // console.log(recipe);
            }
        );
    },[]
)
    let clearFilter = () => {
        let checkboxes = document.querySelectorAll(".filter");
        
        checkboxes.forEach(checkbox => {
            if (checkbox.checked == true) {
                checkbox.checked = false;
            } else {
                setRecipeList([]);
            }
        });
    }
    let applyFilter = () => {

        let checkboxes = document.querySelectorAll(".filter");
        const array = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked == true) {
                let kahitano = parseInt(checkbox.value);

                array.push(kahitano);
                console.log(array);
            }
        });
        if (array.length > 0) {
            let getData = new FormData();
            getData.append('id', array);
            getData.append('idlength', array.length);

        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/ingredient_filter2.php",
            data: getData
        }).then((response) => {
            setRecipeList(response.data);
            // console.log(response.data);
        })
        } else {
            setRecipeList([]);
        }
        
    }
    return ( 
        <>
        
        <div className="container">
        <h1>WHAT'S YOUR ULAM?</h1>
            <div className="row g-3">
        {
            filter.map ((val) => {
                return(
                    <div className="col-2">
                    <form action="">
                    <input type="checkbox" name="filter" className="filter" value={val.ingredient_id} onChange={applyFilter}/>
                    <label htmlFor="filter">{val.ingredient_name}</label>
                    </form>
                    </div>
                    
                )
            })
        }
            </div>
            <button className="btn btn-outline-dark" onClick={clearFilter}>Clear</button>
            <button className="btn btn-outline-dark" >Submit</button>
        </div>
                    <div className="container">
                        <div className="row">
        {
            recipelist.map ((data) => {
                return (
                            <div className="col-md-4">        
                                <div className="card h-100">
                                <img src={`data:image/jpg;base64,${data.image1}`} alt={data.recipe_name} className="w-100" />
                                    <div className="card-body">
                                    <h5 className="card-title">{data.recipe_name}</h5>
                        
                                    <button className="btn btn-outline-dark">
                                    <Link to="/Recipelist/recipedetails" state={data}> View More </Link>
                                    </button>
                                    </div>
                                </div>
                            </div>
                       
                )
            })
        }
                        </div>
                    </div>
        </>
     );
}
 
export default Home;