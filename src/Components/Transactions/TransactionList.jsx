import { useGlobalState } from "../../Context/GlobalState";
import { TransactionItem } from "./TransactionItem";
function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold py-2">Historial</h3>
      <div className=" bg-opacity-80 p-6 rounded-md shadow-lg animate-reappear min-h-[200px] max-h-[200px] overflow-y-auto cursor-pointer">
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
