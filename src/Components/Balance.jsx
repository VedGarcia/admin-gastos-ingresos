import { useGlobalState } from "../Context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      {JSON.stringify(total, null, 2)}

      <h3>Tu Balance</h3>
      <h1>${total}</h1>
    </div>
  );
}

export default Balance;
