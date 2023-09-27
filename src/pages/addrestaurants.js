import {useState, useEffect} from "react";
import axios from "axios";
import AdminNav from "../components/adminnavbar";
const Addrestaurant = () => {
    let [restaurantname, setRestaurantName] = useState("");
    let [image1, setimg1] = useState("");
    let [locationid, setLocationId] = useState("");
    let [restaurant, setRestaurant] = useState([]);

    let fetchRestaurant = () => {
        let url = "http://localhost/wd76_php/addrestaurant.php";
            axios.get(url).then(
                (response) => {
                    setRestaurant(response.data);
                    
                }
            );
    };
    let addRestaurant = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('restaurantname', restaurantname);
        formData.append('locationid', locationid);
        formData.append('function', 1);
        formData.append('image1', image1);

        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addrestaurant.php",
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then((response) => {
            fetchRestaurant();
        })
        
    }
    useEffect(
        () => {
            fetchRestaurant();
        },[] 
    )

    let deleteRestaurant = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('function', 2);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addrestaurant.php",
            data: getData
        }).then((response) => {
            fetchRestaurant();
        })
    }
    let updateRestaurant = (e) => {
        let formData = new FormData();
        formData.append('id', e.currentTarget.id);
        formData.append('restaurantname', document.getElementById('restaurant_name' + e.currentTarget.id).value);
        formData.append('locationid', document.getElementById('location_id' + e.currentTarget.id).value);
        formData.append('function', 3);

        if (document.getElementById('image1' + e.currentTarget.id).files[0]) {
            formData.append('image1', document.getElementById('restaurant_image' + e.currentTarget.id).files[0]);
        }
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addrestaurant.php",
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}

        }).then((response) => {
            fetchRestaurant();
        })
    }
    return ( 
        <>
        <AdminNav></AdminNav>
            <div className="container">
            <h1 className="my-5">Add Restaurant</h1>
            <form action="">
                <div className="row">
                    <div className="col-lg-4">
                    <input type="text" className="form-control" name="restaurantname" id="restaurantname" placeholder="Input Restaurant Name" value={restaurantname} onChange={(e) => setRestaurantName(e.target.value)} required/>
                    </div>
                    <div className="col-lg-4">
                    <input type="text" className="form-control" name="locationid" id="locationid" placeholder="Input Location ID" value={locationid} onChange={(e) => setLocationId(e.target.value)} required/>
                    </div>
                    <div className="col-lg-4">
                    <input type="file" className="form-control" name="image1" accept="image/*" onChange={(e) => setimg1(e.target.files[0])}/>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={addRestaurant} className="btn btn-outline-dark my-5 px-5">Insert</button>
                </div>
                
            </form>
            </div>
            <div className="container">
            <h1>Restaurant List</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>restaurant_name</th>
                        <th>location_id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurant.map( (val) => {
                            return(
                            <tr>
                                <td>
                                    <input type="text" defaultValue={val.restaurant_name} id={"restaurant_name"+ val.restaurant_id} className="form-control"/>
                                </td>
                                <td>
                                    <input type="text" defaultValue={val.location_id} id={"location_id"+ val.restaurant_id} className="form-control"/>
                                </td>
                                <td>
                                    <img src={`data:image/jpg;base64,${val.restaurant_image}`} alt="Restaurant" width="100" height="100"/>
                                </td>
                                <td>
                                    <input type="file" accept="image/*" onChange={(e) => setimg1(e.target.files[0])} id={"restaurant_image"+ val.restaurant_id} className="form-control"/>
                                </td>
                                <td>
                                    <button id={val.restaurant_id} onClick={updateRestaurant} className="btn btn-outline-dark">UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.restaurant_id} onClick={deleteRestaurant} className="btn btn-outline-dark">DELETE</button>
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
 
export default Addrestaurant;