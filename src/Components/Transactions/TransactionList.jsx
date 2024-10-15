import { useGlobalState } from "../../Context/GlobalState";

function TransactionList() {
  const { transactions = [] } = useGlobalState();

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button
            onClick={() => {
              console.log(transaction);
            }}
          >
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
