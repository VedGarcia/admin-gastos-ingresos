import { useGlobalState } from "../../../context/GloblaState";
import { TransactionItem } from "../TrasactionItem";
function TransactionList() {
  const { transactions } = useGlobalState();
  return (
    <>
      <h3 className="text-xl font-bold w-full">History</h3>
      <ul >
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
