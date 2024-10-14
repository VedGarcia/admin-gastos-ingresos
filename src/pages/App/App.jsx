import { useRoutes, BrowserRouter } from "react-router-dom";
import Incomes from "../incomes";
import Login_registratio from "../Login-Registration";
import NotFound from "../NotFound";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element:  <Login_registratio />},
    { path: "/incomes", element: <Incomes /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
};

export default App;
