import { useState } from "react";
import { useGlobalState } from "../../Context/GlobalState";
import { TfiPlus } from "react-icons/tfi";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("Ingreso");

  const onSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      let transactionAmount = Math.abs(amount);
      if (type === "Gasto" || type === "Deseo") {
        transactionAmount = -transactionAmount;
      }
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: transactionAmount,
        type,
      });
      setAmount(0);
      setDescription("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <select
          className="bg-gradient-to-r from-gray-800 to-zinc-700 text-white px-4 py-2 rounded-lg shadow-md mb-3 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option className="bg-gray-800" value="Ingreso">
            Ingreso
          </option>
          <option className="bg-gray-800" value="Gasto">
            Gasto
          </option>
          <option className="bg-gray-800" value="Deseo">
            Deseo
          </option>
        </select>
        <input
          className="bg-gradient-to-r from-gray-800 to-zinc-700 text-white px-4 py-2 rounded-lg shadow-md mb-3 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          className="bg-gradient-to-r from-gray-800 to-zinc-700 text-white px-4 py-2 rounded-lg shadow-md mb-3 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="number"
          step="0.1"
          placeholder={`Monto (${type})`}
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <div className="relative">
          <div className="absolute inset-0 bg-[#23273d] opacity-30 rounded-md backdrop-filter backdrop-blur-md transition duration-300 ease-in-out transform scale-100 group-hover:scale-105 group-hover:opacity-50"></div>
          <button
            type="submit"
            className="relative z-10 bg-gradient-to-r from-blue-800 to-gray-700 text-white px-6 py-3 rounded-md block w-full font-semibold transition-transform duration-300 active:scale-95 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 group focus:outline-none focus:ring-3 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Añadir Transacción
            <TfiPlus className="h-6 w-6 float-right" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
