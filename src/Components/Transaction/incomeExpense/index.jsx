import { useGlobalState } from "../../../context/GloblaState";

function IncomeExpense() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transactions) => transactions.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) 
    .toFixed(2) * -1;

  return (
    <>
      <div className="flex justify-between my-2 font-bold">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2 font-bold">
        <h4>Expense</h4>
        <h4>{expense}</h4>
      </div>
    </>
  );
}

export default IncomeExpense;
