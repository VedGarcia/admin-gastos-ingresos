import { useGlobalState } from "../../Context/GlobalState";
const IncomeExpense = () => {
  const { transactions } = useGlobalState();

  transactions.map((transaction) => console.log(transaction.amount));
  return (
    <div  className="flex justify-between mx-20">

      <div className="text-white text-3xl flex flex-col gap-6">
        <h4>Income</h4>
        <p>{2000}</p>
      </div>
      <div className="text-white text-3xl flex flex-col gap-6">
        <h4>Expense</h4>
        <p>{1500}</p>
      </div>
    </div>
  );
};
export default IncomeExpense;
