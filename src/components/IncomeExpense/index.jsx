import { useGlobalState } from "../../Context/GlobalState";
const IncomeExpense = () => {
    const { transactions } = useGlobalState();

    transactions.map((transaction) => console.log(transaction.amount))
    return <>
    <div>
        <h4>Income</h4>
        <p>{2000}</p>
    </div>
    <div>
        <h4>Expense</h4>
        <p>{1500}</p>
    </div>
    </>;
};
export default IncomeExpense