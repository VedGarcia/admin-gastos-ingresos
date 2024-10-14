import { useRoutes, BrowserRouter } from 'react-router-dom';
import Incomes from '../incomes_and_pays/incomes';
import Login from '../Login-Registration/login';
import SignUp from '../Login-Registration/SignUp';
import ProtectedRoute from '../Login-Registration/AppRoutes';

const AppRoutes = () => {
  let router = useRoutes([
    { path: '/', element: <SignUp /> },  // SignUp como página principal
    { path: '/login', element: <Login /> },  // Ruta del Login
    {
      path: '/incomes',
      element: (
        <ProtectedRoute>
          <Incomes />
        </ProtectedRoute>
      ),
    },
  ]);

  return router;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
