import { GlobalProvider } from "./Context/GlobalState";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionForm from "./Components/Transactions/TransactionForm";
import TransactionList from "./Components/Transactions/TransactionList";
import IncomeExpenses from "./Components/IncomeExpenses";
import ExpenseChart from "./Components/ExpenseChart";
function App() {
  return (
    <GlobalProvider>
      <div className="bg-[#161719] text-white h-screen flex justify-center items-center">
        <div className="bg-[#1f1e1e] p-10 rounded-lg flex gap-x-2 border-2 border-neutral-800  opacity-80">
          <div className="container mx-auto w-3/6">
            <h1 className=" text-4xl font-bold">Seguidor de Gastos</h1> 
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="flex flex-col flex-1">
            <ExpenseChart />
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
