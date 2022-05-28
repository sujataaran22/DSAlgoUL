import React from "react"
import "../CSS/Login.css"

export const Login=()=>{
    return (
        <div className="container">
            <h1>Login here </h1>
            <label htmlFor=""> Username : </label>
            <input type="text" /><br />
            <label htmlFor="">Password : </label>
            <input type="Password" /><br /><br />
            <button>Log in </button><br /><br />
            <button>Cancel</button>

        </div>
    ) 
}