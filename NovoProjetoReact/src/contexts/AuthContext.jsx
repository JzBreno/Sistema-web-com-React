import { createContext } from "react";
import { useState } from "react";

export const Context = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContext = ({ children}) => {

    const [logado, setLogado] = useState(false);
    
    return ( 
        <>
            <Context.Provider value={{logado, setLogado}}>
                {children}
            </Context.Provider>
        </>
     );
}
 
