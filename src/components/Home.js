import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    function handleClick(param) {
        navigate(param);
    }

    return(
        <div>
            <h1>Home component</h1>
            <button onClick={()=>{handleClick("/login")}}>Login</button><br/>
            <button onClick={()=>{handleClick("/private1")}}>Private 1</button><br/>
            <button onClick={()=>{handleClick("/private2")}}>Private 2</button><br/>
            <button onClick={()=>{handleClick("/public")}}>Public 1</button><br/>
        </div>
    );
}

export default Home;