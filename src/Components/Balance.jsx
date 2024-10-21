import { useGlobalState } from "../Context/GlobalState";
import { FaSackDollar } from "react-icons/fa6";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="flex justify-between">
      <FaSackDollar className="h-7 w-7 m-1 "/>
      <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  );
}

export default Balance;
