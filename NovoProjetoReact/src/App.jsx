import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Paths from "./routes/Paths";
import { AuthContext } from "./contexts/AuthContext";


const App = () => {
  
  

  return ( 
    <>
    <AuthContext>
      <Paths/>
    </AuthContext>
    
    </>
   );
}
 
export default App;