import {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    let [username, setUser] = useState("");
    let [password, setPass] = useState("");
    // let [login, setLogin] = useState([]);
    let navigate = useNavigate();

    let adminlogin = async (e) => {
        e.preventDefault();
        let getData = new FormData();
        getData.append('user', username);
        getData.append('pass', password);

        try {
            const response = await axios.post("http://localhost/wd76_php/adminlogin.php", getData);
            const data = response.data;

            if (data.success) {

                navigate("/Addrecipe");
            } else {
                // Show an alert on failed login
                alert("Login failed. Please check your credentials.");
                
            }
        } catch (error) {
            console.error("An error occurred:" ,error);
        }
        console.log(username);
        console.log(password);
        // axios({
        //     method: 'POST',
        //     url: "http://localhost/wd76_php/adminlogin.php",
        //     data: getData
        // }).then((response) => {
        //     setLogin(response.data);
            
        // })
        

    }
    return ( 
        <>
        <div className="container">
                <label htmlFor="username">Username:</label>
                <input type="text" name="user" id="user" className="form-control" value={username} onChange={(e) => setUser(e.target.value)} required/>
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="pass" id="pass" className="form-control" value={password} onChange={(e) => setPass(e.target.value)} required/>
                <br />
                <button className="btn btn-primary w-100" onClick={adminlogin}>Login</button>
        </div>
        </>
     );
}
 
export default Login;