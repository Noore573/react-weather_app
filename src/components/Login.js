import React, { useState, useContext } from "react";
import { LoginContext } from "../context/logincontext";
import "../style/login.css"
function Login() {
    const {setusername,setprofile}=useContext(LoginContext);

    return (
        <div className="home">
            <input type="text" placeholder="username" onChange={(e) => setusername(e.target.value)}></input>
            <input type="text" placeholder="password"></input>
            <button
             onClick={()=>setprofile(true)}
            >Login</button>
            {/* {profile &&<div className="Profile"><h1>{username}</h1> </div>} */}
        </div>
    )
}
export default Login