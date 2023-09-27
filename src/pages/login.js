import {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
    let navigate = useNavigate();
    let [user, setUser] = useState("");
    let [pass, setPass] = useState("");
    let [error, setError] = useState("");
    let [msg, setMsg] = useState("");

    useEffect(() => {
        let login = localStorage.getItem("login");
        if (login) {
            navigate("/Addrecipe");
        }
        let loginStatus = localStorage.getItem("loginStatus");
        if (loginStatus) {
            setError(loginStatus);
            setTimeout(function(){
                localStorage.clear();
                window.location.reload();
            }, 3000);
        }
        setTimeout(function(){
            setMsg("");
        },5000);
    }, [msg]);


    let handleInputChange = (e, type) => {
        switch(type) {
            case "user":
                setError("");
                setUser(e.target.value);
                if (e.target.value === "") {
                    setError("Username is required");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if (e.target.value === "") {
                    setError("Password is required");
                }
                break;
            default:
        }
    }
    let loginSubmit = () => {
        if (user !== "" && pass != "") {
            let url = "http://localhost/wd76_php/login.php";
            let headers = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            let Data = {
                user: user,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }) . then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response[0].result === "Invalid Username" || response[0].result === "Invalid Password") {
                    setError(response[0].result);
                    
                } else {
                    setMsg(response[0].result);
                    setTimeout(function() {
                        localStorage.setItem("login", true);
                        localStorage.setItem('user', user);
                        navigate("/Addrecipe");
                    }, 5000);
                }
            }).catch((err) => {
                setError(err);
                console.log(err);
            })
        } else {
            setError("All fields are required!")
        }
    }

   
    return ( 
        <>
        <div className="container">
            <h2 className="my-5 py-5">Admin Login:</h2>
                <p>
                    {
                        error !== "" ?
                        <div style={{color: '#842029'}}><b>{error}</b></div> :
                        <div style={{color: '#badbcc'}}><b>{msg}</b></div>
                    }
                </p>
                <label htmlFor="username">Username:</label>
                <input type="text" name="user" id="user" className="form-control" value={user} onChange={(e) => handleInputChange(e, "user")} required/>
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="pass" id="pass" className="form-control" value={pass} onChange={(e) => handleInputChange(e, "pass")} required/>
                <br />
                <button className="btn btn-primary w-100" onClick={loginSubmit}>Login</button>
        </div>
        </>
     );
}
 
export default AdminLogin;