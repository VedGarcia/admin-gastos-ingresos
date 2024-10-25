import { useState } from "react";
import { useGlobalState } from "../../../context/GloblaState";
import { GrAdd } from "react-icons/gr";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income"); // Default type

  const onSubmit = (e) => {
    e.preventDefault();
    let transactionAmount = 0;
    if (type === "income") {
      transactionAmount = +amount;
    } else if (type === "expense") {
      transactionAmount = -Math.abs(amount);
    } else if (type === "funny") {
      transactionAmount = -Math.abs(amount); // Adjusted logic for Funny
    }
    
    // Cambia aquí para usar description en lugar de type
    addTransaction({
      id: window.crypto.randomUUID(),
      description, 
      amount: transactionAmount,
      type
    });

    setDescription("");
    setAmount(0);
  };

  return (
    <div>
      <form className="w-full h-52 flex flex-col justify-between" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Description"
          className="border-b-2 px-2 py-2 mb-2 w-full bg-transparent uppercase outline-none focus:border-red-300 transition-colors block rounded-l-md rounded-r-md"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <select
          className="border-b-2 px-2 py-2 mb-2 w-full bg-transparent uppercase outline-none focus:border-red-300 transition-colors block rounded-l-md rounded-r-md"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="funny">Funny</option>
        </select>
        <input
          type="number"
          step="0"
          className="border-b-2 px-4 py-2 mb-4 w-full bg-transparent uppercase outline-none focus:border-red-300 transition-colors block rounded-r-md rounded-l-md"
          placeholder="Amount"
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