import { useGlobalState } from "../../Context/GlobalState";

const Balance = () => {
  const {transactions} = useGlobalState();
  const amount = transactions.map(transaction => transaction.amount)
  return (
    <div>
      <h3 className="text-3xl text-white">Balance</h3>
      <hr className="m-2"/>
     <ul>
      {JSON.stringify(amount, null, 2)}
      </ul>   

    </div>
  );
};

export default Balance;
