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

    
  const totalWishes = transactions
    .filter((transaction) => transaction.type === "wish")
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100) || 0;
  const incomesPercentage = Math.round((totalIncomes / totalIncomes) * 100) || 0;
  const wishesPercentage = Math.round((totalWishes / totalIncomes) * 100) || 0;

  if (totalIncomes === 0 && totalExpenses === 0 && totalWishes === 0) {
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
        colorScale={["#e74c3c", "#2ecc71", "#d66d22"]} 
        data={[
          { x: "Expenses", y: expensesPercentage },
          { x: "Incomes", y: incomesPercentage },
          { x: "Wishes", y: wishesPercentage },
        ]}
        animate={{
          duration: 2000,
        }}
        labels={({ datum }) => `${datum.x}: ${datum.y.toFixed(1)}%`}
        labelComponent={
          <VictoryLabel
            style={{
              fill: "black",
              fontSize: 12,
              fontWeight: "bold",
            }}
          />
        }
      />
    </div>
  );
}