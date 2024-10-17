import { useGlobalState } from "../../../context/GloblaState";

function IncomeExpense() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transactions) => transactions.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  console.log(income);

  return (
    <>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <h4>{1500}</h4>
      </div>
    </>
  );
}

export default IncomeExpense;
