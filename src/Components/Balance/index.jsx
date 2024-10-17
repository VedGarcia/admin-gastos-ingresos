import { useGlobalState } from "../../context/GloblaState";
function Balance() {
  const { transactions } = useGlobalState();
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc , item) => (acc += item), 0)
  
  return (
    <div>
      <h3 className="text-xl text-gray-700 font-bold">Balance</h3>
      <p className="text-2xl text-gray-700">
        ${total.toFixed(2)}
      </p>
    </div>
  );
}

export default Balance;
