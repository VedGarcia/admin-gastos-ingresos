import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionForm() {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("income"); 

  const onSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      id: window.crypto.randomUUID(),
      description,
      amount: transactionType === "expense" ? -Math.abs(amount) : +amount,
      type: transactionType, 
    };

    addTransaction(transaction);

    

    // if (transactionType === "income") {
    //   addTransaction({
    //     id: window.crypto.randomUUID(),
    //     description,
    //     amount: +amount,  
    //   });
    // } else if (transactionType === "expense") {
    //   addTransaction({
    //     id: window.crypto.randomUUID(),
    //     description,
    //     amount: -Math.abs(amount),  
    //   });
    // } else if (transactionType === "wish") {
    //   addTransaction({
    //     id: window.crypto.randomUUID(),
    //     description,
    //     amount: +amount,
    //   });
    // }

    setDescription("");
    setAmount(0);
    setTransactionType("income"); 
  };

  return (
    <div className="p-6 bg-white bg-opacity-80 backdrop-blur-lg rounded-md shadow-lg animate-reappear">
      <form onSubmit={onSubmit}>
        <select 
          onChange={(e) => setTransactionType(e.target.value)}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md block mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={transactionType}
        >
          <option value="income">Ingreso</option>
          <option value="expense">Gasto</option>
          <option value="wish">Deseo</option>
        </select>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md block mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={description}
        />
        <input
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
          step="0.01"
          placeholder="Amount"
          className="bg-blue-300 text-gray-800 px-4 py-2 rounded-md block mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={amount}
        />
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md block w-full font-semibold transition transform hover:scale-105"
          disabled={!description || (!amount && transactionType !== "wish")}
        >
          Agregar Transacción
        </button>
      </form>
    </div>
  );
}