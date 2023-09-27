import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
    let navigate = useNavigate();
    let {Component} = props;
    useEffect(() => {
        let login = localStorage.getItem("login");
        if (!login) {
            localStorage.setItem("loginStatus", "Please login");
            navigate("/AdminLogin/iXez7pmIiKnfd4FUKVPgXkmeU4loEw", {replace: true});

            
        }
    }, []);

    return(
        <Component />
    )

}