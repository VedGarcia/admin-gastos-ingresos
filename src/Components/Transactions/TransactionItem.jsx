import { useGlobalState } from "../../Context/GlobalState";
import { AiOutlineClose } from "react-icons/ai";
export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-gray-800 text-white px-4 py-1 rounded-lg mb-3 w-full flex justify-between items-center border-b border-r-2 transition-transform duration-300 active:scale-95 hover:scale-105 ">
      <p className="text-lg">{transaction.description}</p>
      <div>
        <span>{transaction.amount}</span>
        <button className="mb-2 rounded-lg py-2"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          <AiOutlineClose  className="h-5 w-5"/>
        </button>
      </div> 
    </li>
  );
}

export default TransactionItem;
