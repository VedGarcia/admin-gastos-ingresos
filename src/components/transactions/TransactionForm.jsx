import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionForm() {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState("");
  const [income, setIncome] = useState(0);  
  const [expense, setExpense] = useState(0);  

  const onSubmit = (e) => {
    e.preventDefault();

    if (income) {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: +income,  
      });
    }

    if (expense) {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: -Math.abs(expense),  
      });
    }


    setDescription("");
    setIncome(0);
    setExpense(0);
  };

  return (
    <div className="p-6 bg-white bg-opacity-80 backdrop-blur-lg rounded-md shadow-lg animate-reappear">
      <form onSubmit={onSubmit}>

        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md block mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={description}
        />


        <input
          type="number"
          onChange={(e) => setIncome(e.target.value)}
          step="0.01"
          placeholder="Income Amount"
          className="bg-green-300 text-gray-800 px-4 py-2 rounded-md block mb-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          value={income}
        />

        <input
          type="number"
          onChange={(e) => setExpense(e.target.value)}
          step="0.01"
          placeholder="Expense Amount"
          className="bg-red-300 text-gray-800 px-4 py-2 rounded-md block mb-4 w-full focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          value={expense}
        />

        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md block w-full font-semibold transition transform hover:scale-105"
          disabled={!description || (!income && !expense)}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
