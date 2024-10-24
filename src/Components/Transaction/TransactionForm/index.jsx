import { useState } from "react";
import { useGlobalState } from "../../../context/GloblaState";
import { GrAdd } from "react-icons/gr";
function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmount();
    setDescription("");
  };
  return (
    <div>
      <form className="w-full h-52 flex flex-col justify-between" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="income"
          className="border-b-2 px-2 py-2 mb-2 w-full bg-transparent unpercase outline-none  focus:border-red-300 transition-colors block rounded-l-md rounded-r-md "
          onChange={(e) => setDescription(e.target.value)}
          required
          value={description}
        />
        <input
          type="number"
          step="0"
          className="border-b-2 px-3 py-2 mb-4 w-full bg-transparent unpercase outline-none focus:border-red-300 transition-colors block rounded-r-md rounded-l-md"
          placeholder="00:00"
          required
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <div className="flex justify-center h-12">
          <button className="bg-white text-[#4C489D] px-6 py-2 shadow-md shadow-[#4C489D] gap-4 rounded-xl flex items-center hover:px-9 duration-300">
            Add Transaction
            <GrAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
