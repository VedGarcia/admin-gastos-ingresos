import Header from "../../Components/Header.jsx";
import Balance from "../../Components/Balance/index.jsx";
import TransactionForm from "../../Components/Transaction/TransactionForm/index.jsx";
import TransactionList from "../../Components/Transaction/TransactionList/index.jsx";
import IncomeExpense from "../../Components/Transaction/incomeExpense/index.jsx";
function Incomes() {
  return (
    <>
      <Header />
      <IncomeExpense/>
      <Balance />
      <TransactionForm />
      <TransactionList />
      <h1 className="text-2xl font-bold">Hello World </h1>
    </>
  );
}

export default Incomes;
