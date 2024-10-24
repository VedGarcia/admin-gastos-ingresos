import { useGlobalState } from "../../../context/GloblaState";
import { TransactionItem } from "../TrasactionItem";
function TransactionList() {
  const { transactions } = useGlobalState();
  return (
    <>
      <div className="overflow-x-auto">
        <ul className="flex gap-x-3 h-24">
          {transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TransactionList;
