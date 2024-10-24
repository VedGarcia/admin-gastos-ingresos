import { useGlobalState } from "../../Context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)
  
  return (
    <div>
      <h3 className="text-3xl text-white m-2">Balance</h3>
      <div className="p-2 ">
        <h4 className="text-5xl text-white">{total}</h4>
      </div>
      <hr className="m-2" />
    </div>
  );
};

export default Balance;
