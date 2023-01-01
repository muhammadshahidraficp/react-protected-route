import SecurityContext from "./SecurityContext";
import { useState } from "react";

const SecurityProvider = (props)=>{
    const [isLoggedIn, setIsloggedIn] = useState(false);
    return(<SecurityContext.Provider 
        value={
            {
                login:(username, password)=>{
                    if(username==="admin@admin.com" && password==="admin"){
                        setIsloggedIn(true);
                    }
                },
                isLoggedIn: isLoggedIn,
                logout:()=>{setIsloggedIn(false)}
            }
            }
        > 
        {props.children}
        
        </SecurityContext.Provider>)

}
export default SecurityProvider


