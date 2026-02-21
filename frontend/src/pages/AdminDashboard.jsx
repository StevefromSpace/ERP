import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const AdminDashboard=()=>{
    const navigate=useNavigate();

    useEffect(()=>{
        const isLoggedIn=localStorage.getItem("isLoggedIn");
        const roles=JSON.parse(localStorage.getItem("userRoles")|| "[]");

        if(!isLoggedIn || !roles.includes("admin")){
            navigate("/dashboard");
        }
    }, [navigate]);


    return(
        <h1>Welcome to ADmin Dashbaord</h1>
    );
};


export default AdminDashboard;