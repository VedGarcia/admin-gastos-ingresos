import { useGlobalState } from "../context/GlobalState";

export function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item, index) => transactions[index].type === "income")
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item, index) => transactions[index].type === "expense")
    .reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const desires = (
    amounts.filter((item, index) => transactions[index].type === "wish")
    .reduce((acc, item) => (acc += item), 0)
  ).toFixed(2);

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Deseos</h4>
        <p>{desires}</p>
      </div>
    </>
  );
}