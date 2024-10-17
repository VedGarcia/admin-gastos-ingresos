import { useState } from "react";
import { useGlobalState } from "../../Context/GlobalState";

function TransitionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description: description,
      amount: +amount,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="text"
          placeholder="descripcion"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="number"
          step="0.1"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-indigo-700 text white px-3 py-2 rounded-lg block mb-2 w-full">
          add transactions
        </button>
      </form>
    </div>
  );
}

export default TransitionForm;
