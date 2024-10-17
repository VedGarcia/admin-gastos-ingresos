import { useGlobalState } from "../../Context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block">History</h3>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </>
  );
}

export default TransactionList;
