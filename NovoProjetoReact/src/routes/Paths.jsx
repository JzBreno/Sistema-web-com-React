import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useContext} from "react";
import NotFound from './../pages/NotFound';
import { Context } from "../contexts/AuthContext";

const Paths = () => {
    const {logado} = useContext(Context);
    

    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    {
                        logado && (
                            <>
                                <Route path="/home" element={<Home/>}/>

                            </>
                        )
                    }
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>

     );
}
 
export default Paths;