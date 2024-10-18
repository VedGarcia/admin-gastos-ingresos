import Header from "../../Components/Header/index.jsx";
import Balance from "../../Components/Balance/index.jsx";
import TransactionForm from "../../Components/Transaction/TransactionForm/index.jsx";
import TransactionList from "../../Components/Transaction/TransactionList/index.jsx";
import IncomeExpense from "../../Components/Transaction/incomeExpense/index.jsx";
function Incomes() {
  return (
    <>
      <div className="text-[#747474] h-screen flex justify-center items-center ">
        <div className="container mx-auto w-2/6">
          <div className="bg-white p-10 rounded-lg flex gap-x-2 ">
            <div>
              <h1 className="text-4xl font-bold">Expense Tracker</h1>
              <IncomeExpense />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-full">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Incomes;
