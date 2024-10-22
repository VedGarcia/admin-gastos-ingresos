import { GlobalProvider} from "./Context/GlobalState";
import TransactionForms from "./components/transactions/TransactionForms";
import TransactionList from "./components/transactions/TransactionList";
import Balance from "./components/Balance";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <main className="bg-gray-800 w-full min-h-screen grid grid-cols-5 grid-rows-5 gap-4">
        <h1 className="text-5xl font-bold text-orange-500 col-span-5 border">G50/30/20</h1>
        <div className="row-span-4 col-start-2 row-start-2">
        <TransactionForms />
        <TransactionList />
        </div>
        <div className="col-span-2 row-span-4 col-start-3 row-start-2 border">
        <Balance />
        </div>
      </main>
    </GlobalProvider>
  );
}

export default App;
