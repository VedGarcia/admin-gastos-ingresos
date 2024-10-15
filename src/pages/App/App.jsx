import { useRoutes, BrowserRouter } from 'react-router-dom';
import Incomes from '../incomes_and_pays/incomes';
import Login from '../Login-Registration/login';
import SignUp from '../Login-Registration/SignUp';
import ProtectedRoute from '../Login-Registration/AppRoutes';
import { GlobalProvider } from '../../context/GlobalState';


const AppRoutes = () => {
  let router = useRoutes([
    { path: '/', element: <SignUp /> },  
    { path: '/login', element: <Login /> }, 
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
   <GlobalProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
