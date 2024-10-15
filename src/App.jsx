import { GlobalProvider } from "./Context/GlobalState";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionForm from "./Components/Transactions/TransactionForm";
import TransactionList from "./Components/Transactions/TransactionList";
import IncomeExpenses from "./Components/IncomeExpenses";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses/>
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h1>CALCULA TUS GASTOS E INGRESOS</h1>
    </GlobalProvider>
  );
}

export default App;
