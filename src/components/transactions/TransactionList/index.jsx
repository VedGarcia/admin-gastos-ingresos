import { useGlobalState } from "../../../Context/GlobalState";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <div className="flex flex-col p-2 w-full h-80 bg-orange-400/40 rounded">
      <h5 className="text-2xl font-bold text-white">Transaction List</h5>
      <hr />
      <div className="overflow-auto">

      {transactions.map((transaction) => (
        <div
        className="bg-white/80 rounded flex justify-between p-2 m-2"
        key={transaction.id}
        >
          <p className="capitalize">{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            {/* x-mark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
              >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TransactionList;
