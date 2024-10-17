import { GlobalProvider } from './Context/GlobalState'
import Header from './components/Header'
import TransactionForms from './components/TransactionForms'
import Balance from './components/Balance'
import './App.css'

function App() {

  return (
   <GlobalProvider> 
    <Header />
    <TransactionForms />
    <Balance />
    <div className='bg-gray-800 w-full min-h-screen'>
      <h1 className='text-5xl font-bold text-orange-500'>G50/30/20</h1>
    </div>
   </GlobalProvider>
  )
}

export default App
