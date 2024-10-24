import { useGlobalState } from "../../context/GloblaState";
function Balance() {
  const { transactions } = useGlobalState();
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc , item) => (acc += item), 0)
  
  return (
    <div className="flex justify-between font-bold text-white border-b mb-4 pb-2 border-white">
      <h3 className="text-xl">Balance</h3>
      <p className="text-2xl">
        ${total.toFixed(2)}
      </p>
    </div>
  );
}

export default Balance;
