import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../Context/GlobalState";
function ExpenseChart() {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

      const totalWishes =
      transactions
        .filter((transaction) => transaction.amount >= 0) 
        .reduce((acc, transaction) => (acc += transaction.amount), 0);
  

  const totalExpensesPercentage = Math.round(
    (totalExpenses / totalIncome) * 100
  );
  const totalIncomePercentage = 100 - totalExpensesPercentage;

  const totalWishesPercentage = Math.round(
    (totalWishes / totalIncome) * 100
  );


  return (
    <VictoryPie
      colorScale={["#ef233c","#0d0c1d", "#3cb371"]}
      data={[
        { x: "Gastos", y: totalExpensesPercentage },
        { x: "Ingresos", y: totalIncomePercentage },
        { x: "Deseos", y: totalWishesPercentage }
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => datum.y}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
