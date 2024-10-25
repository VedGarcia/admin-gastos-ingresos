import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../Context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "Ingreso")
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "Gasto")
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalWishes = transactions
    .filter((transaction) => transaction.type === "Deseo")
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalTransactions = totalIncome + totalExpenses + totalWishes;

  const totalIncomePercentage = (totalIncome / totalTransactions) * 100;
  const totalExpensesPercentage = (totalExpenses / totalTransactions) * 100;
  const totalWishesPercentage = (totalWishes / totalTransactions) * 100;

  return (
    <VictoryPie
      colorScale={["#475569", "#0F172A", "#1E313B"]}
      data={[
        { x: "Ingresos", y: totalIncomePercentage },
        { x: "Gastos", y: totalExpensesPercentage },
        { x: "Deseos", y: totalWishesPercentage }
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => `${datum.x}: ${datum.y.toFixed(1)}%`}
      labelComponent={
        <VictoryLabel
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
