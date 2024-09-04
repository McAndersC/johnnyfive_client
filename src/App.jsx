import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import HowTo from "./pages/howto/HowTo";


function App() {

  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },
    {
      path: "/howto",
      element : <HowTo></HowTo>
    },
  ]);


  return <>
    
    <div>
        {/* GLOBAL NAVIGATION */}
        <div className="globale-page-wrapper">
        
            {routes}
        
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
