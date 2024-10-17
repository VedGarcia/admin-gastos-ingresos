import { GlobalProvider } from "./Context/GlobalState";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionForm from "./Components/Transactions/TransactionForm";
import TransactionList from "./Components/Transactions/TransactionList";
import IncomeExpenses from "./Components/IncomeExpenses";
function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div>
          <Header />
          <IncomeExpenses />
          <Balance />
          <TransactionForm />
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
