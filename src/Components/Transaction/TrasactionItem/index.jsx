import { useGlobalState } from "../../../context/GloblaState";
import { MdDeleteForever } from "react-icons/md";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      className={`text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center gap-2 ${
        transaction.amount < 0 ? "bg-[#877DD4]" : "bg-[#8C6AE6]"
      }`}
    >
      <p className="text-sm font-bold">{transaction.description}</p>
      <div className="flex items-center gap-2">
        <span>{sign}${Math.abs(transaction.amount)}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
