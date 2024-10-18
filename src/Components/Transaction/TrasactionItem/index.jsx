import { useGlobalState } from "../../../context/GloblaState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-purple-500 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center gap-2">
      <p className="text-sm">{transaction.description}</p>
      <span>{transaction.amount}</span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
      >
        x
      </button>
    </li>
  );
}

export default TransactionItem;
