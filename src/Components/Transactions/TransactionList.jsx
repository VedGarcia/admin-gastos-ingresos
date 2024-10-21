import { useGlobalState } from "../../Context/GlobalState";
import { TransactionItem } from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <>
      {/* <h1 className=" text-white text-2xl font-bold bg-gradient-to-r from purple-600 to-pink-500 via-red-400  bg-clip-text leading-normal">
            @JDP</h1> */}
      <h3 className="text-slate-300 text-xl font-bold py-2">Movimientos</h3>
      <div className=" bg-opacity-80 p-6 rounded-md shadow-lg animate-reappear min-h-[200px] max-h-[200px] overflow-y-auto cursor-pointer scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-950 ">
        <ul>
          {transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TransactionList;
