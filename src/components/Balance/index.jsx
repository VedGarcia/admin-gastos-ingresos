import { useGlobalState } from "../../Context/GlobalState";

const Balance = () => {
  const {transactions} = useGlobalState();
  const amount = transactions.map(transaction => transaction.amount)
  const total = amount.map((item) =>item.reduce((acc, item) => (acc += item), 0).toFixed(2));
  return (
    <div>
      <h3 className="text-3xl text-white">Balance</h3>
      <hr className="m-2"/>
    <div>
      <h4 className="text-5xl text-white">${total}</h4>
    </div>

    </div>
  );
};

export default Balance;
