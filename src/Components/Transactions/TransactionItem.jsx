import { useGlobalState } from "../../Context/GlobalState";
import { FaDeleteLeft } from "react-icons/fa6";
export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-2 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-xl">{transaction.description}</p>
      <div>
        <span>{transaction.amount}</span>
        <button className="mb-2 rounded-lg bg-indigo"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          <FaDeleteLeft  className="h-8 w-8"/>
        </button>
      </div> 
    </li>
  );
}

export default TransactionItem;
