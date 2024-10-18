import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "../transactions/TransactionItems";

export function TransactionList() {
  const { transactions } = useGlobalState();

  if (transactions.length === 0) {
    return (
      <div className="bg-white bg-opacity-80 p-6 rounded-md shadow-lg animate-reappear min-h-[200px] max-h-[200px]">
        <h1 className="text-gray-700 font-bold text-center">
          There are no transactions yet
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-md shadow-lg animate-reappear min-h-[200px] max-h-[400px] overflow-y-auto">
      <h3 className="text-gray-700 text-xl font-bold text-center mb-4">
        History
      </h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
