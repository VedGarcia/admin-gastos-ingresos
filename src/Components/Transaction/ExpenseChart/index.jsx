import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../../../context/GloblaState";
import { GrPieChart } from "react-icons/gr";
function ExpenseChat() {
  const { transactions } = useGlobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round(
    (totalExpenses / totalIncome) * 100
  );

  const totalIncomePercentage = 100 - totalExpensesPercentage;

  // Si no hay datos aún
  if (totalIncome === 0 && totalExpenses === 0) {
    return (
      <div className="bg-white text-[#4C489D] p-4 my-2 rounded-md shadow-md shadow-slate-600 lg:h-3/6 ">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <h1 className="text-2xl font-light my-2">There is no data</h1>
          <div className="text-4xl">
            <GrPieChart />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <VictoryPie
        colorScale={["#877DD4", "#8C6AE6"]}
        data={[
          { x: "Expense", y: totalExpensesPercentage },
          { x: "Incomes", y: totalIncomePercentage },
        ]}
        animate={{
          duration: 500,
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={
          <VictoryLabel
            textAnchor={"middle"}
            style={{
              fill: "black",
              fontSize: 16,
              fontWeight: "bold",
            }}
          />
        }
      />
    </div>
  );
}

export default ExpenseChat;
