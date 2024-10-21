import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
import { BsPieChartFill } from "react-icons/bs";

export function ExpenseChart() {
  const { transactions } = useGlobalState();

  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  // Evitar errores de división por cero
  const total = totalIncomes + totalExpenses;

  let expensesPercentage = 0;
  let incomesPercentage = 0;

  if (totalIncomes > 0) {
    expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
    incomesPercentage = 100 - expensesPercentage;
  }

  // Si no hay datos aún
  if (totalIncomes === 0 && totalExpenses === 0) {
    return (
      <div className="bg-white bg-opacity-90 p-4 my-2 rounded-md shadow-md backdrop-blur-md">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <BsPieChartFill className="text-9xl text-pink-400" />
          <h1 className="text-3xl font-bold my-2">No data yet</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white bg-opacity-90 p-4 my-2 rounded-md shadow-md backdrop-blur-md">
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Expenses", y: totalExpenses > 0 ? expensesPercentage : 0 },
          { x: "Incomes", y: totalIncomes > 0 ? incomesPercentage : 100 },
        ]}
        animate={{
          duration: 2000,
        }}
        labels={({ datum }) => datum.y}
        labelComponent={
          <VictoryLabel
            angle={45}
            style={{
              fill: "black",
              fontSize: 20,
              fontWeight: "bold",
            }}
          />
        }
      />
    </div>
  );
}
