import { useGlobalState } from "../../Context/GlobalState";
import { FaDeleteLeft } from "react-icons/fa6";
export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span>{transaction.amount}</span>
        <button className="mb-2 rounded-lg bg-ndigo"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          <FaDeleteLeft />
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
