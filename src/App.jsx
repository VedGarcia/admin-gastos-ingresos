import { GlobalProvider } from "./Context/GlobalState";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionForm from "./Components/TransactionForm";
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <TransactionForm/>
      <h1>HEllo WORLD</h1>
    </GlobalProvider>
  );
}

export default App;
