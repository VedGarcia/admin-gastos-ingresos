import { useState } from "react";
import { useGlobalState } from "../../../Context/GlobalState";

const TransactionForms = () => {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0.0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
 
  };
  return (
    <div className="w-full h-auto bg-orange-800/20 p-2 mb-4 rounded">
      <h4 className="text-2xl font-bold text-white">Add Transaction</h4>
      <hr className="my-2" />
      <form onSubmit={onSubmit} className="flex flex-col gap-2 w-full">
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
