
import { useContext } from "react";
import SecurityContext from "../context/SecurityContext";

const useSecurity = () => {
    console.log("Inside use security");
    const context= useContext(SecurityContext);
    console.log("context--->",context.isLoggedIn)
    return context;
}

export default useSecurity;

