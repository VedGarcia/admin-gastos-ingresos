import { useGlobalState } from "../context/GlobalState";

export function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between items-center my-4 p-4 bg-white bg-opacity-80 backdrop-blur-lg rounded-md shadow-lg animate-reappear">
      <h4 className="text-gray-600 text-lg font-semibold">Your Balance</h4>
      <h1 className="text-3xl font-bold text-gray-800">${total}</h1>
    </div>
  );
}

export default Balance;
