import { useState } from "react";
import { addTransaction } from "../../Context/GlobalState";

const TransactionForms = () => {

  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0.0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(description, amount);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="border bg-gray-300 rounded p-1 outline-none"
          type="text"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="border bg-gray-300 rounded p-1 outline-none"
          type="number"
          placeholder="Enter an Amount 0.00"
          step={0.01}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="border bg-sky-100 rounded p-1">
          Add Transaction
        </button>
      </form>
    </div>
  );
};
export default TransactionForms;
