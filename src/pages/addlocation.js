import {useState, useEffect} from "react";
import axios from "axios";

const AddLocation = () => {
    let [location, setLocation] = useState("");
    let [restolocation, setRestoLocation] = useState([]);


    let fetchLocation = () => {
        let url = "http://localhost/wd76_php/addlocation.php";
            axios.get(url).then(
                (response) => {
                    setRestoLocation(response.data);
                    
                }
            );
    };
    let addLocation = (e) => {
        e.preventDefault();
        let getData = new FormData();
        getData.append('location', location);
        getData.append('function', 1);

        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addlocation.php",
            data: getData
        }).then((response) => {
            fetchLocation();
        })
        //getData now stores the data 
    }
    useEffect(
        () => {
            fetchLocation();
        },[] 
    )

    let deleteLocation = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('function', 2);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addlocation.php",
            data: getData
        }).then((response) => {
            fetchLocation();
        })
    }
    let updateLocation = (e) => {
        let getData = new FormData();
        getData.append('id', e.currentTarget.id);
        getData.append('location', document.getElementById('location' + e.currentTarget.id).value);
        getData.append('function', 3);
        axios({
            method: 'POST',
            url: "http://localhost/wd76_php/addlocation.php",
            data: getData
        }).then((response) => {
            fetchLocation();
        })
    }
    return ( 
        <>  
            <div className="container">
            <h1 className="my-5">Add Locations</h1>
            <form action="">
                <div className="row">
                    <div className="col-12">
                    <input type="text" className="form-control" name="location" id="location" placeholder="Input Location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
                    </div>
                </div>
                <div className="text-center">
                <button onClick={addLocation} className="btn btn-outline-dark my-5 px-5">Insert</button>
                </div>
            </form>
            </div>
            <div className="container">
            <h1>Locations List</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restolocation.map( (val) => {
                            return(
                            <tr>
                                <td>
                                    <input type="text" defaultValue={val.location} id={"location"+ val.location_id} className="form-control"/>
                                </td>
                                <td>
                                    <button id={val.location_id} onClick={updateLocation} className="btn btn-outline-dark">UPDATE</button>
                                </td>
                                <td>
                                    <button id={val.location_id} onClick={deleteLocation} className="btn btn-outline-dark">DELETE</button>
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
 
export default AddLocation;