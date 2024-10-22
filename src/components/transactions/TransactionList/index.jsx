import { useGlobalState } from "../../../Context/GlobalState";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <div className="flex flex-col p-2 w-full h-80 bg-orange-400/40 rounded">
      <h5 className="text-2xl font-bold text-white">Transaction List</h5>
      <hr />
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id)
               
            }}
          >
            x
          </button> 
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
