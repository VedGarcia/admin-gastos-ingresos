import { useRoutes, BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "../../context/GloblaState";
import Login_registration from "../Login";
import Incomes from "../incomes";
import NotFound from "../NotFound";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Login_registration /> },
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
