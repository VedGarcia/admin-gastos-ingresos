import { useState } from "react";
import { useGlobalState } from "../../../context/GloblaState";
import { GrAdd } from "react-icons/gr";
function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
  };
  return (
    <div>
      <form className="w-full" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          className="border-b-2 px-2 py-2 mb-2 unpercase outline-none focus:border-red-300 transition-colors block rounded-l-md rounded-r-md "
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          className="border-b-2 px-2 py-2 mb-2 unpercase outline-none focus:border-red-300 transition-colors block rounded-l-md rounded-r-md"
          placeholder="00:00"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-white text-[#4C489D] px-6 py-2 shadow-md shadow-[#4C489D] gap-4 rounded-xl flex items-center hover:px-9 transition-all">
          Add Transaction
          <GrAdd/>
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
