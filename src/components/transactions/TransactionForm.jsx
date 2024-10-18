import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionForm() {
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

    setDescription("");
    setAmount(0);
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
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          placeholder="0.00"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md block mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={amount}
        />
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md block w-full font-semibold transition transform hover:scale-105"
          disabled={!description || !amount}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
