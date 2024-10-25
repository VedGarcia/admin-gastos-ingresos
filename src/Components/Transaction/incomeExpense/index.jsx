import { useGlobalState } from "../../../context/GloblaState";

function IncomeExpense() {
  const { transactions } = useGlobalState();
  const income = 
  transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, transaction) => (acc += transaction.amount), 0)
      .toFixed(1);

  const expense =
    transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, transaction) => (acc += transaction.amount), 0)
      .toFixed(1) * -1;

  const funny =
    transactions
      .filter((transaction) => transaction.type === "funny")
      .reduce((acc, transaction) => (acc += transaction.amount), 0)
      .toFixed(1) * -1;

  return (
    <>
      <div className="flex justify-between my-2 font-bold">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2 font-bold">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
      <div className="flex justify-between my-2 font-bold">
        <h4>Funny</h4>
        <p>{funny}</p>
      </div>
    </>
  );
}

export default IncomeExpense;
