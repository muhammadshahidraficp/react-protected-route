import { useState } from "react";
import useSecurity from "../hooks/useSecurity";

function Login(){
    const[username, setUsername] = useState("");
    const[password, setPasswrod] = useState("");
    const { login } = useSecurity()

    const handleLogin=()=>{
        login(username, password);

    }

    return(
        <div>
            <h1>Login here</h1>
            <label>Username</label>
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/><br/>
            <label>Password</label>
            <input type="password" onChange={(e)=>{setPasswrod(e.target.value)}}/><br/>
            <button onClick={()=>{handleLogin()}}>Login</button>
        </div>
    );
}

export default Login;