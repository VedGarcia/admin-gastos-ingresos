import Header from "../../Components/Header.jsx";
import Balance from "../../Components/Balance/index.jsx";
import TransactionForm from "../../Components/TransactionForm/index.jsx";
function Incomes() {
  return (
    <>
      <Header />
      <Balance />
      <TransactionForm />
      <h1 className="text-2xl font-bold">Hello World </h1>
    </>
  );
}

export default Incomes;
