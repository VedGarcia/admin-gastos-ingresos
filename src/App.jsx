import { GlobalProvider, useGlobalState } from './Context/GlobalState'
import Header from './components/Header'
import TransactionForms from './components/transactions/TransactionForms'
import TransactionList from './components/transactions/TransactionList'
import Balance from './components/Balance'
import './App.css'

function App() {
const context = useGlobalState()
  return (
   <GlobalProvider> 
    <Header />
    <TransactionForms />
    <TransactionList />
    <Balance />
    <div className='bg-gray-800 w-full min-h-screen'>
      <h1 className='text-5xl font-bold text-orange-500'>G50/30/20</h1>
    </div>
    <div className="w-40 h-auto">
      <spam>
        {context}
      </spam>
    </div>
   </GlobalProvider>
  )
}

export default App
