import { useRoutes, BrowserRouter } from 'react-router-dom'
import Incomes from '../incomes_and_pays/incomes'

import Login from '../Login-Registration/login'

const AppRoutes = () =>{
  let router = useRoutes([
    {path: '/', element: <Login />},
    {path: '/incomes', element: <Incomes />},


  ])

  return router;
}
function App() {
  return (
    
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
};

export default App;
