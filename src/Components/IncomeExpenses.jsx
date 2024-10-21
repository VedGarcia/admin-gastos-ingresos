import { useGlobalState } from "../Context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  console.log(expense);

  return (
    <>
      <div className="flex justify-between my-2">
        <h4 className="text-3xl">Ingresos</h4>
        <p className="text-xl">${income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4 className="text-3xl">Gastos</h4>
        <p className="text-xl ">${0.00}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
