
import { useContext } from "react";
import SecurityContext from "../context/SecurityContext";

const useSecurity = () => {
    console.log("Inside use security");
    return useContext(SecurityContext);
}

export default useSecurity;

