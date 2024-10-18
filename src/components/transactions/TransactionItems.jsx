import { useGlobalState } from "../../context/GlobalState";
import { BiTrash } from 'react-icons/bi';

export function TransactionItem({ transaction: { id, description, amount } }) {
  const { deleteTransaction } = useGlobalState();
  const sign = amount < 0 ? "-" : "+";

  return (
    <li
      key={id}
      className={`flex justify-between items-center p-4 rounded-lg shadow-md my-2 bg-opacity-80 backdrop-blur-lg transition-transform transform hover:scale-105 ${
        amount < 0 ? "bg-red-500" : "bg-green-500"
      }`}
    >
      <span className="font-medium text-lg">{description}</span>
      <div className="flex items-center space-x-4">
        <span className="text-white font-bold">
          {sign}${Math.abs(amount)}
        </span>
        <button
          onClick={() => deleteTransaction(id)}
          className="p-2 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 transition"
        >
          <BiTrash className="text-white" />
        </button>
      </div>
    </li>
  );
}
