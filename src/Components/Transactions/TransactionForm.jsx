import { useState } from "react";
import { useGlobalState } from "../../Context/GlobalState";
import { TfiPlus } from "react-icons/tfi";

function TransitionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description: description,
      amount: +amount,
    });
    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
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
          placeholder="00.00"
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

export default TransitionForm;