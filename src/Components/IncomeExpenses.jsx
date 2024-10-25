import { useGlobalState } from "../Context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = transactions
    .filter((transaction) => transaction.type === "Ingreso")
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "Gasto")
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const wishes = transactions
    .filter((transaction) => transaction.type === "Deseo")
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  return (
    <>
      <div className="flex justify-between my-2">
        <h4 className="text-3xl">Ingresos</h4>
        <p className="text-xl">${income.toFixed(2)}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4 className="text-3xl">Gastos</h4>
        <p className="text-xl ">${expense.toFixed(2)}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4 className="text-3xl">Deseos</h4>
        <p className="text-xl ">${wishes.toFixed(2)}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
