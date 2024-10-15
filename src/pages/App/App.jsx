import { useRoutes, BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "../../context/GloblaState";
import Incomes from "../incomes";
import Login_registratio from "../Login";
import NotFound from "../NotFound";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Login_registratio /> },
    { path: "/incomes", element: <Incomes /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
